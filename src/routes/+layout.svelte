<script lang="ts">
    import "../global.css";
    import Pattern from "../components/Pattern.svelte";
</script>

<svelte:head>
    <title>Lucas Chardonnet | Software Engineering & Digital Art</title>
</svelte:head>

<div id="gradient" />
<Pattern />
<div id="main">
    <slot />
</div>

<style>
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

    @media (orientation: portrait) {
        #gradient {
            background: linear-gradient(to top, var(--background-primary) 50%, transparent);
        }
    }
</style>
