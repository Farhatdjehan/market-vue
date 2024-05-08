import Home from "./Home.vue";
import ListAllMarketVue from "./ListAllMarket.vue";
import DetailStock from "./DetailStock.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/list", component: ListAllMarketVue },
  { path: "/list/detail/:id", component: DetailStock },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
