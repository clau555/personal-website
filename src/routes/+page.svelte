<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { FACTS } from "../snakeFacts";

    function randomInt(max: number): number {
        return ~~(Math.random() * max);
    }

    const cursor: string = "_";
    const targetText: string = FACTS[randomInt(FACTS.length)];
    const maxTypingDelay: number = 300;

    let typing: boolean = true;
    let text: string = cursor;
    let index: number = 0;
    let autoTyper: HTMLElement;

    function typeText() {
        if (!typing) return;
        if (index < targetText.length) {
            text = text.slice(0, -1) + targetText[index++];
            text += cursor;
            const delayVariation = randomInt(maxTypingDelay);
            setTimeout(typeText, maxTypingDelay - delayVariation);
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
            <span>Software Engineering</span><br />
            & <span>Digital Art</span>
        </p>
    </div>
</section>

<style>
    section {
        min-height: 0; /* https://stackoverflow.com/a/14964944 */
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
        padding: 1em;
        border-radius: 2px;
        background-color: var(--background-secondary-transparent);
        backdrop-filter: blur(8px);
        border: solid 1px var(--background-secondary);
    }

    h1 {
        font-size: 4em;
    }

    p {
        margin: 0;
    }

    @media (max-width: 600px) {
        h1 {
            font-size: 3.5em;
        }
    }
</style>
