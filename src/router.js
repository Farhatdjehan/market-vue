import Home from "./Home.vue";
import ListAllMarketVue from "./ListAllMarket.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/list", component: ListAllMarketVue },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
