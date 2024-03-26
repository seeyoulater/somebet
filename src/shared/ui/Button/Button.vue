<script lang="ts" setup>
import { computed } from "vue";

type ButtonVariant = "primary" | "ghost" | 'dark';
type ButtonSize = "sm" | "md" | "lg"

const props = withDefaults(
  defineProps<{
    size?: ButtonSize
    variant?: ButtonVariant;
    grow?: boolean;
  }>(),
  {
    size: 'md',
    variant: "primary",
  }
);

const classes = computed(() => {
  return {
    button: true,
    "--grow": props.grow,
    [`--size-${props.size}`]: true,
    [`--variant-${props.variant}`]: true,
  };
});
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  border-radius: 8px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  &.--grow {
    flex-grow: 1;
  }

  &:hover {
    opacity: 0.9;
  }

  &.--size-md {
    height: 40px;

    @include media('<=desktop') {
      height: 36px;
      padding: 0 12px;
    }
  }

  &.--size-lg {
    height: 74px;
  }

  &.--variant-primary {
    background: linear-gradient(to bottom, #4457ff, #3c4de1);
    color: #fff;
  }

  &.--variant-ghost {
    background: var(--blue-100);
    color: var(--blue-300);
  }

  &.--variant-dark {
    background: var(--blue-0);
    color: var(--blue-200);
  }
}
</style>
