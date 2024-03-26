<script lang="ts" setup>
import { CSSProperties, computed } from "vue";

type AvatarSize = "md" | "lg" | "xl";

const props = withDefaults(
  defineProps<{
    src: string;
    size: AvatarSize;
    mobileSize?: AvatarSize;
  }>(),
  {
    size: "md",
  },
);

const SizeMap: Record<AvatarSize, string> = {
  md: "24px",
  lg: "36px",
  xl: "46px",
};

const classes = computed(() => ({
  avatar: true,
}));

const style = computed(() => {
  const variables: CSSProperties = {};

  if (SizeMap[props.size]) {
    variables["--avatar-size"] = SizeMap[props.size];
  }

  if (props.mobileSize && SizeMap[props.mobileSize]) {
    variables["--avatar-mobile-size"] = SizeMap[props.mobileSize];
  }

  return variables;
});
</script>

<template>
  <div :class="classes" :style="style">
    <img :src="src" />
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: var(--avatar-size);
  height: var(--avatar-size);
  overflow: hidden;
  border-radius: 50%;
  flex-shrink: 0;

  @include media("<desktop") {
    width: var(--avatar-mobile-size, var(--avatar-size));
    height: var(--avatar-mobile-size, var(--avatar-size));
  }

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}
</style>
