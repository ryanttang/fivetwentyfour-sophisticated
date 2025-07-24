<template>
  <div>
    <h1>All Projects</h1>
<<<<<<< HEAD
    <!-- Tag Filter (to be implemented as a component) -->
=======
    <!-- Tag Filter -->
>>>>>>> a2f9504000a8f87f357a0ea97e4ba9b5e74426fc
    <div class="tag-filter">
      <button v-for="tag in tags" :key="tag" :class="{ active: tag === selectedTag }" @click="selectedTag = tag">
        {{ tag }}
      </button>
    </div>
    <!-- Project Grid -->
    <ProjectGrid :projects="filteredProjects" />
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
import ProjectGrid from '@/components/ProjectGrid.vue'
import { ref, computed } from 'vue'
import allProjects from '@/data/projects'
=======
import ProjectGrid from '../../../../app/components/ProjectGrid.vue'
import { ref, computed } from 'vue'
import allProjects from '../../../../app/data/projects'
>>>>>>> a2f9504000a8f87f357a0ea97e4ba9b5e74426fc
const tags = ['All', ...Array.from(new Set(allProjects.flatMap(p => p.tags || [])))]
const selectedTag = ref('All')
const filteredProjects = computed(() => {
  if (selectedTag.value === 'All') return allProjects
  return allProjects.filter(p => (p.tags || []).includes(selectedTag.value))
})
</script>

<style scoped>
h1 {
  margin-top: 2rem;
  font-size: 2.2rem;
  font-weight: 700;
}
.tag-filter {
  margin: 2rem 0 2.5rem 0;
  display: flex;
  gap: 1rem;
}
.tag-filter button {
  background: #f0f0f0;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.tag-filter button.active,
.tag-filter button:hover {
  background: #0070f3;
  color: #fff;
}
<<<<<<< HEAD
</style> 
=======
</style>
>>>>>>> a2f9504000a8f87f357a0ea97e4ba9b5e74426fc
