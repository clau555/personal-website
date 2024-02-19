<script lang="ts">
    import type { Project } from "../types";
    export let project: Project;
</script>

<div id="container">
    <h1>{project.name}</h1>
    {#if project.description}
        <p>{project.description}</p>
    {/if}
    {#if project.demo}
        <p><a href={project.demo}>website</a></p>
    {/if}
    <p><a href={project.repo}>source</a></p>
</div>

<style>
    #container {
        padding: 1em;
        width: 16em;
        color: var(--text-primary);
        background-color: var(--background-secondary);
        transition: var(--transition-duration);
    }

    h1 {
        letter-spacing: -0.1em;
    }

    a {
        color: var(--accent-color);
        text-decoration: underline;
    }
</style>
