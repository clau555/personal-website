<script lang="ts">
    import LinkItem from "./LinkItem.svelte";
    import ThemeSwitcher from "./ThemeSwitcher.svelte";

    const pages: { label: string; link: string }[] = [
        { label: "/home", link: "/" },
        { label: "/dev", link: "" },
        { label: "/art", link: "" },
        { label: "/blog", link: "" }
    ];

    const socials: { label: string; link: string; isHighlighted: boolean }[] = [
        { label: "email", link: "mailto:lucas.chardonnet1@gmail.com", isHighlighted: true },
        { label: "github", link: "https://github.com/clau555", isHighlighted: false },
        {
            label: "linkedin",
            link: "https://www.linkedin.com/in/lucas-chardonnet/",
            isHighlighted: false
        }
    ];

    let pannelOpened: boolean = false;

    function togglePannel() {
        pannelOpened = !pannelOpened;
    }
</script>

<nav>
    <div class="desktop">
        {#each pages as { label, link }}
            <LinkItem {label} {link} />
        {/each}
    </div>
    <div class="desktop signature">L.C.</div>
    <div class="desktop">
        {#each socials as { label, link, isHighlighted }}
            <LinkItem {label} {link} {isHighlighted} />
        {/each}
        <ThemeSwitcher />
    </div>
    <div class="mobile menu">
        <button on:click={togglePannel}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
                ><path
                    d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
                /></svg
            >
        </button>
        <div class="signature">L.C.</div>
    </div>
</nav>

{#if pannelOpened}
    <div class="mobile panel">
        <div>
            {#each pages as { label, link }}
                <LinkItem {label} {link} />
            {/each}
        </div>
        <div>
            {#each socials as { label, link, isHighlighted }}
                <LinkItem {label} {link} {isHighlighted} />
            {/each}
        </div>
        <div>
            <ThemeSwitcher />
        </div>
    </div>
{/if}

<style>
    nav {
        flex: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        border-bottom: solid 1px var(--background-secondary);
        background-color: var(--background-primary);
        backdrop-filter: blur(8px);
        padding: 0.5em 1em;
    }

    div {
        display: flex;
        gap: 2em;
    }

    svg {
        fill: var(--text-primary);
        height: 1em;
        width: 1em;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
        font-size: 1rem;
    }

    .signature {
        font-family: "Pixelify Sans", sans-serif;
    }

    .mobile,
    .panel {
        display: none;
    }

    .panel div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2em;
    }

    @media (orientation: portrait) {
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }

        .mobile.menu {
            display: flex;
            flex-direction: row;
        }

        .panel {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 1.5em;

            border-bottom: solid 1px var(--background-secondary);
            background-color: var(--background-primary);
            backdrop-filter: blur(8px);
            padding: 1em;
        }
    }
</style>
