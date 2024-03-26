<script lang="ts" setup>
import { Space, Icon, Text } from "@/shared/ui";
import PingIcon from "./Icons/PingIcon.vue";

defineProps<{
  ping: number;
}>();
</script>

<template>
  <Space :gap="8">
    <Icon size="xl">
      <PingIcon />
    </Icon>
    <Space column :gap="0">
      <Text uppercase size="sm" color="blue-200" bold>Ping</Text>
      <Text bold>{{ ping }}</Text>
    </Space>
  </Space>
</template>
