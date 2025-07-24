<template>
  <div>
<<<<<<< HEAD
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
=======
    <HeroSection backgroundVideo="https://www.youtube.com/watch?v=7s4-DVIs6Pk&ab_channel=JUtah" />
    
    <!-- About/Expertise Section -->
    <section class="expertise-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Our Expertise</h2>
          <p class="section-subtitle">Crafting digital experiences that blend innovation with timeless design</p>
        </div>
        <div class="expertise-grid">
          <div class="expertise-card" v-for="expertise in expertiseItems" :key="expertise.id">
            <div class="expertise-icon">
              <component :is="expertise.icon" />
            </div>
            <h3>{{ expertise.title }}</h3>
            <p>{{ expertise.description }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- Featured Work Section -->
    <section class="featured-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Featured Work</h2>
          <p class="section-subtitle">Our most impactful projects that showcase our creative vision</p>
        </div>
        <div class="featured-grid">
          <div class="featured-card" v-for="project in featuredProjects" :key="project.id">
            <div class="featured-image">
              <img :src="project.thumbnail" :alt="project.title" />
              <div class="featured-overlay">
                <NuxtLink :to="`/projects/${project.slug}`" class="featured-link">
                  <span>View Project</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
            <div class="featured-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <div class="featured-tags">
                <span v-for="tag in project.tags" :key="tag" class="featured-tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">What Our Clients Say</h2>
          <p class="section-subtitle">Trusted by innovative companies worldwide</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial-content">
              <p>"{{ testimonial.quote }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <img :src="testimonial.avatar" :alt="testimonial.name" />
              </div>
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <span>{{ testimonial.position }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="contact-cta-section">
      <div class="section-container">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something extraordinary together. Get in touch to discuss your vision.</p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="cta-primary">Start a Project</NuxtLink>
            <button class="cta-secondary">View Portfolio</button>
          </div>
        </div>
      </div>
>>>>>>> a2f9504000a8f87f357a0ea97e4ba9b5e74426fc
    </section>
  </div>
</template>

<script setup lang="ts">
<<<<<<< HEAD
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
=======
import HeroSection from '../components/HeroSection.vue'
import { ref } from 'vue'

// Expertise data
const expertiseItems = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies and best practices.',
    icon: 'CodeIcon'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Intuitive interfaces that delight users and drive engagement through thoughtful design.',
    icon: 'DesignIcon'
  },
  {
    id: 3,
    title: '3D & WebGL',
    description: 'Immersive 3D experiences that bring your brand to life in the digital space.',
    icon: 'Icon3D'
  },
  {
    id: 4,
    title: 'Brand Strategy',
    description: 'Comprehensive branding solutions that establish your unique market position.',
    icon: 'BrandIcon'
  },
  {
    id: 5,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: 'MobileIcon'
  },
  {
    id: 6,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that drive growth and increase brand visibility.',
    icon: 'MarketingIcon'
  }
]

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with advanced features and seamless user experience.',
    thumbnail: '/images/work1.avif',
    slug: 'ecommerce-platform',
    tags: ['e-commerce', 'webgl']
  },
  {
    id: 2,
    title: 'Portfolio Showcase',
    description: 'An interactive portfolio that showcases creative work with stunning visual effects.',
    thumbnail: '/images/work2.avif',
    slug: 'portfolio-showcase',
    tags: ['portfolio', '3d']
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'A sophisticated corporate website with advanced animations and user interactions.',
    thumbnail: '/images/work3.avif',
    slug: 'corporate-website',
    tags: ['corporate', 'webgl']
  }
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    quote: 'Sophisticated Studio transformed our vision into a stunning digital reality. Their attention to detail and innovative approach exceeded our expectations.',
    name: 'Sarah Johnson',
    position: 'CEO, TechCorp',
    avatar: '/images/work1.avif'
  },
  {
    id: 2,
    quote: 'The team at Sophisticated Studio delivered an exceptional project that perfectly captures our brand essence. Highly recommended!',
    name: 'Michael Chen',
    position: 'Creative Director, DesignLab',
    avatar: '/images/work2.avif'
  },
  {
    id: 3,
    quote: 'Working with Sophisticated Studio was a game-changer for our business. Their expertise in 3D and WebGL brought our ideas to life.',
    name: 'Emma Rodriguez',
    position: 'Marketing Manager, InnovateCo',
    avatar: '/images/work3.avif'
  }
]

