<template>
  <section id="promo" class="relative py-24 overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute inset-0 bg-blue-900">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800"></div>
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-gray-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-gray-700 shadow-2xl lg:flex lg:items-center lg:justify-between">
        <div class="lg:w-2/3">
          <div class="inline-block px-4 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-bold mb-4">
            Limited Time Offer
          </div>
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Promo Spesial Bulan Ini
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">Diskon Jasa Servis Ringan 10%</span>
          </h2>
          <p class="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl">
            Dapatkan potongan harga khusus untuk ganti oli dan tune up mobil Anda. Berlaku untuk semua jenis mobil. Jangan lewatkan kesempatan ini untuk merawat kendaraan kesayangan Anda!
          </p>
        </div>
        <div class="mt-10 lg:mt-0 lg:ml-10 flex-shrink-0">
          <a href="https://wa.me/6282289004303?text=Halo%20Admin,%20saya%20tertarik%20dengan%20promo%20servis%20di%20Bengkel%20Fajar%20Jaya" 
             target="_blank"
             class="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-blue-900 bg-white hover:bg-gray-50 shadow-lg transition-all transform hover:-translate-y-1">
            <span>Klaim Promo Sekarang</span>
            <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
