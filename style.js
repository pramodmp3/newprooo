document.addEventListener("DOMContentLoaded", () => {
  // --- Hero Section Animation Handler (Placeholder for advanced features) ---
  const animatedBg = document.querySelector(".animated-bg");
  if (animatedBg) {
    // You can add more complex JS-based particle or ripple effects here later.
    // For now, the core animation is handled purely by the efficient CSS keyframes.
    console.log("STACKLY Home Page loaded. CSS animations are running.");
  }

  // --- Client Scroller Pause on Hover ---
  const scroller = document.querySelector(".logo-scroller");
  const logoTrack = document.querySelector(".logo-track");

  if (scroller && logoTrack) {
    // The pause/play logic is primarily handled by the CSS :hover state on .logo-track,
    // but adding event listeners here allows for complex control (e.g., stopping scroll
    // when the user is simply hovering over the wider scroller area).
    scroller.addEventListener("mouseenter", () => {
      logoTrack.style.animationPlayState = "paused";
      console.log("Logo scroller paused.");
    });

    scroller.addEventListener("mouseleave", () => {
      logoTrack.style.animationPlayState = "running";
      console.log("Logo scroller resumed.");
    });
  }
});