// Icon components (simplified for demo)
const CodeIcon = { template: '<div class="icon-code">💻</div>' }
const DesignIcon = { template: '<div class="icon-design">🎨</div>' }
const Icon3D = { template: '<div class="icon-3d">🎮</div>' }
const BrandIcon = { template: '<div class="icon-brand">🏢</div>' }
const MobileIcon = { template: '<div class="icon-mobile">📱</div>' }
const MarketingIcon = { template: '<div class="icon-marketing">📈</div>' }
</script>

<style scoped>


/* Section Styles */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 50%, #1a1a2e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  color: #5a6a85;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Expertise Section */
.expertise-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f6f7fb 0%, #e9ecf3 100%);
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.expertise-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow:
    0 8px 32px rgba(178, 199, 255, 0.15),
    0 4px 16px rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  border: 2px solid rgba(178, 199, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.expertise-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(178, 199, 255, 0.25),
    0 8px 24px rgba(255, 255, 255, 0.4);
  border-color: rgba(178, 199, 255, 0.3);
}

.expertise-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem auto;
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 8px 24px rgba(178, 199, 255, 0.3);
}

.expertise-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 1rem;
}

.expertise-card p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #5a6a85;
  line-height: 1.6;
}

/* Featured Section */
.featured-section {
  padding: 6rem 0;
  background: #fff;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
}

.featured-card {
  background: #fff;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
}

.featured-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.12),
    0 8px 24px rgba(0, 0, 0, 0.08);
}

.featured-image {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.23, 1.01, 0.32, 1);
}

.featured-card:hover .featured-image img {
  transform: scale(1.1);
}

.featured-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 26, 46, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-card:hover .featured-overlay {
  opacity: 1;
}

.featured-link {
  color: #fff;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: 2px solid #fff;
  border-radius: 2rem;
  transition: all 0.3s ease;
}

.featured-link:hover {
  background: #fff;
  color: #1a1a2e;
}

.featured-content {
  padding: 2rem;
}

.featured-content h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.8rem;
}

.featured-content p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #5a6a85;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.featured-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.featured-tag {
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  color: #1a1a2e;
  border-radius: 1rem;
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Testimonials Section */
.testimonials-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 100%);
  color: #fff;
}

.testimonials-section .section-title {
  background: linear-gradient(135deg, #fff 0%, #b2c7ff 50%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.testimonials-section .section-subtitle {
  color: #b2c7ff;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 2px solid rgba(178, 199, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
}

.testimonial-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(178, 199, 255, 0.4);
}

.testimonial-content {
  margin-bottom: 2rem;
}

.testimonial-content p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
  color: #e0e7ff;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(178, 199, 255, 0.3);
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.2rem;
}

.author-info span {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #b2c7ff;
}

/* Contact CTA Section */
.contact-cta-section {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f6f7fb 0%, #e9ecf3 100%);
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 50%, #1a1a2e 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-content p {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  color: #5a6a85;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  background: linear-gradient(135deg, #b2c7ff 0%, #e0e7ff 100%);
  color: #1a1a2e;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem;
  border-radius: 2rem;
  box-shadow:
    0 8px 32px rgba(178, 199, 255, 0.4),
    0 4px 16px rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  display: inline-block;
}

.cta-primary:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 48px rgba(178, 199, 255, 0.6),
    0 6px 24px rgba(255, 255, 255, 0.4);
}

.cta-secondary {
  background: transparent;
  color: #2a3a5a;
  border: 2px solid #b2c7ff;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem;
  border-radius: 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
}

.cta-secondary:hover {
  background: rgba(178, 199, 255, 0.1);
  transform: translateY(-4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 1.1rem;
  }
  
  .expertise-grid,
  .featured-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .cta-content h2 {
    font-size: 2.5rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .expertise-card,
  .featured-card,
  .testimonial-card {
    padding: 2rem 1.5rem;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
>>>>>>> a2f9504000a8f87f357a0ea97e4ba9b5e74426fc
