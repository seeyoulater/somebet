<script setup lang="ts">
import Ping from "@/components/Ping.vue";
import FooterUsers from "@/components/FooterUsers.vue";
import { Button, Space } from "@/shared/ui";
import { FooterMenu } from './ui/FooterMenu'
</script>

<template>
  <footer class="footer">
    <Space :gap="32" items="center" noOverflow grow>
      <Ping :ping="65" />
      <Button class="topup" variant="ghost">История игр</Button>
      <FooterUsers class="users" />
      <FooterMenu class="menu"/>
    </Space>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--main-bg);
  height: 75px;
  color: #fff;
  padding: 12px 16px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  overflow: hidden;
  
  @include media('<desktop') {
    height: 64px;
  }
}

@include media("<desktop") {
  .topup,
  .users {
    display: none;
  }
}

.menu {
    margin-left: auto;
}
</style>
