<script lang="ts" setup>
import { Space } from "@/shared/ui";
import PlayCard from "./ui/PlayCard.vue";
import WithBetButtons from "./ui/WithBetButtons.vue";
import Deck from "./ui/Deck.vue";
import { animate } from "motion";
import { ComponentInstance, ref } from "vue";

const emptyCards = Array.from(Array(3).keys());
const targetCard = ref<ComponentInstance<typeof PlayCard>>();
const cards = ref<ComponentInstance<typeof PlayCard>[]>();
const container = ref<ComponentInstance<typeof Space>>();
const isBusy = ref(false);

const shallowNodeCopy = (el: HTMLElement) => {
  const copiedCard = el.cloneNode(true) as HTMLElement;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const left = rect.left + window.scrollX;

  copiedCard.style.position = "absolute";
  copiedCard.style.top = `${top}px`;
  copiedCard.style.left = `${left}px`;
  copiedCard.classList.add("--transition");

  return copiedCard;
};

const onCardTap = async (index: number) => {
  if (isBusy.value) {
    return;
  }

  const $clickedCard: HTMLElement = cards.value?.[index].$el;
  const $containerEl: HTMLElement = container.value?.$el;
  const originRect: DOMRect = $clickedCard?.getBoundingClientRect();
  const targetRect: DOMRect = targetCard.value?.$el.getBoundingClientRect();

  if (![targetRect, originRect, $clickedCard, $containerEl].every(Boolean)) {
    throw new Error("Missing required elements");
    return;
  }

  isBusy.value = true;

  const cloned = shallowNodeCopy($clickedCard);

  $containerEl.appendChild(cloned);

  const animator = animate(
    cloned,
    {
      width: targetRect.width + "px",
      height: targetRect.height + "px",
      x: [null, targetRect.left - originRect.left],
      y: [null, targetRect.top - originRect.top],
      rotateX: [0, 10, 0],
      rotateY: 180,
      scale: [1, 1.1, 1.3, 1],
    },
    {
      duration: 1,
      easing: [0.22, 0.03, 0.26, 1],
    },
  );

  await animator.finished;

  cloned.remove();
  isBusy.value = false;
};
</script>

<template>
  <Space class="game" items="center" justify="center" grow column :gap="0">
    <WithBetButtons :visibility="['mobile']" class="container">
      <PlayCard class="container__card" type="card" ref="targetCard">
        <Deck class="container__deck" :depth="4" />
      </PlayCard>
    </WithBetButtons>

    <WithBetButtons :visibility="['desktop']">
      <Space class="cards" ref="container">
        <PlayCard
          v-for="(_, index) of emptyCards"
          ref="cards"
          class="card"
          :key="index"
          type="empty"
          @click="onCardTap(index)"
        >
          <PlayCard type="card" class="mirror --transition" />
        </PlayCard>
      </Space>
    </WithBetButtons>
  </Space>
</template>

<style lang="scss" scoped>
.game {
  @include media("<desktop") {
    padding-top: 40px;
  }
}

.cards {
  margin-top: 50px;

  @include media("<desktop") {
    margin-bottom: -60px;
    --card-width: 80px;
    margin-top: 40px;
  }
}

.card {
  cursor: pointer;
  transition: transform 160ms linear;
  z-index: 2;

  // &:hover {
  //   transform: scale(1.01) translateY(-2px);
  // }
}

.mirror {
  transform: rotateY(180deg);
}

.container {
  position: relative;

  @include media("<desktop") {
    --card-width: 120px;
  }

  &__card {
    z-index: 1;
  }

  &__deck {
    position: absolute;
    top: 0;
  }
}

.card,
.mirror {
  // transform: scale(0.5);
}
</style>
