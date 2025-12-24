document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    console.log("Antwerp Split-Screen initialized.");

    // --- Hero Layout Logic ---
    // Inject map into hero
    const mapContainer = document.getElementById('hero-map-container');
    if (mapContainer && window.mapSVG) {
        mapContainer.innerHTML = window.mapSVG;
    }

    // Hero Start Button
    document.getElementById('start-btn').addEventListener('click', () => {
        gsap.to(window, { duration: 1.5, scrollTo: "#stop-1", ease: "power3.inOut" });
    });

    // --- Split Screen Background Logic ---
    // Architecture: 
    // Left sections have class 'narrative-block' and data attribute 'data-bg' corresponding to ID of right image.
    // We trigger when the block enters the center of the viewport.

    const blocks = document.querySelectorAll('.narrative-block');
    const bgLayers = document.querySelectorAll('.bg-layer');

    blocks.forEach((block, index) => {
        const bgId = block.getAttribute('data-bg');
        const targetBg = document.getElementById(bgId);

        ScrollTrigger.create({
            trigger: block,
            start: "top center",
            end: "bottom center",
            onEnter: () => fadeIn(targetBg),
            onEnterBack: () => fadeIn(targetBg),
            // onLeave: () => fadeOut(targetBg), // Optional, but usually we just want to switch to the next one
            // onLeaveBack: ...
        });
    });

    function fadeIn(element) {
        if (!element) return;

        // Fade out all others
        bgLayers.forEach(bg => {
            if (bg !== element) {
                gsap.to(bg, { opacity: 0, duration: 1, ease: "power2.inOut" });
            }
        });

        // Fade in target
        gsap.to(element, { opacity: 1, duration: 1, ease: "power2.inOut" });
    }

    // --- Optional: Parallax for the Serge Images in Left Column ---
    const sergeImages = document.querySelectorAll('.narrative-block img');
    sergeImages.forEach(img => {
        gsap.fromTo(img,
            { y: 50, opacity: 0.8 },
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                }
            }
        );
    });

});
