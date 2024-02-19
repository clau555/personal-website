<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const themes: string[] = ["dark", "light"];
    export let currentTheme: string = themes[0];

    export function getCurrTheme(): string {
        return currentTheme;
    }

    export function toggleTheme() {
        currentTheme = currentTheme === themes[0] ? themes[1] : themes[0];
        themes.forEach((theme) => {
            document.documentElement.classList.toggle(theme + "-theme", currentTheme === theme);
        });
        dispatch("themeChanged", themes.indexOf(currentTheme));
    }

    onMount(() => {
        document.documentElement.classList.add(currentTheme + "-theme");
    });
</script>

<button on:click={toggleTheme}>
    <img src="./{currentTheme}.svg" alt="theme toggle" />
</button>

<style>
    button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        transition: var(--transition-duration);
    }

    button:hover {
        transform: translateY(0.2em);
        transition: var(--transition-duration);
    }

    img {
        height: 1em;
    }
</style>
