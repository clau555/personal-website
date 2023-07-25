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
        border: solid 1px;
        border-color: var(--text-color-secondary);
        border-radius: 1em;
        padding: 1em;
        width: 20em;
        background-color: var(--background-color);
        opacity: 0.5;
        transition: var(--transition-duration);
    }

    #container:hover {
        border-radius: 0.2em;
        opacity: 1;
    }

    #thumbnail-container {
        width: 100%;
        height: 5em;
        overflow: hidden;
        border-radius: 1em;
    }

    img {
        width: 100%;
    }

    p {
        color: var(--text-color-secondary);
    }

    #link {
        display: flex;
        flex-direction: row;
        gap: 0.5em;
    }

    #arrow {
        transition: var(--transition-duration);
    }

    a:hover ~ #arrow {
        transform: translate(1em);
    }
</style>
