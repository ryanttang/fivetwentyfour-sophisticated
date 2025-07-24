// @ts-ignore
import { defineNuxtPlugin } from 'nuxt/app'
// @ts-ignore
import * as THREE from 'three'

export default defineNuxtPlugin((nuxtApp) => {
  // Make Three.js available globally
  nuxtApp.provide('three', THREE)
}) 