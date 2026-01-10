<template>
  <section id="contact" class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">Hubungi Kami</h2>
        <p class="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Kami siap membantu masalah mobil Anda. Kunjungi bengkel kami atau hubungi segera.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Info -->
        <div class="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100">
          <h3 class="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
          
          <div class="space-y-8">
             <div class="flex items-start">
               <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                 <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <div class="ml-6">
                 <p class="text-lg font-bold text-gray-900">Alamat</p>
                 <p class="text-gray-600 mt-1">Kayuagung, Ogan Komering Ilir, Sumatera Selatan</p>
                 <a href="https://maps.app.goo.gl/DysfHJmxfbRBezF2A" target="_blank" class="text-blue-600 font-semibold hover:text-blue-800 mt-2 inline-flex items-center group">
                    Lihat di Google Maps 
                    <svg class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                 </a>
               </div>
             </div>

             <div class="flex items-start">
               <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                 <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
               </div>
               <div class="ml-6">
                 <p class="text-lg font-bold text-gray-900">Telepon / WhatsApp</p>
                 <p class="text-gray-600 mt-1">0822-8900-4303</p>
                 <a href="https://wa.me/6282289004303" target="_blank" class="text-green-600 font-bold hover:text-green-800 mt-2 inline-flex items-center">
                    Chat WhatsApp
                 </a>
               </div>
             </div>
             
             <div class="flex items-start">
               <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                 <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <div class="ml-6">
                 <p class="text-lg font-bold text-gray-900">Jam Operasional</p>
                 <p class="text-gray-600 mt-1">Senin - Minggu: 08.00 - 17.00 WIB</p>
                 <p class="text-sm text-blue-600 font-semibold mt-1">Layanan Panggilan 24 Jam</p>
               </div>
             </div>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.785055057863!2d104.9398686!3d-3.3653138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b97b00388d7df%3A0xc3b5fa777c1d1a6d!2sKayu%20Agung%2C%20Ogan%20Komering%20Ilir%20Regency%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
               width="100%" 
               height="100%" 
               style="border:0;" 
               allowfullscreen="" 
               loading="lazy" 
               referrerpolicy="no-referrer-when-downgrade">
             </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
