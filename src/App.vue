<script setup lang="ts">
  import Hero from './components/Hero.vue';
  import ReviewSection from './components/ReviewSection.vue';
  import {ref, onMounted, onUnmounted} from 'vue';  

  const showScrollToTop = ref(false);

  function handleScroll() {
    showScrollToTop.value = window.scrollY > 400;
  }

  function scrollToTop() {
    const reviewSection = document.querySelector('.reviews');
    if (reviewSection) {
      reviewSection.scrollIntoView({ behavior: 'smooth' });
    } 
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

</script>

<template>
    <Hero />
    <ReviewSection />
    <button
        v-if="showScrollToTop"
        class="scroll-to-top"
        @click="scrollToTop"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="scroll-top-icon">
            <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
        </svg>
    </button>
</template>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 32px;
    right: 32px;
    border: 1 px solid rgba(255, 255, 255, 0.55);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.75);
    border-radius: 50%;
    cursor: pointer;
    z-index: 1000;
    width: 44px;
    align-items: center;
    height: 44px;
}

.scroll-top-icon {
    width: 20px;
    height: 20px;
}

.scroll-to-top:hover {
    background-color: #333;
}
</style>
