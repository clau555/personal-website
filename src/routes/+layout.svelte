<script lang="ts">
    import { page } from "$app/stores";
    import "../global.css";
    import Pattern from "../components/Pattern.svelte";
    import Navbar from "../components/Navbar.svelte";

    $: pageName = $page.url.pathname.split(/(\/)/).filter(Boolean).pop();
</script>

<svelte:head>
    <title>Lucas Chardonnet | Software Engineering & Digital Art</title>
</svelte:head>

{#if pageName === "/"}
    <div id="background-image" />
    <div id="gradient" />
{/if}
<Pattern />
<div id="main-container">
    <Navbar />
    <div id="page">
        <slot />
    </div>
</div>

<style>
    #background-image {
        background-image: var(--bg);
        background-size: cover;
        background-position: center;
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -3;
    }

    #gradient {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, var(--background-primary) 16em, transparent);
        z-index: -2;
    }

    #main-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    #page {
        flex: 1;
        padding: 32px;
        width: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media (orientation: portrait) {
        #gradient {
            background: linear-gradient(to top, var(--background-primary) 50%, transparent);
        }
    }
</style>
