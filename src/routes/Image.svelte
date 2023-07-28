<script lang="ts">
    export let src: string;
    export let alt: string;
    export let height: number;
</script>

<div id="illustration-container" style="height: {height}vh">
    <img {src} {alt} />
</div>

<style>
    #illustration-container {
        text-align: center;
        z-index: 1;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>
