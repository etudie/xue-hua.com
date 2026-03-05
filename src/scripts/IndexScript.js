const video = document.getElementById("hero-video");

if (video instanceof HTMLVideoElement) {
  video.muted = true;
  video.playsInline = true;
  video.playbackRate = 0.6; // slower than normal

  const tryPlay = async () => {
    try {
      await video.play();
    } catch {
      // catch this
    }
  };

  // Try immediately
  tryPlay();

  // Retry once on first user interaction (common iOS behavior)
  const once = () => {
    tryPlay();
    window.removeEventListener("touchstart", once);
    window.removeEventListener("click", once);
  };
  window.addEventListener("touchstart", once, { passive: true });
  window.addEventListener("click", once, { passive: true });
}
