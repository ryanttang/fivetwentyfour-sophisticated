<template>
  <div class="expertise-card">
    <div class="expertise-number">{{ number < 10 ? '0' + number : number }}</div>
    <div class="expertise-content">
      <h3 class="expertise-title">{{ title }}</h3>
      <p class="expertise-desc">{{ description }}</p>
      <NuxtLink :to="link" class="expertise-link">Voir l’expertise →</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
})
</script>

<style scoped>
.expertise-card {
  background: #f7f8fa;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.expertise-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.10);
  transform: translateY(-4px) scale(1.02);
}
.expertise-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0070f3;
  min-width: 2.5rem;
}
.expertise-content {
  flex: 1;
}
.expertise-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.expertise-desc {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #444;
}
.expertise-link {
  color: #0070f3;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}
.expertise-link:hover {
  color: #005bb5;
  text-decoration: underline;
}
</style> 