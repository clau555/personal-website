<script>
    import PrimaryButton from "./PrimaryButton.svelte";
    import Image from "./Image.svelte";
</script>

<div id="welcome">
    <p class="big-text">Hello, I'm a fullstack developer 👋</p>
    <PrimaryButton link="projects" text="follow the snake &#8605;" isShaking={true} />
</div>

<Image src="home.png" alt="welcoming snake" height={55} />

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
</style>
