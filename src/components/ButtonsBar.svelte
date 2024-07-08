<nav>
    <slot />
</nav>

<style>
    nav {
        flex: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 2em;
    }

    @media (max-width: 600px) {
        nav {
            flex-direction: column;
            gap: 0.25em;
        }
    }
</style>
