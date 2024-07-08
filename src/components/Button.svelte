<script lang="ts">
    export let label: string;
    export let link: string;
    export let isHighlighted: boolean = false;
</script>

<a class:highlighted={isHighlighted} class:disabled={link === ""} href={link}>{label} </a>

<style>
    a {
        color: var(--text-secondary);
        white-space: nowrap;
    }

    a:hover {
        color: var(--text-primary);
        border-color: var(--text-primary);
    }

    .highlighted {
        border: 1px solid var(--text-secondary);
        border-radius: 2px;
        backdrop-filter: blur(8px);
        padding: 1em;
    }

    .disabled {
        pointer-events: none;
        text-decoration: line-through;
    }
</style>
