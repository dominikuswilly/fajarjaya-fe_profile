<template>
  <div class="font-sans text-gray-900 antialiased">
    <NavBar />
    <main>
      <HomeSection />
      <LayananSection />
      <PromoSection />
      <AboutSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import LayananSection from './components/LayananSection.vue'
import PromoSection from './components/PromoSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>
