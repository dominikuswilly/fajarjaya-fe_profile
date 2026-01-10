<template>
  <nav class="fixed w-full z-50 bg-white/95 backdrop-blur shadow-md transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 cursor-pointer" @click="scrollTo('home')">
          <h1 class="text-2xl font-bold text-brand-blue tracking-tighter">
            FAJAR JAYA
            <span class="text-sm font-normal text-gray-600 block sm:inline sm:ml-2">Bengkel Mobil Kayuagung</span>
          </h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#home" class="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-colors" @click.prevent="scrollTo('home')">Home</a>
            <a href="#layanan" class="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-colors" @click.prevent="scrollTo('layanan')">Layanan</a>
            <a href="#promo" class="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-colors" @click.prevent="scrollTo('promo')">Promo</a>
            <a href="#about" class="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition-colors" @click.prevent="scrollTo('about')">Tentang Kami</a>
            <a href="#contact" class="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-md">Hubungi Kami</a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-700 hover:text-brand-blue focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isOpen" class="md:hidden bg-white shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" class="text-gray-700 hover:text-brand-blue hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors" @click="scrollTo('home')">Home</a>
          <a href="#layanan" class="text-gray-700 hover:text-brand-blue hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors" @click="scrollTo('layanan')">Layanan</a>
          <a href="#promo" class="text-gray-700 hover:text-brand-blue hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors" @click="scrollTo('promo')">Promo</a>
          <a href="#about" class="text-gray-700 hover:text-brand-blue hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors" @click="scrollTo('about')">Tentang Kami</a>
          <a href="#contact" class="text-brand-blue hover:text-brand-blue hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-bold transition-colors border-2 border-brand-blue mt-2 text-center" @click="scrollTo('contact')">Hubungi Kami</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const scrollTo = (id) => {
  isOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
