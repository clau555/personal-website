<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { FACTS } from "../snakeFacts";

    const cursor: string = "_";
    const targetText: string = FACTS[~~(Math.random() * FACTS.length)];
    const maxTypingSpeed: number = 400;

    let alive: boolean = true;
    let text: string = cursor;
    let index: number = 0;
    let autoTyper: HTMLElement;

    function typeText() {
        if (!alive) return;
        if (index < targetText.length) {
            text = text.slice(0, -1) + targetText[index++];
            text += cursor;
            const speedVariation = Math.floor(Math.random() * maxTypingSpeed);
            setTimeout(typeText, maxTypingSpeed - speedVariation);
        } else {
            text = text.slice(0, -1);
        }
        autoTyper.scrollTop = autoTyper.scrollHeight;
    }

    function setDead() {
        alive = false;
    }

    onMount(typeText);
    onDestroy(setDead);
</script>

<section>
    <div bind:this={autoTyper} id="autoTyper">{text}</div>
    <div>
        <h1>Lucas Chardonnet</h1>
        <p>
            Hello,<br />
            I'm a software engineer<br />
            and a digital artist.
        </p>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        color: var(--text-primary);
    }

    #autoTyper {
        flex: 1 1 0;
        max-width: 32em;
        margin: 0;
        font-size: 1rem;
        color: var(--accent-color);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    h1 {
        font-size: 4em;
        letter-spacing: -0.1em;
    }

    p {
        margin: 0;
    }
</style>
