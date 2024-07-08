<script lang="ts">
    import { onMount } from "svelte";
    import { globalTheme } from "../store.js";

    const THEMES: string[] = ["dark", "light"];
    let theme: string = "";

    function getPreferredTheme(): string {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES[0] : THEMES[1];
    }

    function initTheme() {
        let savedTheme: string | null = localStorage.getItem("theme") as string | null;
        theme = savedTheme === null ? getPreferredTheme() : savedTheme;
        localStorage.setItem("theme", theme);
        document.documentElement.classList.add(theme + "-theme");
        globalTheme.set(theme);
    }

    function toggleTheme() {
        theme = THEMES[+!THEMES.indexOf(theme)];
        THEMES.forEach((theme_) => {
            document.documentElement.classList.toggle(theme_ + "-theme", theme === theme_);
        });
        localStorage.setItem("theme", theme);
        globalTheme.set(theme);
    }

    onMount(initTheme);
</script>

<button on:click={toggleTheme}>
    <img src="./{theme}.svg" alt="theme toggle" />
</button>

<style>
    button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        margin-left: auto;
        margin-right: 0;
        transition: var(--transition-duration);
    }

    img {
        height: 1em;
        transition: var(--transition-duration);
    }

    @media (max-width: 600px) {
        button {
            margin: 0;
        }
    }
</style>
