<template>
  <section class="case-hero">
    <div class="case-hero-bg">
      <!-- Replace with <video> or WebGL for immersive background -->
      <img :src="project.heroImage" :alt="project.title" />
    </div>
    <div class="case-hero-content">
      <h1>{{ project.title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  project: { type: Object, required: true }
})
</script>

<style scoped>
.case-hero {
  position: relative;
  width: 100vw;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  background: #111;
}
.case-hero-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1;
  overflow: hidden;
}
.case-hero-bg img, .case-hero-bg video {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.7);
}
.case-hero-content {
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 3rem 2rem;
}
.case-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
}
@media (max-width: 700px) {
  .case-hero-content h1 { font-size: 1.5rem; }
  .case-hero { min-height: 40vh; }
}
</style> 