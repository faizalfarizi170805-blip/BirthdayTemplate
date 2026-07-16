<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// --- DATA TEKS SURAT ---
// Kita simpan per baris/paragraf di Array biar gampang diatur
const messages = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ❤️",
];

// Variabel untuk menampung teks yang sedang diketik (awalnya kosong semua)
const displayedLines = ref(["", "", "", "", "", "", ""]);
const isTypingDone = ref(false); // Penanda kalau ngetik udah kelar

// Fungsi Tombol
const goHome = () => {
  router.push("/");
};

// --- LOGIKA MENGETIK (TYPEWRITER) ---
const typeText = async () => {
  // Loop setiap paragraf di array messages
  for (let i = 0; i < messages.length; i++) {
    const fullString = messages[i];

    // Loop setiap huruf di paragraf tersebut
    for (let j = 0; j < fullString.length; j++) {
      displayedLines.value[i] += fullString[j]; // Tambah 1 huruf
      await new Promise((resolve) => setTimeout(resolve, 40)); // Tunggu 40ms (Kecepatan Ngetik)
    }

    // Tunggu sebentar sebelum pindah ke paragraf berikutnya (Jeda antar paragraf)
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Kalau semua sudah selesai
  isTypingDone.value = true;
};

onMounted(() => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  // Mulai ngetik pas halaman dibuka
  // Kasih delay dikit (1 detik) biar animasi kartu muncul dulu
  setTimeout(() => {
    typeText();
  }, 1000);
});
</script>

<template>
  <div
    class="min-h-screen bg-[#412C19] flex items-center flex-col justify-center p-6 relative overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
    >
      <div
        class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl"
      ></div>
    </div>

    <div
      class="bg-[#FFF8E7] max-w-2xl min-h-[500px] md:min-h-[600px] w-full px-8 py-4 md:p-12 rounded-2xl shadow-2xl relative card-animate border-4 border-[#412C19]/10"
    >
      <div class="absolute top-4 right-4 text-[#412C19]/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 md:h-12 md:w-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>

      <div class="mb-4 md:mb-8">
        <h2
          class="text-[#8D6E63] font-bold tracking-widest uppercase text-[9px] md:text-xs mb-2"
        >
          A Special Message
        </h2>
        <h1 class="text-[#412C19] text-2xl md:text-4xl font-serif font-bold">
          Dear [Name],
        </h1>
      </div>

      <div
        class="text-[#5D4037] space-y-4 text-[12px] md:text-lg leading-relaxed font-medium min-h-[200px]"
      >
        <p>
          {{ displayedLines[0] }}
        </p>

        <p v-if="displayedLines[0].length > 0">
          {{ displayedLines[1] }}
        </p>

        <p v-if="displayedLines[1].length > 0">
          {{ displayedLines[2] }}
        </p>

        <p v-if="displayedLines[2].length > 0">
          {{ displayedLines[3] }}
        </p>
        <p v-if="displayedLines[3].length > 0">
          {{ displayedLines[4] }}
        </p>
        <p v-if="displayedLines[4].length > 0">
          {{ displayedLines[5] }}
        </p>
        <p
          v-if="displayedLines[5].length > 0"
          class="text-[#412C19] font-bold text-sm md:text-xl"
        >
          {{ displayedLines[6] }}
        </p>
      </div>

      <div
        class="transition-opacity duration-1000 ease-in"
        :class="isTypingDone ? 'opacity-100' : 'opacity-0'"
      >
        <div
          class="mt-5 md:mt-10 pt-2 md:pt-6 border-t border-[#412C19]/10 flex flex-col items-end"
        >
          <p class="text-[#8D6E63] text-[10px] md:text-sm italic">With love,</p>
          <p class="text-[#412C19] text-lg md:text-xl font-bold font-serif">
            [Your Name]
          </p>
        </div>
      </div>
    </div>
    <div class="mt-4 md:mt-12 text-center">
      <button
        @click="goHome"
        class="text-[#412C19] text-md font-bold text-center mt-10 bg-[#D4AF37] hover:bg-[#b5952f] px-8 py-3 rounded-full shadow-lg hover:bg-[#5D4037] hover:scale-105 transition-all duration-300"
      >
        Back to Home 🏠
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Animasi Kartu Muncul */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-animate {
  animation: fadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>
