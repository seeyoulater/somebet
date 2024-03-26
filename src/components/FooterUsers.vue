<script lang="ts" setup>
import { ScoreCard, Space } from "@/shared/ui";
import { createUser } from "../mock";
import { ComponentInstance, computed, onMounted, ref } from "vue";
import { animate } from "motion";

const root = ref<ComponentInstance<typeof Space>>();

const isScrollStates = ref<{
  isScrolledLeft: boolean;
  isScrolledRight: boolean;
}>({
  isScrolledLeft: true,
  isScrolledRight: false,
});

const users = ref(Array.from(Array(30).keys()).map(createUser));

const onScroll = (e: Event) => {
  const target = e.target as HTMLElement;

  isScrollStates.value.isScrolledLeft = target.scrollLeft === 0;
  isScrollStates.value.isScrolledRight =
    target.scrollLeft + target.clientWidth >= target.scrollWidth - 1; // Adjusted for potential rounding issues
};

onMounted(() => {
  const el = root.value;

  if (!el) {
    return;
  }

  animate(
    el.$el,
    {
      transform: ["translateX(0)", "translateX(16px)", "translateX(0)"],
    },
    {
      delay: 0.4,
      duration: 2,
      easing: [0.22, 0.03, 0.1, 1],
    },
  );
});

const classes = computed(() => ({
  slider: true,
  "--left": isScrollStates.value.isScrolledLeft,
  "--right": isScrollStates.value.isScrolledRight,
}));
</script>

<template>
  <div :class="classes">
    <Space :gap="12" class="slider__content" @scroll="onScroll" ref="root">
      <ScoreCard v-for="user of users" :key="user.id" v-bind="user" />
    </Space>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  overflow: hidden;
  position: relative;

  &__content {
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &:not(.--left) {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100px;
      height: 100%;
      background: linear-gradient(to right, var(--main-bg), rgba(#000, 0));
      z-index: 1;
    }
  }

  &:not(.--right) {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100px;
      height: 100%;
      background: linear-gradient(to left, var(--main-bg), rgba(#000, 0));
      z-index: 1;
    }
  }
}
</style>
