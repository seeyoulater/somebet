<script lang="ts" setup>
import { Icon, Space } from "@/shared/ui";
import { MENU_ITEMS } from "./constants";
</script>

<template>
  <Space items="center">
    <a
      v-for="(item, index) of MENU_ITEMS"
      :key="item.label"
      :class="{ link: true, '--active': index === 0 }"
      @click.prevent
      href="/"
    >
      <Icon size="lg"><component :is="item.icon" /></Icon>
      <span>{{ item.label }}</span>
    </a>
  </Space>
</template>

<style lang="scss" scoped>
.link {
  color: var(--menu-text);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  text-decoration: none;
  transition: opacity 160ms linear;

  &:hover {
    opacity: 0.5;
  }
}
</style>
