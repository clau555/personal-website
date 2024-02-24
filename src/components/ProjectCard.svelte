<script lang="ts">
    import type { Project } from "../types";
    export let project: Project;
</script>

<div id="container">
    <div id="header">
        <h1>{project.name}</h1>
        <span>■</span>
    </div>
    {#if project.description}
        <p>{project.description}</p>
    {/if}
    <p id="language">{project.language.name}</p>
    <p>
        {#if project.demo}
            <a href={project.demo}>website</a>
            <br />
        {/if}
        <a href={project.repo}>source</a>
    </p>
</div>

<style>
    #container {
        padding: 1em;
        border-radius: 4px;
        color: var(--text-primary);
        background-color: var(--background-secondary);
        transition: var(--transition-duration);
    }

    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h1 {
        font-size: 2em;
        letter-spacing: -0.05em;
        overflow-wrap: break-word;
        margin: 0;
    }

    span {
        display: inline-flex;
        align-items: center;
    }

    a {
        color: var(--accent-color);
        text-decoration: underline;
    }

    #language {
        color: var(--text-secondary);
    }
</style>
