<script lang="ts" setup>
import CoinIcon from "@/shared/ui/Icons/CoinIcon.vue";
import { Text, Icon, Space } from "@/shared/ui";
import ArrowUpIcon from "@/shared/ui/Icons/ArrowUpIcon.vue";
import ArrowDownIcon from "@/shared/ui/Icons/ArrowDownIcon.vue";
import { computed } from "vue";

const props = defineProps<{
  direction: "long" | "short";
}>();

const buttonIcon = computed(() =>
  props.direction === "long" ? ArrowUpIcon : ArrowDownIcon,
);

const buttonClasses = computed(() => ["bet__button", `--${props.direction}`]);
</script>

<template>
  <Space class="bet" column :gap="8" items="center" justify="center">
    <button :class="buttonClasses">
      <Icon size="xxl">
        <component :is="buttonIcon" />
      </Icon>
    </button>
    <Text>High or Same</Text>
    <Space :gap="4">
      <Text color="blue-300">Win</Text>
      <Text color="orange-100">$275.43</Text>
      <Icon>
        <CoinIcon />
      </Icon>
    </Space>
  </Space>
</template>

<style lang="scss" scoped>
.bet {
  background: none;
  border: none;

  @include media(">=desktop") {
    width: 150px;
  }

  &__button {
    cursor: pointer;
    border: none;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 4px solid transparent;
    transition: opacity 120ms linear;

    @include media("<desktop") {
      width: 48px;
      height: 48px;
    }

    &:hover {
      opacity: 0.8;
    }

    &.--long {
      background: #71c658;
      border-color: #66ac52;
    }
    &.--short {
      background: #dd385f;
      border-color: #bc3353;
    }
  }
}
</style>
