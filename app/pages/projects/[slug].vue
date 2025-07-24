<template>
  <div v-if="project">
    <!-- Case Study Hero: Large Visual or WebGL -->
    <CaseStudyHero :project="project" />

    <!-- Alternating 3D/Text Sections -->
    <section v-for="(section, idx) in project.sections || []" :key="idx" :class="['case-section', { 'reverse': idx % 2 === 1 }]">
      <div class="case-visual">
        <!-- WebGLScroller or image placeholder -->
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
    <h1>Project Not Found</h1>
    <p>The project you are looking for does not exist.</p>
  </div>
</template>

<script setup lang="ts">
// Importing from main app/components directory
import CaseStudyHero from '../../../../app/components/CaseStudyHero.vue'
import WebGLScroller from '../../../../app/components/WebGLScroller.vue'
import { useRoute } from 'vue-router'
import allProjects from '../../../../app/data/projects'
const route = useRoute()
const project = allProjects.find(p => p.slug === route.params.slug)
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
