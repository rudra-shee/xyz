document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector('.flower').style.opacity = "1";
    }, 5000);
});
document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.createElement("div");
    rainContainer.classList.add("rain-container");
    document.body.appendChild(rainContainer); // Adds the rain container to the body

    // Function to create raindrops
    function createRaindrops() {
        const numDrops = 20; // Adjust number for performance

        for (let i = 0; i < numDrops; i++) {
            let raindrop = document.createElement("div");
            raindrop.classList.add("raindrop");

            // Randomize position and fall speed
            raindrop.style.left = ${Math.random() * 100}vw;
            raindrop.style.animationDuration = ${Math.random() * 1.5 + 0.5}s;
            raindrop.style.animationDelay = ${Math.random() * 2}s;

            rainContainer.appendChild(raindrop);

            // Remove raindrop after animation
            setTimeout(() => {
                if (raindrop.parentElement) {
                    raindrop.remove();
                }
            }, parseFloat(raindrop.style.animationDuration) * 1000 + 500);
        }
    }

    // Generate raindrops continuously
    setInterval(createRaindrops, 1000);
});