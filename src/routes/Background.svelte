<div id="svg-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
        <path class="dashed-curve" d="M-10 200 C200 0, 600 500, 810 100" />
    </svg>
</div>

<style>
    #svg-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none; /* Allow clicks to pass through the SVG */
        overflow: hidden; /* Hide any overflow from the SVG */
    }

    .dashed-curve {
        fill: none;
        stroke: var(--text-color);
        stroke-width: 2;
        opacity: 0.2;
        stroke-dasharray: 16, 16;
        animation: dash 1s infinite linear;
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 0;
        }
        100% {
            stroke-dashoffset: -32; /* Adjust the offset value based on the curve length */
        }
    }
</style>
