<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import NavItem from "../components/NavItem.svelte";

    const items: string[] = ["home", "dev", "art", "contact"];
    let selected = writable("");

    function handleItemClick(item: string) {
        selected.set(item);
    }

    onMount(() => {
        let currentRoute: string = window.location.pathname.split("/")[1];
        currentRoute = currentRoute === "" ? items[0] : currentRoute;

        if (items.includes(currentRoute)) {
            selected.set(currentRoute);
        } else {
            selected.set("");
        }
    });
</script>

<nav>
    {#each items as item}
        <NavItem
            route="/{item !== items[0] ? item : ''}"
            label={item}
            selected={$selected === item}
            onClick={handleItemClick}
        />
    {/each}
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 5%;
        width: 100%;
    }

    @media (max-width: 600px) {
        nav {
            flex-direction: column;
        }
    }
</style>
