<script lang="ts">
    import Project from "./Project.svelte";
</script>

<section>
    <Project
        image="/seaside-thumbnail.jpg"
        title="Seaside"
        text="A relaxing animated canvas telling you what time of the day it is."
        linkTitle="go to website"
        link="https://clau555.github.io/seaside/"
    />
    <Project
        image="/goodoo-thumbnail.jpg"
        title="Goodoo"
        text="Experimental platformer video game made in Python,
        with procedural generation and physics engine coded from scratch."
        linkTitle="sources"
        link="https://github.com/clau555/goodoo"
    />
    <Project
        title="Color transfert"
        text="Script transferring colors from one image to another."
        linkTitle="sources"
        link="https://github.com/clau555/color-transfer"
    />
    <Project
        title="Personal website"
        text="It's here!"
        linkTitle="sources"
        link="https://github.com/clau555/personal-website"
    />
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 2em;
        padding: 2em;
        z-index: 1;
    }
</style>
