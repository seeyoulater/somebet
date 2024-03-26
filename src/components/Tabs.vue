<template>
  <Space column grow>
    <div class="header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{ header__item: true, '--active': index === activeTab }"
      >
        <span> {{ tab.label }}</span>
      </button>
    </div>

    <Space class="tab" column grow>
      <slot :name="tabs[activeTab].slot"></slot>
    </Space>
  </Space>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {Space} from "@/shared/ui";

export type Tab = {
  label: string;
  slot: string;
};

defineProps<{
  tabs: Tab[];
}>();

const activeTab = ref<number>(0);
</script>

<style scoped lang="scss">
.header {
  display: flex;
  background: var(--main-bg);

  &__item {
    flex-grow: 1;
    height: 75px;
    background: transparent;
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover span {
      opacity: 0.8;
    }
  }

  &__item.--active {
    background: var(--blue-0);
  }
}

.tab {
  padding: 30px 20px;
  color: #fff;
}
</style>
