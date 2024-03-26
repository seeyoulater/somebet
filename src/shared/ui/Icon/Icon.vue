<script lang="ts" setup>
import { computed, withDefaults } from "vue";

const props = withDefaults(
  defineProps<{
    size?: "sm" | "md" | "lg" | "xl" | "xxl";
  }>(),
  {
    size: "sm",
  },
);

const classNames = computed(() => ["icon", `--size-${props.size}`]);
</script>

<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.icon {
  width: var(--icon-size);
  height: var(--icon-size);

  & > :global(svg) {
    width: 100%;
    height: 100%;
  }

  &.--size {
    &-sm {
      --icon-size: 16px;
    }
    &-md {
      --icon-size: 18px;
    }
    &-lg {
      --icon-size: 24px;
    }
    &-xl {
      --icon-size: 32px;
    }
    &-xxl {
      --icon-size: 40px;
    }
  }
}
</style>
