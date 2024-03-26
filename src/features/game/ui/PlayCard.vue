<script lang="ts" setup>
import CardIcon from "@/components/Icons/CardIcon.vue";
import CardEmptyIcon from "@/components/Icons/CardEmptyIcon.vue";
import { type Component, computed, useAttrs } from "vue";

type CardType = "card" | "empty";

defineEmits(['select'])

const props = defineProps<{
  type: CardType;
}>()

const CARD_MAP: Record<CardType, Component> = {
  card: CardIcon,
  empty: CardEmptyIcon,
};


const component = computed(() => CARD_MAP[props.type]);
const classes = computed(()=> ({
  'play-card': true,
}))
</script>

<template>
  <div :class="classes">
    <component :is="component" />
    <div v-if="$slots.default" class="backdrop"><slot /></div>
  </div>
</template>

<style lang="scss" scoped>
.play-card {
  width: var(--card-width, 185px);
  height: calc(var(--card-width, 185px) / 0.67);
  transform-style: preserve-3d;
  position: relative;
  box-shadow: 0 0 20px 0 rgba(#000, 0.4);
  box-sizing: border-box;
  border-radius: 22px;
  transition: box-shadow 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.--transition {
    box-shadow: 0 0 20px 0 rgba(#000, 0.01);
  }
}

.backdrop {
  width: 100%;
  height: 100%;
  transform: translateZ(-1px);
  position: absolute;
  top: 0;

  .play-card {
    width: 100%;
    height: 100%;
  }
}
</style>
