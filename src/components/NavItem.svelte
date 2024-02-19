<script lang="ts">
    export let route: string;
    export let label: string;
    export let selected: boolean;
    export let onClick: (label: string) => void;

    function emitClick() {
        onClick(label);
    }
</script>

<a href={route} class:active={selected} on:click={emitClick}>
    /{label}/
</a>

<style>
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }

    a:hover {
        transform: translateY(0.2em);
        transition: var(--transition-duration);
    }

    .active {
        color: var(--accent-color);
    }
</style>
