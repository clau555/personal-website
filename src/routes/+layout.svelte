<script lang="ts">
    import "../global.css";
    import Navbar from "../components/Navbar.svelte";
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";
    import Pattern from "../components/Pattern.svelte";

    const pageTitle: string = "Lucas Chardonnet | Software & Digital Art";

    let background: string = "";
    let videoElement: HTMLVideoElement;

    function changeBackground(event: CustomEvent) {
        background = event.detail;
        if (videoElement) videoElement.load();
    }
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

{#if background !== ""}
    <video autoplay muted loop bind:this={videoElement}>
        <source src="{background}.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
{/if}
<div id="gradient" />
<Pattern />
<div id="page">
    <div id="bar">
        <Navbar />
        <ThemeSwitcher on:themeChanged={changeBackground} />
    </div>
    <div id="main">
        <slot />
    </div>
</div>

<style>
    video {
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
        background: linear-gradient(to right, var(--background-primary) 30%, transparent);
        z-index: -2;
    }

    #page {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    #bar {
        padding-left: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #main {
        padding: 0 24px 24px 24px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    @media (max-width: 600px) {
        #gradient {
            background: linear-gradient(to top, var(--background-primary) 40%, transparent);
        }

        #main {
            flex-direction: column;
        }
    }
</style>
