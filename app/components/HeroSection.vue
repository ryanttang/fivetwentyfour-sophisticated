<template>
  <section class="hero-section">
    <!-- Enhanced Background with Spotlight -->
    <div v-if="backgroundVideo" class="hero-bg-video-wrapper">
      <template v-if="isYouTubeLink">
        <iframe
          class="hero-bg-video hero-bg-iframe"
          :src="youtubeEmbedUrl"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </template>
      <template v-else>
        <video class="hero-bg-video" :src="backgroundVideo" autoplay loop muted playsinline></video>
      </template>
      <div class="hero-bg-overlay animated-gradient"></div>
    </div>
    
    <!-- Spotlight Effect -->
    <div class="spotlight"></div>
    
    <!-- Enhanced Hero Card with Custom Shape -->
    <div class="hero-card">
      <div class="card-glow"></div>
      <div class="card-content">
        <h1 class="hero-title" aria-label="Welcome to Sophisticated Studio">
          <span class="title-line">Welcome to</span>
          <span class="title-main">Sophisticated Studio</span>
        </h1>
        
        <!-- Animated Accent Line -->
        <div class="accent-line">
          <div class="accent-glow"></div>
        </div>
        
        <p class="hero-subtitle">Showcasing innovative digital projects with a touch of elegance and depth.</p>
        
        <!-- Enhanced Interactive Button -->
        <button class="hero-cta" aria-label="View Projects">
          <span class="btn-text">View Projects</span>
          <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <div class="btn-ripple"></div>
        </button>
      </div>
    </div>
    
    <!-- Enhanced Scroll Indicator -->
    <div class="scroll-indicator" aria-hidden="true">
      <div class="scroll-dot"></div>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <polyline points="8,12 16,20 24,12" fill="none" stroke="#b2c7ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
const props = defineProps<{ backgroundVideo?: string }>()
const backgroundVideo = props.backgroundVideo

const isYouTubeLink = computed(() => {
  return backgroundVideo && backgroundVideo.includes('youtube.com/watch')
})

