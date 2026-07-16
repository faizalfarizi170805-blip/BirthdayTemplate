<template>
  <div
    class="h-screen bg-gradient-to-t from-pink-600 via-pink-400 to-white flex flex-col justify-center items-center"
  >
    <div
      class="border border-white border-[2px] flex flex-col text-center w-[270px] h-[400px] text-white bg-pink-600 rounded-3xl shadow-xl mx-10 my-2 items-center"
    >
      <div class="w-[310px] flex justify-between">
        <img src="@/assets/Bunga.png" alt="Bunga" class="w-[50px]" />
      </div>
      <div class="flex flex-col gap-6 items-center px-4">
        <h1 class="text-md font-bold">Happy Birthday, [Name]!</h1>
        <div
          class="w-[180px] h-[220px] border-2 border-dashed border-white flex items-center justify-center"
        >
          <span class="text-sm text-white/70 px-2">Put your photo here</span>
        </div>
        <p class="text-md font-bold">I have a little gift for you!</p>
      </div>
      <div class="w-[305px] flex justify-end">
        <img src="@/assets/Bunga2.png" alt="Bunga" class="w-[50px]" />
      </div>
    </div>

    <button
      @click="startJourney"
      class="mt-10 px-5 py-2 rounded-3xl bg-pink-500 shadow-lg text-white font-bold hover:bg-pink-600 transition transform active:scale-95"
    >
      Lets Start The Journey!
    </button>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";
import { useRouter } from "vue-router";
import confetti from "canvas-confetti";

const router = useRouter();
const playMusic = inject("putarLaguGlobal");

// Fungsi helper buat bikin ledakan confetti
const fireConfetti = () => {
  confetti({
    particleCount: 150, // Jumlah kepingan
    spread: 70, // Seberapa lebar sebarannya
    origin: { y: 0.6 }, // Muncul agak dari bawah sedikit
    colors: ["#FF69B4", "#FFD700", "#ffffff", "#403301"], // Warna (Pink, Emas, Putih, Coklat)
  });
};

// 1. Meledak pas halaman pertama kali muncul
onMounted(() => {
  fireConfetti();
});

// 2. Fungsi saat tombol diklik
const startJourney = () => {
  if (playMusic) {
    playMusic();
  }
  setTimeout(() => {
    router.push("/Memories");
  }, 500);
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
