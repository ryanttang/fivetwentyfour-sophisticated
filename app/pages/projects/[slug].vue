<template>
  <div v-if="project">
    <!-- Case Study Hero: Large Visual or WebGL -->
    <CaseStudyHero :project="project" />

    <!-- Alternating 3D/Text Sections -->
    <section v-for="(section, idx) in project.sections || []" :key="idx" :class="['case-section', { 'reverse': idx % 2 === 1 }]">
      <div class="case-visual">
        <!-- WebGLScroller or image/video placeholder -->
        <WebGLScroller v-if="section.webgl" :config="section.webgl" />
        <img v-else :src="section.image" alt="Project visual" />
      </div>
      <div class="case-text">
        <h2>{{ section.title }}</h2>
        <p>{{ section.text }}</p>
      </div>
    </section>
  </div>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import CaseStudyHero from '@/components/CaseStudyHero.vue'
import WebGLScroller from '@/components/WebGLScroller.vue'
import projects from '@/data/projects'
const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)
</script>

<style scoped>
.case-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 4rem 0;
}
.case-section.reverse {
  flex-direction: row-reverse;
}
.case-visual {
  flex: 1 1 50%;
  min-width: 300px;
}
.case-visual img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}
.case-text {
  flex: 1 1 50%;
  min-width: 250px;
}
@media (max-width: 900px) {
  .case-section, .case-section.reverse {
    flex-direction: column !important;
    gap: 1.5rem;
  }
}
</style> 