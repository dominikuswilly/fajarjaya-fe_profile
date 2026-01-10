<template>
  <section id="portfolio" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <span class="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">Portofolio</span>
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Hasil <span class="text-blue-600">Pengerjaan Kami</span>
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto font-light leading-relaxed">
          Dokumentasi beberapa kendaraan yang telah kami tangani dengan sepenuh hati.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(item, index) in portfolioItems" :key="index" 
             class="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2">
          <img :src="item.image" :alt="item.title" 
               class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <h3 class="text-2xl font-bold text-white mb-2">{{ item.title }}</h3>
            <p class="text-blue-300 font-medium">{{ item.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import portfolio1 from '../assets/portfolio-1.jpg'
import portfolio2 from '../assets/portfolio-2.jpg'

const portfolioItems = [
  {
    title: 'Servis Mesin & Tune Up',
    category: 'Perawatan Berkala',
    image: portfolio1
  },
  {
    title: 'Overhaul Mesin',
    category: 'Perbaikan Berat',
    image: portfolio2
  }
]
</script>
