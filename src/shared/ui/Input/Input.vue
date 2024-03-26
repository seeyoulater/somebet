<script lang="ts" setup>
defineProps<{
    placeholder?: string
}>()
</script>

<template>
  <div class="input">
    <input class="input__control" :placeholder="placeholder"/>
    <div v-if="$slots.icon" class="input__icon">
      <slot name="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  position: relative;
  display: flex;
  align-items: center;

  &__control {
    background: var(--main-bg);
    border-radius: 12px;
    border: none;
    outline: none;
    color: #fff;
    height: 60px;
    width: 100%;
    padding: 0 18px;

    &::placeholder {
        color: var(--blue-250);
    }
  }

  &__icon {
    position: absolute;
    right: 18px;
  }
}
</style>
