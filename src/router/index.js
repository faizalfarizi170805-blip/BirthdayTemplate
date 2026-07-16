import { createRouter, createWebHistory } from "vue-router";
// HAPUS baris ini, karena RouteRecordRaw cuma buat TypeScript
// import { RouteRecordRaw } from "vue-router";

import HomeView from "@/components/UltahHeader.vue";
import Memories from "@/components/UltahMemories.vue";
import Reasons from "@/components/UltahReasons.vue";
import Messages from "@/components/UltahMessages.vue";

// HAPUS bagian ": RouteRecordRaw[]"
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/Memories",
    name: "Memories",
    component: Memories,
    meta: { title: "Memories" },
  },
  {
    path: "/Reasons",
    name: "Reasons",
    component: Reasons,
    meta: { title: "Reasons" },
  },
  {
    path: "/Messages",
    name: "Messages",
    component: Messages,
    meta: { title: "Messages" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
