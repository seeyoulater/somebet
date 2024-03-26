<script lang="ts" setup>
import PlayCard from "./PlayCard.vue";

defineProps<{
  depth: number;
}>();
</script>

<template>
  <div class="deck">
    <PlayCard
      v-for="i of depth"
      :key="i"
      class="deck__card"
      type="empty"
      :style="{ marginTop: (depth - i + 1) * 6 + 'px' }"
    />
  </div>
</template>

<style lang="scss" scoped>
.deck {
  position: relative;
  width: var(--card-width, 185px);
  height: calc(var(--card-width, 185px) / 0.67);

  &__card {
    position: absolute;
    top: 0;
  }
}
</style>
