<script lang="ts" setup>
import { Space, Avatar, Icon, Text } from "@/shared/ui";
import CoinIcon from "@/shared/ui/Icons/CoinIcon.vue";
import { computed } from "vue";

const props = defineProps<{
  avatar?: string;
  name?: string;
  score: number;
}>();

const formattedScore = computed(() => props.score.toFixed(2));
</script>

<template>
  <Space class="card" items="center" :gap="8">
    <Avatar v-if="avatar" :src="avatar" />
    <Text v-if="name" truncate>{{ name }}</Text>
    <Text color="orange-200">{{ formattedScore }}</Text>
    <Icon><CoinIcon /></Icon>
  </Space>
</template>

<style lang="scss" scoped>
.card {
  background: var(--blue-100);
  border-radius: 8px;
  padding: 0 12px;
  max-width: 160px;
  height: 40px;

  @include media("<desktop") {
    height: 36px;
  }
}
</style>
