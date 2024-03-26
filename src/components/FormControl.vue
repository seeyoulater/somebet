<script lang="ts" setup>
import { Space } from "@/shared/ui";
defineProps<{
  label: string;
}>();
</script>

<template>
  <Space column :gap="8">
    <div class="label">{{ label }}</div>
    <slot />

    <slot name="addon" />
  </Space>
</template>

<style lang="scss" scoped>
.label {
  color: #fff;
}
</style>
