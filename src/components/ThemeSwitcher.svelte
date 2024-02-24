<script lang="ts" context="module">
    export const THEMES: string[] = ["dark", "light"];

    function getPreferredTheme(): string {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES[0] : THEMES[1];
    }
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let theme: string = "";

    function initTheme() {
        let savedTheme: string | null = localStorage.getItem("theme") as string | null;
        theme = savedTheme === null ? getPreferredTheme() : savedTheme;
        localStorage.setItem("theme", theme);
        document.documentElement.classList.add(theme + "-theme");
        dispatch("themeChanged", theme);
    }

    export function toggleTheme() {
        theme = THEMES[+!THEMES.indexOf(theme)];
        THEMES.forEach((theme_) => {
            document.documentElement.classList.toggle(theme_ + "-theme", theme === theme_);
        });
        localStorage.setItem("theme", theme);
        dispatch("themeChanged", theme);
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
        padding: 24px;
        transition: var(--transition-duration);
    }

    button:hover {
        transform: translateY(0.2em);
        transition: var(--transition-duration);
    }

    img {
        height: 1em;
    }

    @media (max-width: 600px) {
        button:hover {
            transform: translateX(-0.2em);
        }
    }
</style>
