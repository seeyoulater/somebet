<script setup lang="ts">
import LogoIcon from "@/components/Icons/LogoIcon.vue";
import HeaderProfile from "@/components/HeaderProfile.vue";
import { HeaderMenu } from "./ui/HeaderMenu";
import { Button, Icon } from '@/shared/ui'
import MenuIcon from '@/components/Icons/MenuIcon.vue'
</script>

<template>
  <header class="header">
    <a href="/" class="logo">
      <LogoIcon />
    </a>

    <HeaderMenu class="desktop-menu"/>

    <Button variant="dark" class="burger">
      <Icon>
        <MenuIcon/>
      </Icon>
    </Button>

    <HeaderProfile />
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: var(--main-bg);
  height: 75px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid var(--border);

  @include media("<desktop") {
    height: 60px;
    padding: 0 12px;
  }
}

.logo {
  padding: 0 32px 0 28px;
  flex-shrink: 0;
}

.burger {
  @include media(">=desktop") {
    display: none;
  }
}

@include media("<desktop") {
  .desktop-menu,.logo {
    display: none;
  }
}
</style>
