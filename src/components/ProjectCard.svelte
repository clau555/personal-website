<script lang="ts" context="module">
    export interface Project {
        name: string;
        description: string;
        html_url: string;
        homepage: string;
        language: string;
        stargazers_count: number;
    }
</script>

<script lang="ts">
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
    <p id="language">{project.language}</p>
    {#if project.homepage}
        <a href={project.homepage}>website</a>
        <br />
    {/if}
    <a href={project.html_url}>source</a>
</div>

<style>
    #container {
        padding: 1em;
        border-radius: 2px;
        color: var(--text-primary);
        background-color: var(--background-secondary-transparent);
        backdrop-filter: blur(8px);
        border: solid 1px var(--background-secondary);
        transition: var(--transition-duration);
    }

    #header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h1 {
        font-size: 2em;
        overflow-wrap: break-word;
        margin: 0;
        margin-right: 2em;
    }

    span {
        display: inline-flex;
        align-items: center;
    }

    #language {
        color: var(--text-secondary);
    }

    a {
        color: var(--accent-color);
        text-decoration: underline;
    }
</style>
