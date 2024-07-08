<script lang="ts">
    import "../global.css";
    import Pattern from "../components/Pattern.svelte";
    import { globalTheme } from "../store.js";

    const pageTitle: string = "Lucas Chardonnet | Software & Digital Art";

    let background: string = "";
    let videoElement: HTMLVideoElement;

    globalTheme.subscribe((theme) => {
        background = theme;
        if (videoElement) videoElement.load();
    });
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

{#if background !== ""}
    <img src="{background}.jpg" alt="background art" />
{/if}
<div id="gradient" />
<Pattern />
<div id="main">
    <slot />
</div>

<style>
    img {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
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

    #main {
        padding: 32px;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media (max-width: 600px) {
        #gradient {
            background: linear-gradient(to top, var(--background-primary) 25%, transparent);
        }
    }
</style>
