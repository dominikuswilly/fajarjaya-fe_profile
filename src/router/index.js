import { createRouter, createWebHashHistory } from 'vue-router'
import NavBar from '../components/NavBar.vue'

// Since it's a single page with scroll sections, we might not need complex routes.
// However, the request asked for Vue Router.
// We can use hash mode and handle section scrolling or just a single home route.
// For a true single page feel with sections, usually we just mount components on the main page.
// But if we want to use Router, maybe for future expansion or clean structure.
// Let's keep it simple: One main route '/' that renders the App layout.

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // We don't really need routes if everything is on one page, 
    // but we'll set up the infrastructure.
  ]
})

export default router
