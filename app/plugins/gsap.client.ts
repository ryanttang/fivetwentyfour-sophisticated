// @ts-ignore
import { defineNuxtPlugin } from 'nuxt/app'
// @ts-ignore
import gsap from 'gsap'

export default defineNuxtPlugin((nuxtApp) => {
  // Make GSAP available globally
  nuxtApp.provide('gsap', gsap)
}) 