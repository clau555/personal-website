<script lang="ts">
    import "../global.css";
    import Navbar from "../components/Navbar.svelte";
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";

    const pageTitle: string = "Lucas Chardonnet | Software & Digital Art";

    let videoElement: HTMLVideoElement;
    const backgrounds: string[] = ["jellyfish", "penguins"];
    let background: string = backgrounds[0];

    function changeBackground(event: CustomEvent) {
        background = backgrounds[event.detail];
        if (videoElement) videoElement.load();
    }
</script>

<svelte:head>
    <title>{pageTitle}</title>
</svelte:head>

<video autoplay muted loop bind:this={videoElement}>
    <source src="{background}.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
<div id="gradient" />
<div id="pattern" />
<div id="bar">
    <Navbar />
    <ThemeSwitcher on:themeChanged={changeBackground} />
</div>
<div id="main">
    <slot />
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

    #pattern {
        position: absolute;
        top: 0;
        left: 0;
        background-image: radial-gradient(var(--text-primary) 9%, transparent 9%);
        background-size: 4vmin 4vmin;
        background-position: 0%;
        height: 100%;
        width: 100%;
        opacity: 0.1;
        z-index: -1;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #bar {
        padding: 32px;
    }

    #main {
        height: 100%;
        padding: 0 32px 32px 32px;
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
