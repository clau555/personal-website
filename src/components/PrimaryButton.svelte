<script lang="ts">
    export let link: string;
    export let text: string;
    export let isShaking: boolean = false;
    let shakeClass = isShaking ? "shake" : "";
</script>

<a class={shakeClass} href={link}>{text}</a>

<style>
    a {
        font-variant: small-caps;
        font-weight: bold;
        text-align: center;
        border-radius: 2em;
        padding: 0.5em 1em;
        border: none;
        white-space: nowrap;
        font-size: 1.5rem;
        color: var(--background-color);
        background-color: var(--text-color);
        transition: var(--transition-duration);
    }

    a:hover {
        cursor: pointer;
        border-radius: 0.2em;
    }

    a:active {
        opacity: 0.5;
        transition: var(--transition-duration);
    }

    .shake {
        animation: shake 1.5s infinite;
    }

    @keyframes shake {
        0% {
            transform: rotate(0);
        }
        70% {
            transform: rotate(0);
        }
        80% {
            transform: rotate(2deg);
        }
        85% {
            transform: rotate(-2deg);
        }
        90% {
            transform: rotate(2deg);
        }
        95% {
            transform: rotate(-2deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }
</style>
