<template>
  <div class="project-grid">
    <div v-for="project in projects" :key="project.id" class="project-card">
      <NuxtLink :to="`/projects/${project.slug}`">
        <div class="project-thumb">
          <img :src="project.thumbnail" :alt="project.title" />
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../data/projects';

defineProps<{ projects: Project[] }>()
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}
.project-card {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
}
.project-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.10);
  transform: translateY(-4px) scale(1.02);
}
.project-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #eaeaea;
}
.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(.4,2,.6,1);
}
.project-card:hover .project-thumb img {
  transform: scale(1.07) rotate(-1deg);
}
.project-info {
  padding: 1.2rem 1rem 1rem 1rem;
}
.project-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.project-tag {
  background: #f0f0f0;
  color: #0070f3;
  border-radius: 1rem;
  padding: 0.2rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
}
</style> 