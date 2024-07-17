<script lang="ts">
    import Title from "../components/Title.svelte";
    import AutoTyper from "../components/AutoTyper.svelte";
    import ButtonsBar from "../components/ButtonsBar.svelte";
    import Button from "../components/Button.svelte";
    import ThemeSwitcher from "../components/ThemeSwitcher.svelte";
</script>

<section>
    <Title />
    <ButtonsBar>
        <Button label="github" link="https://github.com/clau555" />
        <Button label="artstation" link="" />
        <Button label="linkedin" link="https://www.linkedin.com/in/lucas-chardonnet/" />
        <ThemeSwitcher />
    </ButtonsBar>
    <AutoTyper />
    <div>
        <Button label="contact me" link="mailto:lucas.chardonnet1@gmail.com" isHighlighted />
    </div>
</section>

<style>
    section {
        color: var(--text-primary);
        display: flex;
        flex-direction: column;
        gap: 2em;
        max-width: 32em;
        min-height: 100%;
    }

    div {
        display: flex;
    }

    @media (orientation: portrait) {
        section {
            max-width: 100%;
        }
    }
</style>
