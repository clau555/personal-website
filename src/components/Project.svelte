<script lang="ts">
    export let image: string | null = null;
    export let title: string | null = null;
    export let text: string | null = null;
    export let linkTitle: string | null = null;
    export let link: string | null = null;
</script>

<div id="container">
    {#if image}
        <div id="thumbnail-container">
            <img src={image} alt="project thumbnail" />
        </div>
    {/if}
    {#if title}
        <h3>{title}</h3>
    {/if}
    {#if text}
        <p>{text}</p>
    {/if}
    {#if link}
        <div id="link">
            <a href={link}>{linkTitle}</a>
            <div id="arrow">→</div>
        </div>
    {/if}
</div>

<style>
    #container {
        border-radius: 1em;
        padding: 1em;
        width: 20em;
        color: var(--background-color);
        background-color: var(--text-color);
        transition: var(--transition-duration);
    }

    #container:hover {
        border-radius: 0.2em;
    }

    #thumbnail-container {
        width: 100%;
        aspect-ratio: 4/1;
        overflow: hidden;
        border-radius: 1em;
        opacity: 0.9;
        box-shadow: 0px 0px 10px var(--background-color);
    }

    img {
        width: 100%;
    }

    #link {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    #arrow {
        transition: var(--transition-duration);
    }

    a {
        color: var(--background-color);
    }

    a:hover ~ #arrow {
        transform: translate(1em);
    }
</style>
