<template>
  <section id="layanan" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <span class="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase mb-4">Layanan Kami</span>
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Solusi Lengkap <span class="text-blue-600">Perawatan Mobil</span>
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-600 mx-auto font-light leading-relaxed">
          Dari servis rutin hingga perbaikan berat, kami siap menangani segala masalah mobil Anda dengan standar profesional.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Service Items -->
        <div v-for="(service, index) in services" :key="index" 
             class="group bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 border border-gray-100 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors"></div>
          
          <div class="h-16 w-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
            <component :is="service.icon" class="h-8 w-8" />
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-3 relative z-10">{{ service.title }}</h3>
          <p class="text-gray-600 leading-relaxed relative z-10">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  WrenchScrewdriverIcon, 
  CogIcon,
  CpuChipIcon,
  TruckIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    title: 'Servis Mesin & Tune Up',
    description: 'Optimalisasi performa mesin, ganti busi, filter udara, dan pembersihan ruang bakar untuk tarikan mobil yang lebih enteng.',
    icon: CogIcon
  },
  {
    title: 'Ganti Oli Berkualitas',
    description: 'Tersedia berbagai oli mesin berkualitas tinggi sesuai spesifikasi mobil Anda untuk menjaga keawetan mesin.',
    icon: SparklesIcon
  },
  {
    title: 'Servis Kaki-kaki & Rem',
    description: 'Perbaikan suspensi, shockbreaker, dan sistem pengereman untuk kenyamanan dan keamanan berkendara.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Servis AC Mobil',
    description: 'Perbaikan kompresor, isi freon, dan pembersihan evaporator agar AC kembali dingin dan bebas bau.',
    icon: BoltIcon
  },
  {
    title: 'Injeksi & Kelistrikan',
    description: 'Diagnosa komputer (scanner) untuk masalah check engine, sensor, dan sistem kelistrikan body.',
    icon: CpuChipIcon
  },
  {
    title: 'Montir Panggilan (Emergency)',
    description: 'Mobil mogok di jalan? Kami siap datang ke lokasi Anda di area Kayuagung dan sekitarnya.',
    icon: TruckIcon
  }
]
</script>
