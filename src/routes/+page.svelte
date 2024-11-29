<script lang="ts">
    import Title from "../components/Title.svelte";
    import AutoTyper from "../components/AutoTyper.svelte";
</script>

<section>
    <Title />
    <AutoTyper />
</section>

<style>
    section {
        color: var(--text-primary);
        display: flex;
        flex-direction: column;
        gap: 2em;
        min-height: 100%;
        max-width: 600px;
    }

    @media (orientation: portrait) {
        section {
            max-width: 100%;
        }
    }
</style>
