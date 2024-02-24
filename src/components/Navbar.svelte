<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import NavItem from "../components/NavItem.svelte";

    const items: string[] = ["home", "dev", "art", "contact"];
    let selectedItem = writable("");

    function handleItemClick(item: string) {
        selectedItem.set(item);
    }

    function selectItem() {
        let endPoint: string = window.location.pathname.split("/")[1];
        if (endPoint.length === 0) endPoint = items[0];
        if (items.includes(endPoint)) selectedItem.set(endPoint);
    }

    onMount(selectItem);
</script>

<nav>
    {#each items as item}
        <NavItem
            route="/{item !== items[0] ? item : ''}"
            label={item}
            selected={$selectedItem === item}
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
        gap: 3em;
    }

    @media (max-width: 600px) {
        nav {
            flex-direction: column;
            gap: 0.5em;
            padding: 24px 0;
        }
    }
</style>