const youtubeEmbedUrl = computed(() => {
  if (!backgroundVideo) return ''
  // Extract the video ID from the YouTube URL
  const match = backgroundVideo.match(/[?&]v=([^&]+)/)
  const videoId = match ? match[1] : ''
  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}` : ''
})
</script>

<style scoped>
/* Import Google Fonts for unique pairing */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

.hero-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  background: linear-gradient(135deg, #f6f7fb 0%, #e9ecf3 100%);
  margin-bottom: 3.5rem;
  overflow: hidden;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* Enhanced Background Video */
.hero-bg-video-wrapper {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100%;
  z-index: 0;
}

.hero-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-width: 100vw;
  height: 100%;
  min-height: 100%;
  object-fit: cover;
  filter: brightness(0.6) saturate(1.2) contrast(1.1);
  z-index: 0;
}

.hero-bg-iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120vw;
  height: 67.5vw;
  min-width: 100%;
  min-height: 100%;
  transform: translate(-50%, -50%);
  border: none;
  z-index: 0;
  pointer-events: none;
}

/* Enhanced Overlay with Gradient */
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(30, 34, 45, 0.4) 0%,
    rgba(178, 199, 255, 0.1) 50%,
    rgba(224, 231, 255, 0.2) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.animated-gradient {
  animation: gradientMove 8s ease-in-out infinite alternate;
  background: linear-gradient(
    120deg,
    rgba(178, 199, 255, 0.3) 0%,
    rgba(224, 231, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 100%
  );
  mix-blend-mode: overlay;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* Spotlight Effect */
.spotlight {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(178, 199, 255, 0.15) 0%,
    rgba(178, 199, 255, 0.05) 30%,
    transparent 70%
  );
  z-index: 1;
  pointer-events: none;
  animation: spotlightMove 12s ease-in-out infinite;
}

@keyframes spotlightMove {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-10%, -5%) scale(1.1); }
}

/* Enhanced Hero Card with Custom Shape */
.hero-card {
  position: relative;
  z-index: 3;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 0 2.8rem 2.8rem 2.8rem;
  box-shadow:
    0 8px 64px 0 rgba(178, 199, 255, 0.25),
    0 4px 32px 0 rgba(255, 255, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  padding: 3.5rem 2.5rem 3rem 2.5rem;
  max-width: 580px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.23, 1.01, 0.32, 1);
  margin: 2.5rem auto;
  opacity: 0;
  transform: translateY(60px) scale(0.95) rotateX(5deg);
  animation: heroCardIn 1.2s cubic-bezier(0.23, 1.01, 0.32, 1) 0.3s forwards;
  backdrop-filter: blur(32px) saturate(1.6);
  -webkit-backdrop-filter: blur(32px) saturate(1.6);
  border: 2px solid rgba(178, 199, 255, 0.25);
  overflow: hidden;
}

.hero-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(178, 199, 255, 0.6) 50%,
    transparent 100%
  );
}

@keyframes heroCardIn {
  to {
    opacity: 1;
    transform: translateY(0) scale(1) rotateX(0deg);
  }
}

/* Card Glow Effect */
.card-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #b2c7ff, #e0e7ff, #b2c7ff);
  border-radius: 0 2.8rem 2.8rem 2.8rem;
  z-index: -1;
  opacity: 0.3;
  animation: glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.card-content {
  position: relative;
  z-index: 2;
}

/* Enhanced Typography with Font Pairing */
.hero-title {
  margin-bottom: 2rem;
  color: #1a1a2e;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #5a6a85;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
}

.title-main {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 50%, #1a1a2e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 32px rgba(178, 199, 255, 0.3);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.7s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animated Accent Line */
.accent-line {
  position: relative;
  width: 80px;
  height: 3px;
  margin: 1.5rem auto 2.5rem auto;
  background: linear-gradient(90deg, #b2c7ff, #e0e7ff, #b2c7ff);
  border-radius: 2px;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.9s forwards;
}

.accent-glow {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: accentShine 3s ease-in-out infinite;
}

@keyframes accentShine {
  0% { left: -100%; }
  50% { left: 100%; }
  100% { left: 100%; }
}

/* Enhanced Subtitle */
.hero-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: #5a6a85;
  margin-bottom: 3rem;
  line-height: 1.6;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.1s forwards;
}

/* Enhanced Interactive Button */
.hero-cta {
  position: relative;
  background: linear-gradient(135deg, #b2c7ff 0%, #e0e7ff 100%);
  color: #1a1a2e;
  border: none;
  border-radius: 2rem;
  padding: 1.3rem 3rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow:
    0 8px 32px rgba(178, 199, 255, 0.4),
    0 4px 16px rgba(255, 255, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  outline: none;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.3s forwards;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
}

.hero-cta:hover {
  background: linear-gradient(135deg, #e0e7ff 0%, #b2c7ff 100%);
  box-shadow:
    0 12px 48px rgba(178, 199, 255, 0.6),
    0 6px 24px rgba(255, 255, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transform: translateY(-4px) scale(1.05);
}

.hero-cta:active {
  transform: translateY(-2px) scale(1.02);
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-icon {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.hero-cta:hover .btn-icon {
  transform: translateX(4px);
}

.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.hero-cta:active .btn-ripple {
  width: 300px;
  height: 300px;
}

/* Enhanced Scroll Indicator */
.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  z-index: 4;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 1.5s forwards;
}

.scroll-dot {
  width: 8px;
  height: 8px;
  background: #b2c7ff;
  border-radius: 50%;
  margin: 0 auto 0.5rem auto;
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-card {
    padding: 2.5rem 1.5rem 2rem 1.5rem;
    border-radius: 0 2rem 2rem 2rem;
    max-width: 95vw;
    margin: 1.5rem auto;
  }
  
  .title-main {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }
  
  .hero-cta {
    font-size: 1.1rem;
    padding: 1.2rem 2.5rem;
  }
  
  .scroll-indicator {
    bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-card {
    padding: 2rem 1rem 1.5rem 1rem;
    border-radius: 0 1.5rem 1.5rem 1.5rem;
  }
  
  .title-main {
    font-size: 2.2rem;
  }
  
  .title-line {
    font-size: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-cta {
    font-size: 1rem;
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style> 