<template>
  <section id="home" class="relative bg-gray-900 min-h-screen flex items-center pt-20">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <!-- Using a more specific car repair image if available, otherwise generic professional look -->
      <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
           alt="Bengkel Mobil Fajar Jaya Kayuagung" 
           class="w-full h-full object-cover opacity-40 blur-sm scale-105 transform hover:scale-110 transition duration-[20s]" />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <div class="max-w-3xl">
        <div class="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-6">
            <span class="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            <span class="text-sm font-medium text-blue-300">Buka 07.00-18.00 setiap hari</span>
        </div>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Solusi Servis Mobil <br class="hidden lg:block"/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Terbaik & Terpercaya</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-2xl leading-relaxed">
          Bengkel Mobil Fajar Jaya (Aiku). Kami menangani segala jenis kerusakan mobil dengan mekanik ahli, alat modern, dan harga yang transparan.
        </p>
        <div class="flex flex-col sm:flex-row gap-5">
          <a href="https://wa.me/6282289004303?text=Halo%20Bengkel%20Fajar%20Jaya,%20saya%20ingin%20servis%20mobil" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.976.697 2.023 1.082 3.193 1.082 3.182 0 5.768-2.587 5.769-5.768.001-3.181-2.586-5.767-5.77-5.767zm6.756 3.84C18.667 9.87 18.536 9.802 18.067 9.566c-1.554-.78-1.776-.872-1.956-.566-.18.307-.704.872-.862 1.05-.158.179-.316.199-.785.199-.468 0-1.896-.7-3.141-1.812-1.246-1.112-1.983-2.5-2.222-2.924-.238-.423.111-.635.437-1.109.13-.189.26-.379.39-.567.129-.19.172-.32.257-.492.086-.171.043-.321-.021-.45-.065-.128-.577-1.392-.79-1.905-.207-.5-.418-.432-.577-.44-.15-.008-.322-.01-.493-.01-.172 0-.451.065-.688.322-.236.258-.902.881-.902 2.147 0 1.266.922 2.49 1.05 2.661.129.172 1.814 2.77 4.396 3.886 2.582 1.116 2.582.744 3.055.698.473-.047 1.523-.623 1.738-1.224.215-.602.215-1.118.151-1.224-.065-.107-.237-.172-.494-.3z"/></svg>
            Hubungi via WhatsApp
          </a>
          <a href="#layanan" 
             @click.prevent="document.getElementById('layanan').scrollIntoView({behavior: 'smooth'})"
             class="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-lg font-bold rounded-xl text-gray-300 hover:text-white hover:border-white hover:bg-white/5 transition-all">
            Lihat Layanan
          </a>
        </div>
        
        <!-- Quick Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800/50 pt-8">
          <div class="group">
            <p class="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">24/7</p>
            <p class="text-sm text-gray-400 font-medium tracking-wide uppercase">Siap Panggil</p>
          </div>
          <div class="group">
            <p class="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">100%</p>
            <p class="text-sm text-gray-400 font-medium tracking-wide uppercase">Garansi Servis</p>
          </div>
          <div class="group">
            <p class="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">Aiku</p>
            <p class="text-sm text-gray-400 font-medium tracking-wide uppercase">Montir Ahli</p>
          </div>
          <div class="group">
            <p class="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">Fair</p>
            <p class="text-sm text-gray-400 font-medium tracking-wide uppercase">Harga Jujur</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
</script>
