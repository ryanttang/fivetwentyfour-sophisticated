<template>
  <div>
    <header :class="{ 'scrolled': isScrolled }">
      <div class="nav-glow"></div>
      <nav class="main-nav">
        <div class="logo">
          <span class="logo-text">Sophisticated</span>
          <div class="logo-accent"></div>
        </div>
        <ul class="nav-links">
          <li>
            <NuxtLink to="/" class="nav-link">
              <span class="link-text">Home</span>
              <div class="link-underline"></div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="nav-link">
              <span class="link-text">Projects</span>
              <div class="link-underline"></div>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="nav-link">
              <span class="link-text">Contact</span>
              <div class="link-underline"></div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <div class="footer-content">
        <span>1234 Template St, City</span>
        <span>info@email.com</span>
        <span class="social-icons">
          <!-- Replace with your icons/links -->
          <a href="#" aria-label="Twitter">T</a>
          <a href="#" aria-label="LinkedIn">L</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Import Google Fonts for consistency */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(32px) saturate(1.6);
  -webkit-backdrop-filter: blur(32px) saturate(1.6);
  border-bottom: 2px solid rgba(178, 199, 255, 0.25);
  box-shadow:
    0 8px 64px 0 rgba(178, 199, 255, 0.15),
    0 4px 32px 0 rgba(255, 255, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.23, 1.01, 0.32, 1);
  z-index: 100;
  overflow: hidden;
}

header::before {
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

header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    0 12px 48px rgba(178, 199, 255, 0.2),
    0 6px 24px rgba(255, 255, 255, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid rgba(178, 199, 255, 0.35);
}

/* Nav Glow Effect */
.nav-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #b2c7ff, #e0e7ff, #b2c7ff);
  z-index: -1;
  opacity: 0.2;
  animation: navGlowPulse 6s ease-in-out infinite;
}

@keyframes navGlowPulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 3rem 1.3rem 3rem;
  position: relative;
  z-index: 2;
}

/* Enhanced Logo */
.logo {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 2.2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 50%, #1a1a2e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 32px rgba(178, 199, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  letter-spacing: -0.02em;
}

.logo:hover .logo-text {
  background: linear-gradient(135deg, #2a3a5a 0%, #4b6fff 50%, #2a3a5a 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.05);
}

.logo-accent {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  border-radius: 50%;
  animation: logoPulse 3s ease-in-out infinite;
}

@keyframes logoPulse {
  0%, 100% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

/* Enhanced Navigation Links */
.nav-links {
  display: flex;
  gap: 3rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: #2a3a5a;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: 0.01em;
  padding: 0.8rem 1.2rem;
  border-radius: 1.5rem;
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(178, 199, 255, 0.1), rgba(224, 231, 255, 0.1));
  border-radius: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover::before,
.nav-link.router-link-active::before {
  opacity: 1;
}

.link-text {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.nav-link:hover .link-text,
.nav-link.router-link-active .link-text {
  background: linear-gradient(135deg, #1a1a2e 0%, #4b6fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(-1px);
}

.link-underline {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #b2c7ff, #e0e7ff);
  border-radius: 1px;
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
}

.nav-link:hover .link-underline,
.nav-link.router-link-active .link-underline {
  width: 80%;
}

/* Enhanced Footer */
.site-footer {
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 100%);
  color: #fff;
  padding: 1.5rem 2.5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  font-size: 0.95rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(178, 199, 255, 0.2);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-family: 'Inter', sans-serif;
}

.social-icons a {
  color: #b2c7ff;
  margin-left: 1.5rem;
  font-size: 1.3rem;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(178, 199, 255, 0.1);
}

.social-icons a:hover {
  color: #e0e7ff;
  background: rgba(178, 199, 255, 0.2);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1.5rem;
  }
  
  .logo-text {
    font-size: 1.8rem;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }
  
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
}

@media (max-width: 480px) {
  .main-nav {
    padding: 0.8rem 1rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
  
  .site-footer {
    padding: 1rem 1.5rem;
  }
}

main {
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: 100vh;
  background: #fafbfc;
}
</style>
