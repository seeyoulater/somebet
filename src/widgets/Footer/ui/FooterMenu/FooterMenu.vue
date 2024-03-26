<script lang="ts" setup>
import { Space, Icon } from "@/shared/ui";
import { FOOTER_MENU } from "./constants";
</script>

<template>
  <Space :gap="24">
    <a
      v-for="(item, index) of FOOTER_MENU"
      :key="index"
      @click.prevent
      :href="item.to"
      class="link"
    >
      <Icon size="lg">
        <component :is="item.icon" />
      </Icon>
    </a>
  </Space>
</template>

<style lang="scss" scoped>
.link {
  &:hover {
    opacity: 0.8;
  }
}
</style>
