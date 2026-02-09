<template>
  <div class="ramadan-overlay fixed inset-0 z-50 overflow-y-auto">
    <div class="stars"></div>

    <nav class="fixed top-0 w-full z-[1001] px-8 py-4 flex justify-between items-center glass-nav">
      <div class="logo text-2xl text-gold font-amiri">🌙 Fajar Jaya</div>
      <button @click="$emit('close')" class="close-btn text-cream hover:text-gold transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div class="lantern l1"></div>
    <div class="lantern l2"></div>
    <div class="lantern l3"></div>

    <section class="hero min-h-screen flex flex-col justify-center items-center text-center relative p-8">
        <div class="hero-bg-img"></div>
        <h1 class="text-4xl md:text-6xl text-gold font-amiri mb-4 animate-fadeInUp">Selamat Datang di Bulan Puasa</h1>
        <p class="text-lg md:text-xl text-cream max-w-2xl mb-12 leading-relaxed animate-fadeInUp delay-300">
            Ramadan 1447H / 2026 M. Mari sucikan hati, jalin silaturahmi, dan raih kemenangan bersama Bengkel Fajar Jaya.
        </p>
        
        <div class="flex flex-wrap gap-8 justify-center z-10 w-full max-w-6xl">
            <div class="glass-card flex-1 min-w-[300px]">
                <h3 class="text-xl font-bold mb-2 text-gold">⏰ Menuju Maghrib</h3>
                <div class="text-4xl font-mono text-gold-bright my-4">{{ countdown }}</div>
                <p class="text-sm opacity-80">Jakarta Pusat</p>
            </div>

            <div class="glass-card flex-1 min-w-[300px]">
                <h3 class="text-xl font-bold mb-4 text-gold">📅 Jadwal Sholat Hari Ini</h3>
                <ul class="text-left space-y-2">
                    <li v-for="(time, name) in prayerTimes" :key="name" class="flex justify-between border-b border-white/5 pb-1" :class="{ 'text-gold font-bold': name === 'Maghrib' }">
                        <span>{{ name }}</span> <span>{{ time }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <div class="text-center pb-8 opacity-60">
        <p>&copy; 2026 Bengkel Mobil Fajar Jaya. Ramadan Mubarak.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const countdown = ref('00:00:00')
const prayerTimes = {
    'Subuh': '04:45',
    'Dzuhur': '12:01',
    'Ashar': '15:18',
    'Maghrib': '18:12',
    'Isya': '19:22'
}

let intervalId = null

const updateCountdown = () => {
    const now = new Date()
    const target = new Date()
    // Target today at 18:12:00
    target.setHours(18, 12, 0, 0)

    if (now > target) {
        target.setDate(target.getDate() + 1)
    }

    const diff = target - now
    
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    countdown.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

onMounted(() => {
    updateCountdown()
    intervalId = setInterval(updateCountdown, 1000)
    document.body.style.overflow = 'hidden' // Prevent scrolling of main body
})

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
    document.body.style.overflow = '' // Restore scrolling
})
</script>

<style scoped>
/* Scoped styles to isolate Ramadan theme */
.ramadan-overlay {
    background: linear-gradient(to bottom, #0f2027 0%, #2c5364 50%, #6a0572 80%, #f8b500 100%);
    color: #f4e3d7;
    font-family: 'Lato', sans-serif;
}

.font-amiri {
    font-family: 'Amiri', serif;
}

.text-gold { color: #f8b500; }
.text-gold-bright { color: #ffcc00; }
.text-cream { color: #f4e3d7; }

/* Stars Animation */
.stars {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    pointer-events: none;
    z-index: -1;
    background-image: 
        radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 200px 200px;
    opacity: 0.3;
    animation: twinkle 5s infinite;
}

@keyframes twinkle {
    0% { opacity: 0.3; transform: translateY(0); }
    50% { opacity: 0.5; }
    100% { opacity: 0.3; transform: translateY(-10px); }
}

/* Glassmorphism */
.glass-nav {
    background: rgba(15, 32, 39, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Animations */
.animate-fadeInUp {
    animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.delay-300 { animation-delay: 0.3s; }

/* Lanterns */
.lantern {
    position: absolute;
    top: -20px;
    width: 40px;
    height: 60px;
    background: linear-gradient(135deg, #f8b500, #ff9900);
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(248, 181, 0, 0.6);
    animation: swing 3s infinite ease-in-out alternate;
    z-index: 10;
}
.lantern::after {
    content: ''; position: absolute; bottom: -10px; left: 15px;
    width: 10px; height: 10px; background: inherit; border-radius: 50%;
}
.l1 { left: 10%; animation-duration: 3.5s; height: 70px; }
.l2 { left: 85%; animation-duration: 4s; height: 50px; top: -10px; }
.l3 { left: 50%; animation-duration: 5s; height: 90px; top: -30px; }

@keyframes swing {
    0% { transform: rotate(5deg) translateY(0); }
    100% { transform: rotate(-5deg) translateY(5px); }
}
</style>
