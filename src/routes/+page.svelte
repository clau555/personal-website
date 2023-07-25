<script>
    import PrimaryButton from "./PrimaryButton.svelte";
</script>

<section id="welcome">
    <p class="big-text">Hello, I'm a fullstack developer 👋</p>
    <PrimaryButton link="projects" text="follow the snake &#8605;" isShaking={true} />
</section>

<section id="illustration" />

<style>
    #welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }

    p {
        font-size: 2rem;
        margin: 0;
        text-align: center;
    }

    #illustration {
        background-image: url("./home.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        height: 25em;
        z-index: 1;
    }
</style>
