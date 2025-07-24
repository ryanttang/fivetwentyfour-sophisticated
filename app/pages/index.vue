<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />

    <!-- Services / Expertise Grid -->
    <section class="expertise-section">
      <h2>Our Expertise</h2>
      <div class="expertise-grid">
        <ExpertiseCard v-for="(item, idx) in expertiseList" :key="item.id" :number="idx + 1" :title="item.title" :description="item.description" :link="item.link" />
      </div>
    </section>

    <!-- Project Showcase -->
    <section class="project-showcase">
      <h2>Project Showcase</h2>
      <ProjectGrid :projects="projectList" />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ExpertiseCard from '@/components/ExpertiseCard.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import expertiseList from '@/data/expertise'
import projectList from '@/data/projects'
</script>

<style scoped>
.expertise-section {
  padding: 4rem 0 2rem 0;
  background: #fff;
}
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
.project-showcase {
  padding: 4rem 0 2rem 0;
  background: #f5f6fa;
}
</style> 