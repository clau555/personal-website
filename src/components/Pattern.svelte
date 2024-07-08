<script lang="ts">
    import { onMount } from "svelte";

    const TILE_SIZE: number = 24;
    const TILE_GAP: number = 2;
    const ANIMATION_CLASS: string = "highlighted-tile";
    const MAX_WAVE_ITERATIONS: number = 3;

    let animating: boolean = true;
    let columns: number = 0;
    let rows: number = 0;
    let tiles: number[] = [];

    function resizeGrid() {
        columns = ~~(window.innerWidth / TILE_SIZE);
        rows = ~~(window.innerHeight / TILE_SIZE);
        tiles = Array.from({ length: columns * rows }, (_, index) => index);
    }

    function animateTile(tile: HTMLElement, animationDuration: number) {
        tile.classList.add(ANIMATION_CLASS);
        setTimeout(() => {
            tile.classList.remove(ANIMATION_CLASS);
        }, animationDuration);
    }

    function animateTiles() {
        if (!animating) return;
        const randomIndex: number = ~~(Math.random() * tiles.length);
        const tile: HTMLElement | null = document.getElementById(`tile-${randomIndex}`);
        if (tile) animateTile(tile, 4_000);
        setTimeout(animateTiles, 800);
    }

    function getTileIndexUnderMouse(event: MouseEvent): number {
        const mouseX: number = event.clientX;
        const mouseY: number = event.clientY;
        const column: number = Math.round(mouseX / TILE_SIZE - TILE_GAP / 2);
        const row: number = Math.round(mouseY / TILE_SIZE - TILE_GAP / 2);
        return row * columns + column;
    }

    function animateTileMouseMove(event: MouseEvent) {
        const tileIndex: number = getTileIndexUnderMouse(event);
        const tile = document.getElementById(`tile-${tileIndex}`);
        if (tile) animateTile(tile, 400);
    }

    function animateTileWave(event: MouseEvent) {
        if (!animating) return;
        const doneIndexes: number[] = [getTileIndexUnderMouse(event)];

        const animateNextTiles = (tileIndexes: number[], iteration: number) => {
            if (iteration > MAX_WAVE_ITERATIONS) return;
            const nextIndexes: number[] = [];

            tileIndexes.forEach((tileIndex) => {
                const tile: HTMLElement | null = document.getElementById(`tile-${tileIndex}`);
                if (tile) animateTile(tile, 800);

                const adjacentIndices = [
                    tileIndex - columns, // top
                    tileIndex + columns, // bottom
                    tileIndex - 1, // left
                    tileIndex + 1 // right
                ];

                adjacentIndices.forEach((adjIndex) => {
                    if (
                        adjIndex >= 0 &&
                        adjIndex < tiles.length &&
                        !doneIndexes.includes(adjIndex)
                    ) {
                        doneIndexes.push(adjIndex);
                        nextIndexes.push(adjIndex);
                    }
                });
            });
            setTimeout(() => animateNextTiles(nextIndexes, ++iteration), 200);
        };
        animateNextTiles(doneIndexes, 0);
    }

    onMount(() => {
        window.addEventListener("resize", resizeGrid);
        document.body.addEventListener("click", animateTileWave);
        document.body.addEventListener("mousemove", animateTileMouseMove);
        animateTiles();
        resizeGrid();
        return () => {
            animating = false;
            window.removeEventListener("resize", resizeGrid);
            document.body.removeEventListener("click", animateTileWave);
            document.body.removeEventListener("mousemove", animateTileMouseMove);
        };
    });
</script>

<div
    id="grid"
    style="
    --tile-size: {TILE_SIZE}px; 
    --tile-gap: {TILE_GAP}px; 
    --columns: {columns}; 
    --rows: {rows};
    "
>
    {#each tiles as _, index}
        <div class="tile" id="tile-{index}" />
    {/each}
</div>

<style>
    #grid {
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: repeat(var(--columns), 1fr);
        grid-template-rows: repeat(var(--rows), 1fr);
        gap: var(--tile-gap);
        z-index: -1;
    }

    .tile {
        width: var(--tile-size) px;
        height: var(--tile-size) px;
        background-color: var(--pattern);
        border: none;
        border-radius: 2px;
        opacity: 0.025;
        transition: opacity 0.5s ease-in-out;
    }
</style>
