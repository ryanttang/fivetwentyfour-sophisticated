<template>
  <div class="contact-page">
    <div class="contact-hero">
      <div class="hero-content">
        <h1 class="contact-title">Let's Create Something Amazing</h1>
        <p class="contact-subtitle">Ready to bring your vision to life? Get in touch and let's discuss your next project.</p>
      </div>
    </div>

    <div class="contact-container">
      <div class="contact-form-wrapper">
        <div class="form-progress">
          <div class="progress-step" :class="{ active: step >= 1, completed: step > 1 }">
            <div class="step-number">1</div>
            <span class="step-label">Inquiry Type</span>
          </div>
          <div class="progress-line" :class="{ active: step >= 2 }"></div>
          <div class="progress-step" :class="{ active: step >= 2, completed: step > 2 }">
            <div class="step-number">2</div>
            <span class="step-label">Details</span>
          </div>
          <div class="progress-line" :class="{ active: step >= 3 }"></div>
          <div class="progress-step" :class="{ active: step >= 3, completed: step > 3 }">
            <div class="step-number">3</div>
            <span class="step-label">Contact</span>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div v-if="step === 1" class="form-step" :class="{ 'step-active': step === 1 }">
            <h2>What brings you here today?</h2>
            <p class="step-description">Let us know how we can help you achieve your goals.</p>
            
            <div class="inquiry-options">
              <div 
                v-for="option in inquiryOptions" 
                :key="option.value"
                class="inquiry-option"
                :class="{ selected: form.type === option.value }"
                @click="form.type = option.value"
              >
                <div class="option-icon">{{ option.icon }}</div>
                <div class="option-content">
                  <h3>{{ option.title }}</h3>
                  <p>{{ option.description }}</p>
                </div>
                <div class="option-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <button type="button" @click="nextStep" class="form-button primary" :disabled="!form.type">
              Continue
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <div v-else-if="step === 2" class="form-step" :class="{ 'step-active': step === 2 }">
            <h2>{{ getStep2Title() }}</h2>
            <p class="step-description">{{ getStep2Description() }}</p>
            
            <div class="form-field">
              <label for="details">Tell us more</label>
              <textarea 
                id="details"
                v-model="form.details" 
                rows="6" 
                required
                placeholder="Share the details of your project, question, or opportunity..."
              ></textarea>
            </div>
            
            <div class="form-actions">
              <button type="button" @click="prevStep" class="form-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back
              </button>
              <button type="button" @click="nextStep" class="form-button primary" :disabled="!form.details.trim()">
                Continue
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div v-else-if="step === 3" class="form-step" :class="{ 'step-active': step === 3 }">
            <h2>How can we reach you?</h2>
            <p class="step-description">We'll get back to you within 24 hours.</p>
            
            <div class="form-field">
              <label for="name">Full Name</label>
              <input 
                id="name"
                type="text" 
                v-model="form.name" 
                required
                placeholder="Your full name"
              />
            </div>
            
            <div class="form-field">
              <label for="email">Email Address</label>
              <input 
                id="email"
                type="email" 
                v-model="form.email" 
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div class="form-field">
              <label for="phone">Phone Number (Optional)</label>
              <input 
                id="phone"
                type="tel" 
                v-model="form.phone"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div class="form-actions">
              <button type="button" @click="prevStep" class="form-button secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Back
              </button>
              <button type="submit" class="form-button primary" :disabled="!form.name.trim() || !form.email.trim()">
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div v-else-if="step === 4" class="form-step success-step" :class="{ 'step-active': step === 4 }">
            <div class="success-content">
              <div class="success-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h2>Message Sent Successfully!</h2>
              <p>Thank you for reaching out. We'll get back to you within 24 hours with a personalized response.</p>
              <div class="success-actions">
                <NuxtLink to="/" class="form-button primary">Back to Home</NuxtLink>
                <button @click="resetForm" class="form-button secondary">Send Another Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="contact-info">
        <div class="info-card">
          <h3>Get in Touch</h3>
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-content">
              <h4>Location</h4>
              <p>1234 Template St, City, State 12345</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📧</div>
            <div class="info-content">
              <h4>Email</h4>
              <p>info@sophisticated.com</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-content">
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const step = ref(1)
const form = ref({
  type: '',
  details: '',
  name: '',
  email: '',
  phone: ''
})

const inquiryOptions = [
  {
    value: 'project',
    title: 'New Project',
    description: 'I have a project I\'d like to discuss',
    icon: '🚀'
  },
  {
    value: 'consultation',
    title: 'Consultation',
    description: 'I need expert advice on my project',
    icon: '💡'
  },
  {
    value: 'partnership',
    title: 'Partnership',
    description: 'I\'m interested in working together',
    icon: '🤝'
  },
  {
    value: 'question',
    title: 'General Question',
    description: 'I have a question about your services',
    icon: '❓'
  }
]

function nextStep() {
  if (step.value < 4) step.value++
}

function prevStep() {
  if (step.value > 1) step.value--
}

function resetForm() {
  form.value = {
    type: '',
    details: '',
    name: '',
    email: '',
    phone: ''
  }
  step.value = 1
}

function handleSubmit() {
  // Placeholder for form submission logic
  console.log('Form submitted:', form.value)
  step.value = 4
}

