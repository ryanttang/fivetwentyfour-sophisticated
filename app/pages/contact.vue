<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <form @submit.prevent="handleSubmit">
        <div v-if="step === 1">
          <label>What is your inquiry about?</label>
          <select v-model="form.type">
            <option value="project">A new project</option>
            <option value="job">A job opportunity</option>
            <option value="question">A general question</option>
          </select>
          <button type="button" @click="nextStep">Next</button>
        </div>
        <div v-else-if="step === 2">
          <label v-if="form.type === 'project'">Tell us about your project</label>
          <label v-else-if="form.type === 'job'">Tell us about the job</label>
          <label v-else>What's your question?</label>
          <textarea v-model="form.details" rows="5" required></textarea>
          <button type="button" @click="prevStep">Back</button>
          <button type="button" @click="nextStep">Next</button>
        </div>
        <div v-else-if="step === 3">
          <label>Your email</label>
          <input type="email" v-model="form.email" required />
          <button type="button" @click="prevStep">Back</button>
          <button type="submit">Send</button>
        </div>
        <div v-else-if="step === 4">
          <p>Thank you! We'll be in touch soon.</p>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  const step = ref(1)
  const form = ref({
    type: 'project',
    details: '',
    email: ''
  })
  function nextStep() {
    if (step.value < 4) step.value++
  }
  function prevStep() {
    if (step.value > 1) step.value--
  }
  function handleSubmit() {
    // Placeholder for form submission logic
    step.value = 4
  }
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 500px;
    margin: 3rem auto;
    background: #fff;
    padding: 2.5rem 2rem;
    border-radius: 1.2rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 700;
  }
  form label {
    display: block;
    margin-bottom: 0.7rem;
    font-weight: 500;
  }
  form select, form textarea, form input {
    width: 100%;
    margin-bottom: 1.2rem;
    padding: 0.7rem;
    border-radius: 0.5rem;
    border: 1px solid #e0e0e0;
    font-size: 1rem;
  }
  form button {
    margin-right: 1rem;
    background: #0070f3;
    color: #fff;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  form button:hover {
    background: #005bb5;
  }
  </style>