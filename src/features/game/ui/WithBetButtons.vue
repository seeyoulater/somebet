<script lang="ts" setup>
import { Space } from '@/shared/ui'
import BetButton from './BetButton.vue';
import { computed } from 'vue';

const props = defineProps<{
    visibility: Array<'desktop' | 'mobile'>
}>()

const buttonClasses = computed(() => ({
    btn: true,
    '--desktop': props.visibility.includes('desktop'),
    '--mobile': props.visibility.includes('mobile'),
}))
</script>

<template>
    <Space :gap="20">
        <BetButton direction="short" :class="buttonClasses" />
        <slot/>
        <BetButton direction="long" :class="buttonClasses" />
    </Space>
</template>

<style lang="scss" scoped>
.btn {

    @include media(">=desktop") {
        &:not(.--desktop) {
            display: none;
        }
    }

    @include media("<desktop") {
        &:not(.--mobile) {
            display: none;
        }
    }

}
</style>