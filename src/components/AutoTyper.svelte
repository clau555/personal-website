<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { FACTS } from "../snakeFacts";

    function randomInt(max: number): number {
        return ~~(Math.random() * max);
    }

    const cursor: string = "_";
    const targetText: string = FACTS[randomInt(FACTS.length)];
    const maxTypingDelay: number = 150;

    let typing: boolean = true;
    let text: string = cursor;
    let index: number = 0;
    let autoTyper: HTMLElement;

    function typeText(): void {
        if (!typing) return;

        let lastText: string = text.slice(0, -1);

        if (index < targetText.length) {
            if (targetText[index] === "\n") {
                text = lastText + "<br><br>";
            } else {
                text = lastText + targetText[index];
            }

            text += cursor;
            index++;

            const delayVariation = randomInt(maxTypingDelay);
            setTimeout(typeText, maxTypingDelay - delayVariation);
        } else {
            text = lastText;
        }
        autoTyper.scrollTop = autoTyper.scrollHeight;
    }

    function stopTyping(): void {
        typing = false;
    }

    onMount(typeText);
    onDestroy(stopTyping);
</script>

<div bind:this={autoTyper} id="autoTyper">{@html text}</div>

<style>
    #autoTyper {
        flex-grow: 1;
        height: 16em;
        margin: 0;
        font-size: 1rem;
        color: var(--accent);
        padding: 1em;
        border: solid 1px var(--background-secondary);
        border-radius: 2px;
        background-color: var(--background-secondary-transparent);
        backdrop-filter: blur(8px);
        overflow-y: scroll;
    }
</style>
