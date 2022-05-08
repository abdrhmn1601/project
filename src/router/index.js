import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import Help from "../views/Help.vue";
import KirimMasukan from "../views/KirimMasukan.vue";
import PrivasiDanPersyaratan from "../views/PrivasiDanPersyaratan.vue";
import MyBlog from "../views/MyBlog.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/myblog",
      name: "MyBlog",
      component: MyBlog,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/help",
      name: "Help",
      component: Help,
    },
    {
      path: "/privasi",
      name: "PrivasiDanPersyaratan",
      component: PrivasiDanPersyaratan,
    },
    {
      path: "/kirimmasukan",
      name: "KirimMasukan",
      component: KirimMasukan,
    },
  ],
});

export default router;
