<template>
  <div :class="containerClass" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  gap?: number;
  items?: "center";
  justify?: "center" | "start" | "end" | "between";
  column?: boolean;
  grow?: boolean;
  noOverflow?: boolean;
}>();

import { computed } from "vue";

const containerClass = computed(() => ({
  space: true,
  "--grow": props.grow,
  "--column": props.column,
  "--no-overflow": props.noOverflow,
  [`--items-${props.items}`]: props.items !== undefined,
  [`--justify-${props.justify}`]: props.justify !== undefined,
}));

const style = computed(() => {
  const result: Record<string, string> = {};

  if (typeof props.gap === "number") {
    result["--gap"] = props.gap + "px";
  }

  return result;
});
</script>

<style scoped lang="scss">
.space {
  display: flex;
  gap: var(--gap, 0);

  &.--grow {
    flex-grow: 1;
  }

  &.--column {
    flex-direction: column;
  }

  &.--no-overflow {
    overflow: hidden;
  }

  &.--items {
    &-center {
      align-items: center;
    }

    &-flex-start {
      align-items: flex-start;
    }
  }

  &.--justify {
    &-center {
      justify-content: center;
    }
    &-start {
      justify-content: flex-start;
    }
    &-end {
      justify-content: flex-end;
    }
    &-between {
      justify-content: space-between;
    }
  }
}
</style>
