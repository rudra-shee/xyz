document.addEventListener("DOMContentLoaded", function () {
    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        // Set random position and animation properties
        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s to 5s fall time
        flower.style.animationDelay = Math.random() * 5 + "s"; // Delay between drops

        document.body.appendChild(flower);

        // Remove flower after it falls
        setTimeout(() => {
            flower.remove();
        }, 5000); // Matches max fall duration
    }

    // Create flowers continuously
    setInterval(createFlower, 500);
});