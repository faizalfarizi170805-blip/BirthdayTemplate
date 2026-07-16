<script setup>
import { ref, onMounted } from "vue"; // Tambahkan onMounted dan ref
import router from "@/router";

onMounted(() => {
  window.scrollTo(0, 0);
});
const DaftarMemories = [
  {
    id: 1,
    title: "Title 1",
    description: "Description for memory 1",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description for memory 2",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description for memory 3",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description for memory 4",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 5,
    title: "Title 5",
    description: "Description for memory 5",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 6,
    title: "Title 6",
    description: "Description for memory 6",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 7,
    title: "Title 7",
    description: "Description for memory 7",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 8,
    title: "Title 8",
    description: "Description for memory 8",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 9,
    title: "Title 9",
    description: "Description for memory 9",
    image: require("@/assets/bingkaicontoh.png"),
  },
  {
    id: 10,
    title: "Title 10",
    description: "Description for memory 10",
    image: require("@/assets/bingkaicontoh.png"),
  },
];

const Continue = () => {
  setTimeout(() => {
    router.push("/Reasons");
  }, 500);
};

// --- LOGIKA BARU UNTUK SCROLL ANIMATION ---
const itemRefs = ref([]); // Array untuk menyimpan elemen DOM

// Fungsi untuk memasukkan elemen ke dalam array refs
const setItemRef = (el) => {
  if (el) {
    itemRefs.value.push(el);
  }
};

onMounted(() => {
  // Membuat Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Jika elemen masuk ke layar (isIntersecting)
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Tambahkan class .show
          observer.unobserve(entry.target); // Stop memantau agar tidak animasi ulang (opsional)
        }
      });
    },
    {
      threshold: 0.5, // Animasi mulai saat 10% elemen terlihat
      rootMargin: "0px 0px -50px 0px", // Offset sedikit dari bawah
    },
  );

  // Mulai memantau setiap elemen kartu
  itemRefs.value.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <div
    class="relative flex flex-col bg-[#412C19] h-auto min-h-screen items-center text-white p-10 overflow-hidden"
  >
    <div
      class="absolute left-1/2 top-0 bottom-[150px] -translate-x-1/2 border-l-2 border-dashed border-white/30"
    ></div>

    <div
      class="z-10 w-[280px] text-white text-xl shadow-xl font-bold text-center mb-10 mt-5 bg-[#4C3422] px-4 py-2 rounded-full border border-white/20"
    >
      ✨ Beautiful Moments ✨
    </div>

    <div class="z-10 flex flex-col gap-8 w-full max-w-md pb-20 items-center">
      <div
        v-for="item in DaftarMemories"
        :key="item.id"
        :ref="setItemRef"
        class="relative bg-[#4C3422] p-4 rounded-xl shadow-[0_10px_25px_-5px_rgba(212,175,55,0.3)] my-5 flex flex-col items-center text-center w-[270px] card-animate"
      >
        <div
          class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-md border border-white/50"
        ></div>

        <div
          class="mb-[20px] h-[300px] flex items-center justify-center w-full"
        >
          <img
            :src="item.image"
            alt="Memory Photo"
            class="h-full w-auto object-cover rounded-lg"
          />
        </div>
        <h2 class="text-md font-bold mb-2">{{ item.title }}</h2>
        <p class="text-sm">{{ item.description }}</p>
      </div>
    </div>

    <div
      class="relative text-center text-white font-bold z-20 bg-[#4C3422] px-4 py-4 rounded-lg shadow-lg"
    >
      Endless memories stay softly in my thoughts, more than I could ever fit
      here
      <div
        class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-800 shadow-md border border-white/50"
      ></div>
    </div>

    <button
      @click="Continue"
      class="bg-[#D4AF37] text-[#412C19] hover:bg-[#b5952f] mt-10 px-8 py-2 rounded-3xl font-bold shadow-lg transition transform active:scale-95 z-20"
    >
      Continue
    </button>
  </div>
</template>

<style scoped>
/* 1. STATE AWAL: Sembunyi & di bawah */
.card-animate {
  opacity: 0;
  transform: translateY(50px);
  /* Kita gunakan transition, bukan animation keyframes, agar lebih smooth dikontrol JS */
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* 2. STATE AKHIR: Saat class 'show' ditambahkan oleh JS */
.card-animate.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
