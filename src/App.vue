<script setup>
// import { ref, computed } from 'vue';
// import Home from './Home.vue'
// import ListAllMarketVue from './ListAllMarket.vue';
// import { RouterView, createMemoryHistory, createRouter } from 'vue-router';

// const routes = [
//   { path: '/', component: Home },
//   { path: '/list', component: ListAllMarketVue },
// ]


// const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// })
// const routes = {
//   '/': Home,
//   '/list': ListAllMarketVue
// }
// const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

// const currentView = computed(() => {
//   return routes[currentPath.value.slice(1) || '/']
// })
</script>

<style>
/* body {
  overflow-x: hidden
} */

#app {
  font-family: Poppins, sans-serif;
  height: 100%;
  /* overflow-x: hidden; */
  color: #161616;
  padding: 0 20px;
}
</style>

<template>

  <RouterView />
  <!-- <component :is="currentView" /> -->
</template>
