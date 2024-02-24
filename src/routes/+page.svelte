<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { FACTS } from "../snakeFacts";

    function randomInt(max: number): number {
        return ~~(Math.random() * max);
    }

    const cursor: string = "_";
    const targetText: string = FACTS[randomInt(FACTS.length)];
    const maxTypingSpeed: number = 400;

    let typing: boolean = true;
    let text: string = cursor;
    let index: number = 0;
    let autoTyper: HTMLElement;

    function typeText() {
        if (!typing) return;
        if (index < targetText.length) {
            text = text.slice(0, -1) + targetText[index++];
            text += cursor;
            const speedVariation = randomInt(maxTypingSpeed);
            setTimeout(typeText, maxTypingSpeed - speedVariation);
        } else {
            text = text.slice(0, -1);
        }
        autoTyper.scrollTop = autoTyper.scrollHeight;
    }

    function stopTyping() {
        typing = false;
    }

    onMount(typeText);
    onDestroy(stopTyping);
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
        height: 100%;
        color: var(--text-primary);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
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
        letter-spacing: -0.05em;
    }

    p {
        margin: 0;
    }
</style>
