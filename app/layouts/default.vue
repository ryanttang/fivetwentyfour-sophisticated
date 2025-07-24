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
        <div class="footer-section">
          <div class="footer-logo">
            <span class="logo-text">Sophisticated</span>
            <div class="logo-accent"></div>
          </div>
          <p class="footer-description">
            Crafting digital experiences that blend innovation with timeless design. 
            We transform ideas into extraordinary digital realities.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Twitter" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="#" aria-label="Dribbble" class="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.27 8.64-4.46 12.81-8.03 17.72"/>
                <path d="M20.84 14.25c-3.27-8.64-4.46-12.81-8.03-17.72"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Services</h3>
          <ul class="footer-links">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">3D & WebGL</a></li>
            <li><a href="#">Brand Strategy</a></li>
            <li><a href="#">Consulting</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Company</h3>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Process</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Contact</h3>
          <div class="contact-info">
            <p>1234 Template St, City</p>
            <p>info@sophisticated.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2024 Sophisticated Studio. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
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
  position: relative;
  z-index: 99;
  font-size: 0.95rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(178, 199, 255, 0.2);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 3rem 2rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.footer-section h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, #b2c7ff, #e0e7ff);
  border-radius: 1px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
}

.footer-logo .logo-text {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 2rem;
  background: linear-gradient(135deg, #fff 0%, #b2c7ff 50%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-logo .logo-accent {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  border-radius: 50%;
  animation: logoPulse 3s ease-in-out infinite;
}

.footer-description {
  color: #b2c7ff;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #b2c7ff;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.8rem;
  border-radius: 50%;
  background: rgba(178, 199, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(178, 199, 255, 0.2);
}

.social-link:hover {
  color: #e0e7ff;
  background: rgba(178, 199, 255, 0.2);
  transform: translateY(-2px);
  border-color: rgba(178, 199, 255, 0.4);
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #b2c7ff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #e0e7ff;
  transform: translateX(4px);
}

.contact-info p {
  color: #b2c7ff;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.footer-bottom {
  border-top: 1px solid rgba(178, 199, 255, 0.2);
  padding: 2rem 3rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.footer-bottom-content p {
  color: #b2c7ff;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  gap: 2rem;
}

.footer-bottom-links a {
  color: #b2c7ff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-bottom-links a:hover {
  color: #e0e7ff;
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
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.5rem 2rem 1.5rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
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
    padding: 0;
  }
  
  .footer-content {
    padding: 2rem 1rem 1.5rem 1rem;
  }
  
  .footer-bottom {
    padding: 1.5rem 1rem;
  }
}

main {
  padding-top: 80px;
  min-height: 100vh;
  background: #fafbfc;
}
</style>
