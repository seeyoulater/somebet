<script lang="ts" setup>
import Sidebar from './Sidebar.vue'
import {Space} from '@/shared/ui'
import { Game } from '@/features/game'
</script>

<template>
    <Space class="page" grow>
        <Space column grow class="page__content">
            <Game />
        </Space>
        <Sidebar />
    </Space>
</template>

<style lang="scss" scoped>
.page {
    flex-grow: 1;
    overflow: hidden;

    @include media('<desktop') {
        flex-direction: column;
    }

    &__content {
        background: url('../assets/bg.svg') var(--page-bg);
        background-size: cover;
    }
}
</style>