<script setup>
import { onMounted } from "vue";
import router from "@/router";

const Continue = () => {
  router.push("/Messages");
};
const DaftarReasons = [
  {
    id: 1,
    title: "Reason Description 1.",
  },
  {
    id: 2,
    title: "Reason Description 2.",
  },
  {
    id: 3,
    title: "Reason Description  3.",
  },
  {
    id: 4,
    title: "Reason Description 4.",
  },
  {
    id: 5,
    title: "Reason Description 5.",
  },
  {
    id: 6,
    title: "Reason Description 6.",
  },
];

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div
    class="flex flex-col bg-[#412C19] min-h-screen items-center text-white p-6 pb-20"
  >
    <div
      class="z-10 text-[#412C19] text-md font-bold text-center mb-10 mt-5 animate-fade-in-down bg-[#FFF8E7] px-8 py-3 rounded-full shadow-lg border-2 border-[#D4AF37]"
    >
      A few of the countless reasons why we love You ❤️
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl md:max-w-3xl justify-items-center"
    >
      <div
        v-for="(item, index) in DaftarReasons"
        :key="item.id"
        class="flex flex-row relative bg-[#FFF8E7] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-[350px] h-[140px] card-animate group"
        :style="{ animationDelay: `${index * 500}ms` }"
      >
        <div
          class="flex flex-col justify-center items-center w-[40%] relative border-r-2 border-dashed border-[#D4AF37]/50"
        >
          <span class="text-xs text-[#8D6E63]">Put Your Image Here</span>
        </div>

        <div
          class="w-[60%] p-4 flex flex-col justify-center text-left relative"
        >
          <div class="absolute top-2 right-2 text-pink-500 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <p
            class="text-xs text-[#8D6E63] font-bold uppercase tracking-wider mb-1"
          >
            Reason #{{ index + 1 }}
          </p>

          <p class="text-[#412C19] text-sm font-semibold leading-tight">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="z-10 text-[#412C19] text-md font-bold text-center mt-10 animate-fade-in-down bg-[#FFF8E7] px-8 py-3 rounded-xl shadow-lg border-2 border-[#D4AF37]"
    >
      And countless others We could never fully list ❤️
    </div>

    <button
      @click="Continue"
      class="text-[#412C19] text-md font-bold text-center mt-10 bg-[#D4AF37] hover:bg-[#b5952f] px-8 py-3 rounded-full shadow-lg"
    >
      Continue
    </button>
  </div>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.card-animate {
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}
</style>
