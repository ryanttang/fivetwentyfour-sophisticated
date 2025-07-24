<template>
  <section class="hero-section">
    <div class="hero-bg">
      <!-- Replace with <video> or WebGL for immersive background -->
      <img src="/assets/images/hero-bg.jpg" alt="Hero background" />
    </div>
    <div class="hero-content">
      <h1 class="hero-title">Bold Tagline Goes Here</h1>
      <p class="hero-subtitle">A subtle, compelling call-to-action for your audience.</p>
      <button class="hero-cta">Get Started</button>
    </div>
    <!-- Placeholder for scroll-triggered animation -->
    <div class="scroll-anim-placeholder">[Scroll Animation Here]</div>
  </section>
</template>

<script setup lang="ts">
// Add GSAP/Three.js animation logic here later
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100vw;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #111;
}
.hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1;
  overflow: hidden;
}
.hero-bg img, .hero-bg video {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.7);
}
.hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}
.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
}
.hero-subtitle {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
.hero-cta {
  background: #0070f3;
  color: #fff;
  border: none;
  padding: 1rem 2.2rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.hero-cta:hover {
  background: #005bb5;
}
.scroll-anim-placeholder {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  opacity: 0.7;
  font-size: 1.1rem;
  z-index: 3;
}
@media (max-width: 700px) {
  .hero-title { font-size: 2rem; }
  .hero-section { min-height: 60vh; }
}
</style> 