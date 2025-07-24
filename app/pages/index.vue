<template>
  <div>
    <HeroSection backgroundVideo="https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl" />
    <!-- Tag Filter (neumorphic style) -->
    <div class="tag-filter-neu">
      <button v-for="tag in tags" :key="tag" :class="{ active: tag === selectedTag }" @click="selectedTag = tag">
        {{ tag }}
      </button>
    </div>
    <!-- Project Grid (neumorphic container) -->
    <div class="project-grid-neu">
      <ProjectGrid :projects="filteredProjects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import ProjectGrid from '../components/ProjectGrid.vue'
import { ref, computed } from 'vue'
import allProjects from '../data/projects'
import type { Project } from '../data/projects'

const tags: string[] = ['All', ...Array.from(new Set((allProjects.flatMap((p: Project) => p.tags || []) as string[])))]
const selectedTag = ref<string>('All')
const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') return allProjects
  return allProjects.filter((p: Project) => (p.tags || []).includes(selectedTag.value))
})
</script>

<style scoped>
.tag-filter-neu {
  margin: 2rem 0 2.5rem 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.tag-filter-neu button {
  background: #f7f8fa;
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  color: #2a3a5a;
  box-shadow:
    4px 4px 12px #e3e6ee,
    -4px -4px 12px #ffffff;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  font-weight: 500;
  cursor: pointer;
}
.tag-filter-neu button.active,
.tag-filter-neu button:hover {
  background: linear-gradient(90deg, #e0e7ff 0%, #b2c7ff 100%);
  color: #1a2a4a;
  box-shadow:
    2px 2px 8px #e3e6ee,
    -2px -2px 8px #ffffff;
}
.project-grid-neu {
  background: #f7f8fa;
  border-radius: 2.2rem;
  box-shadow:
    8px 8px 24px #e3e6ee,
    -8px -8px 24px #ffffff;
  padding: 2.5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
}
</style>