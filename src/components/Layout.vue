<script setup lang="ts">
import { Header } from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";
</script>

<template>
  <Header />
  <main class="main">
    <slot />
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
