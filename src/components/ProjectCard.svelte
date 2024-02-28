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

    let mouseX: number = 0;
    let mouseY: number = 0;
    $: mousePositionStyle = `--mouse-x: ${mouseX}px; --mouse-y: ${mouseY}px;`;

    function handleMouseMove(event: MouseEvent) {
        const target = event.currentTarget as Element;
        const rect: DOMRect = target.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    }
</script>

<div id="container" on:mousemove={handleMouseMove} style={mousePositionStyle}>
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
        border-radius: 8px;
        color: var(--text-primary);
        background-color: var(--background-secondary-transparent);
        backdrop-filter: blur(8px);
        border: solid 1px var(--background-secondary);
        transition: var(--transition-duration);
    }

    #container::before {
        background: radial-gradient(
            32em circle at var(--mouse-x) var(--mouse-y),
            var(--text-primary),
            transparent 60%
        );
        border-radius: inherit;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: opacity ease-in-out 300ms;
        z-index: -1;
    }

    #container:hover::before {
        opacity: 0.2;
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

    #language {
        color: var(--text-secondary);
    }

    a {
        color: var(--accent-color);
        text-decoration: underline;
    }
</style>
