<script>
    import Contact from "./Contact.svelte";
    import Welcome from "./Welcome.svelte";

    let displayContact = false;

    function toggleContact() {
        displayContact = !displayContact;
    }
</script>

<section>
    <div id="background-image">
        <img src="./home.png" alt="home illustration" />
    </div>

    {#if !displayContact}
        <Welcome on:message={toggleContact} />
    {:else}
        <Contact on:message={toggleContact} />
    {/if}
</section>

<style>
    section {
        position: relative;
        height: 85vh;
    }

    #background-image {
        height: 100%;
        display: flex;
        justify-content: center;
        overflow: hidden;
    }

    img {
        height: 100%;
        opacity: 1;
        animation: image-appear 3s ease-in-out forwards;
    }

    @keyframes image-appear {
        from {
            opacity: 1;
        }
        to {
            opacity: 0.35;
        }
    }
</style>
