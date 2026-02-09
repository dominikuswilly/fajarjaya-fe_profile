  <div class="font-sans text-gray-900 antialiased relative">
    <!-- Ramadan Toggle Button -->
    <button 
      @click="toggleRamadanMode" 
      class="fixed bottom-6 right-6 z-40 bg-indigo-900 text-yellow-400 p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2 border-2 border-yellow-500"
      title="Toggle Ramadan Mode"
    >
      <span class="text-2xl">🌙</span>
      <span class="font-bold hidden md:inline">Ramadan Mode</span>
    </button>

    <!-- Ramadan Overlay -->
    <transition 
      enter-active-class="transition opacity-100 ease-out duration-300"
      enter-from-class="opacity-0"
      leave-active-class="transition opacity-0 ease-in duration-200"
      leave-from-class="opacity-100"
    >
      <RamadanOverlay v-if="isRamadanMode" @close="isRamadanMode = false" />
    </transition>

    <NavBar />
    <main>
      <HomeSection />
      <LayananSection />
      <PortfolioSection />
      <!-- <PromoSection /> -->
      <AboutSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HomeSection from './components/HomeSection.vue'
import LayananSection from './components/LayananSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import PromoSection from './components/PromoSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import RamadanOverlay from './components/RamadanOverlay.vue'

const isRamadanMode = ref(false)
const toggleRamadanMode = () => {
  isRamadanMode.value = !isRamadanMode.value
}
</script>
