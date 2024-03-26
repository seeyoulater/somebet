<script lang="ts" setup>
import PlusIcon from "./Icons/PlusIcon.vue";
import { Button, ScoreCard, Space, Avatar, Icon } from '@/shared/ui'

import { createUser } from "../mock";

const user = createUser();
</script>

<template>
  <Space class="profile" items="center" justify="end" grow>
    <ScoreCard :score="778.35" />
    <Button class="profile__topup">
      <Icon size="lg">
        <PlusIcon />
      </Icon>
      <span>Пополнить</span>
    </Button>
    <Avatar :src="user.avatar" size="xl" mobileSize="lg"/>
  </Space>
</template>

<style lang="scss" scoped>
.profile {
  &__topup {
    margin: 0 20px 0 12px;
  }
}
</style>
