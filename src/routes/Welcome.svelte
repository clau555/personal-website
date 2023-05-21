<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    // notify parent page to display contact form
    function clickContact() {
        dispatch("message");
    }
</script>

<p>
    Hello 👋<br />
    I'm a software developer<br />
    <button class="button-secondary">projects</button><br />
    <button class="button-secondary">gallery</button><br />
    <button class="button-primary" id="contact-me" on:click={clickContact}>contact me</button>
</p>

<style>
    p {
        position: absolute;
        top: 0;
        left: 50%;
        translate: -50%;
        font-size: 2.5rem;
        line-height: 1.75em;
        text-align: center;
        opacity: 0;
        animation: text-appear 2s ease-in-out forwards;
        animation-delay: 2s;
    }

    @keyframes text-appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    button {
        font-size: 0.5em;
        width: 10em;
    }

    #contact-me {
        animation: button-highlight 2s ease-out forwards;
        animation-delay: 4s;
    }

    @keyframes button-highlight {
        from {
            box-shadow: none;
        }
        to {
            box-shadow: 0 0 4em var(--text-color);
        }
    }
</style>
