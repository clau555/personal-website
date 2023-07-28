<nav>
    <a href="/">Lucas Chardonnet</a>
    <div>
        <a id="email" href="mailto:contact@lucas-chardonnet.com">
            <img src="/envelope-regular.svg" alt="email icon" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-chardonnet-52778523a/">
            <img src="/linkedin.svg" alt="linkedin icon" />
        </a>
        <a href="https://github.com/clau555">
            <img src="/github.svg" alt="github icon" />
        </a>
    </div>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 3em;
        padding: 0 10%;
        text-align: center;
    }

    @media (max-width: 800px) {
        nav {
            flex-direction: column;
        }
    }

    div {
        display: flex;
        flex-direction: row;
        gap: 1em;
    }

    a {
        font-size: 3rem;
    }

    a:active {
        opacity: 0.5;
    }

    img {
        height: 1em;
        transition: var(--transition-duration);
    }

    img:hover {
        transform: translateY(-0.1em);
        transition: var(--transition-duration);
    }

    #email {
        margin-right: 0.2em;
    }
</style>