function getStep2Title() {
  switch (form.value.type) {
    case 'project': return 'Tell us about your project'
    case 'consultation': return 'What do you need help with?'
    case 'partnership': return 'Let\'s discuss partnership opportunities'
    case 'question': return 'What\'s your question?'
    default: return 'Tell us more'
  }
}

function getStep2Description() {
  switch (form.value.type) {
    case 'project': return 'Share the details of your project, goals, and timeline.'
    case 'consultation': return 'Describe what you\'re working on and how we can help.'
    case 'partnership': return 'Tell us about your company and partnership ideas.'
    case 'question': return 'We\'re here to help with any questions you have.'
    default: return 'Share more details about your inquiry.'
  }
}
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f7fb 0%, #e9ecf3 100%);
}

.contact-hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #2a3a5a 100%);
  color: #fff;
  padding: 6rem 0 4rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #b2c7ff 50%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  color: #b2c7ff;
  line-height: 1.6;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 2.5rem;
  padding: 3rem;
  box-shadow:
    0 8px 64px 0 rgba(178, 199, 255, 0.15),
    0 4px 32px 0 rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 2px solid rgba(178, 199, 255, 0.25);
}

.form-progress {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.4;
  transition: all 0.3s ease;
}

.progress-step.active,
.progress-step.completed {
  opacity: 1;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.progress-step.active .step-number {
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  color: #1a1a2e;
  transform: scale(1.1);
}

.progress-step.completed .step-number {
  background: linear-gradient(135deg, #10b981, #34d399);
  color: #fff;
}

.step-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #5a6a85;
}

.progress-line {
  width: 60px;
  height: 2px;
  background: #e0e7ff;
  transition: all 0.3s ease;
}

.progress-line.active {
  background: linear-gradient(90deg, #b2c7ff, #e0e7ff);
}

.form-step {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

.form-step.step-active {
  opacity: 1;
  transform: translateY(0);
}

.form-step h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.step-description {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #5a6a85;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.inquiry-options {
  display: grid;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.inquiry-option {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border: 2px solid #e0e7ff;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  background: #fff;
}

.inquiry-option:hover {
  border-color: #b2c7ff;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(178, 199, 255, 0.2);
}

.inquiry-option.selected {
  border-color: #b2c7ff;
  background: linear-gradient(135deg, rgba(178, 199, 255, 0.1), rgba(224, 231, 255, 0.1));
  box-shadow: 0 8px 24px rgba(178, 199, 255, 0.3);
}

.option-icon {
  font-size: 2rem;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  border-radius: 50%;
  flex-shrink: 0;
}

.option-content {
  flex: 1;
}

.option-content h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.3rem;
}

.option-content p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #5a6a85;
  line-height: 1.5;
}

.option-check {
  color: #b2c7ff;
  opacity: 0;
  transition: all 0.3s ease;
}

.inquiry-option.selected .option-check {
  opacity: 1;
}

.form-field {
  margin-bottom: 2rem;
}

.form-field label {
  display: block;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 0.8rem;
  font-size: 1rem;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e0e7ff;
  border-radius: 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fff;
  color: #1a1a2e;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: #b2c7ff;
  box-shadow: 0 0 0 3px rgba(178, 199, 255, 0.1);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: #9ca3af;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.form-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 2rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1.01, 0.32, 1);
  text-decoration: none;
}

.form-button.primary {
  background: linear-gradient(135deg, #b2c7ff 0%, #e0e7ff 100%);
  color: #1a1a2e;
  box-shadow:
    0 8px 32px rgba(178, 199, 255, 0.4),
    0 4px 16px rgba(255, 255, 255, 0.3);
}

.form-button.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow:
    0 12px 48px rgba(178, 199, 255, 0.6),
    0 6px 24px rgba(255, 255, 255, 0.4);
}

.form-button.primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.form-button.secondary {
  background: transparent;
  color: #5a6a85;
  border: 2px solid #e0e7ff;
}

.form-button.secondary:hover {
  background: rgba(178, 199, 255, 0.1);
  border-color: #b2c7ff;
  transform: translateY(-2px);
}

.success-step {
  text-align: center;
}

.success-content {
  padding: 2rem 0;
}

.success-icon {
  color: #10b981;
  margin-bottom: 2rem;
  animation: successPulse 2s ease-in-out infinite;
}

@keyframes successPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.success-step h2 {
  color: #10b981;
  margin-bottom: 1rem;
}

.success-step p {
  color: #5a6a85;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
}

.success-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-info {
  position: sticky;
  top: 100px;
}

.info-card {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 2rem;
  padding: 2.5rem;
  box-shadow:
    0 8px 32px rgba(178, 199, 255, 0.15),
    0 4px 16px rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 2px solid rgba(178, 199, 255, 0.25);
}

.info-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-icon {
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #b2c7ff, #e0e7ff);
  border-radius: 50%;
  flex-shrink: 0;
}

.info-content h4 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.info-content p {
  font-family: 'Inter', sans-serif;
  color: #5a6a85;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-title {
    font-size: 2.5rem;
  }
  
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
  }
  
  .contact-form-wrapper {
    padding: 2rem;
  }
  
  .form-progress {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .progress-line {
    width: 2px;
    height: 30px;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .success-actions {
    flex-direction: column;
  }
  
  .contact-info {
    position: static;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-subtitle {
    font-size: 1.1rem;
  }
  
  .contact-form-wrapper {
    padding: 1.5rem;
  }
  
  .inquiry-option {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .option-icon {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
}
</style>