<script setup lang="ts"></script>

<template>
  <Hero />
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>

<script>
import Hero from './components/Hero.vue';
export default{
  name: 'App',
  components: {
    Hero,
  }
}
</script>

<style scoped></style>
