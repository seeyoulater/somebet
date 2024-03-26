<script lang="ts" setup>
import { computed } from "vue";

type BUTTON_COLORS =
  | "orange-100"
  | "orange-200"
  | "blue-200"
  | "blue-300"
  | "white";

const props = withDefaults(
  defineProps<{
    size: "sm" | "md";
    uppercase?: boolean;
    bold?: boolean;
    truncate?: boolean;
    color?: BUTTON_COLORS;
  }>(),
  {
    size: "md",
    color: "white",
  }
);

const classNames = computed(() => {
  return {
    text: true,
    "--uppercase": props.uppercase,
    "--bold": props.bold,
    "--truncate": props.truncate,
    [`--size-${props.size}`]: true,
  };
});

const style = computed(() => {
  return {
    ...{ color: props.color ? `var(--${props.color})` : undefined },
  };
});
</script>

<template>
  <div :class="classNames" :style="style">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.text {
  font-weight: 600;

  &.--size {
    &-sm {
      font-size: 12px;
    }
    &-md {
      font-size: 14px;
    }
  }

  &.--uppercase {
    text-transform: uppercase;
  }

  &.--bold {
    font-weight: 700;
  }

  &.--truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
