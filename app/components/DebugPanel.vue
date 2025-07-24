<template>
  <div v-if="visible" class="debug-panel">
    <button class="debug-close" @click="visible = false">×</button>
    <h3>Debug Panel</h3>
    <div><b>Route:</b> {{ route.fullPath }}</div>
    <div><b>Params:</b> {{ route.params }}</div>
    <div><b>Query:</b> {{ route.query }}</div>
    <div><b>Env:</b> {{ env }}</div>
  </div>
  <button v-else class="debug-toggle" @click="visible = true">🐞 Debug</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const visible = ref(false)
const route = useRoute()
const env = process.env.NODE_ENV
</script>

<style scoped>
.debug-panel {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #222;
  color: #fff;
  padding: 1.2rem 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  z-index: 9999;
  min-width: 260px;
}
.debug-close {
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.3rem;
  cursor: pointer;
}
.debug-toggle {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
}
</style> 