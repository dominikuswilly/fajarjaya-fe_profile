<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <!-- Content -->
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tentang Bengkel Mobil <span class="text-brand-blue">Fajar Jaya</span> (Aiku)
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            Bengkel Mobil Fajar Jaya hadir sebagai solusi terpercaya bagi pemilik mobil di Kayuagung dan sekitarnya. Kami mengerti betapa pentingnya performa kendaraan bagi aktivitas harian Anda.
          </p>
          <p class="mt-4 text-lg text-gray-500">
            Dengan dukungan teknisi berpengalaman (Aiku) dan peralatan yang memadai, kami berkomitmen memberikan pelayanan terbaik dengan hasil yang memuaskan dan harga Harga Bersahabat.
          </p>

          <dl class="mt-8 space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700">Teknisi Berpengalaman & Profesional</p>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700">Harga Bersahabat</p>
            </div>
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="ml-3 text-base text-gray-700">Pengerjaan Cepat & Bergaransi</p>
            </div>
          </dl>
        </div>

        <!-- Image -->
        <div class="mt-10 lg:mt-0 relative">
           <div class="absolute -inset-4 bg-brand-blue/10 rounded-xl transform rotate-3"></div>
           <img class="relative rounded-xl shadow-lg w-full object-cover h-64 lg:h-96" 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Montir sedang memperbaiki mobil" />
        </div>
      </div>
    </div>
  </section>
</template>
