<section>
    <div id="background-image">
        <img src="./error.png" alt="error illustration" />
    </div>
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
</style>
