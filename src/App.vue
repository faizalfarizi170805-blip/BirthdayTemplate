<template>
  <div id="app" class="app relative min-h-screen overflow-hidden">
    <div class="w-full h-full">
      <router-view />
    </div>

    <audio ref="audioPlayer" src="/Bertautt.mp3" loop></audio>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";

const audioPlayer = ref(null);

// Fungsi untuk play lagu
const playMusic = () => {
  if (audioPlayer.value) {
    audioPlayer.value.volume = 0.5;
    audioPlayer.value.play().catch((e) => console.log("Audio error:", e));
  }
};

// 2. fungsi ini biar bisa dipake component lain
provide("putarLaguGlobal", playMusic);
</script>

<style scoped>
.app {
  font-family: "Segoe UI", sans-serif;
}
</style>
