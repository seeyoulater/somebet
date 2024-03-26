<script lang="ts" setup>
import CoinIcon from "./Icons/CoinIcon.vue";
import FormControl from "./FormControl.vue";
import { Button, Space, Icon, Input } from "@/shared/ui";
import Tabs, { Tab } from "./Tabs.vue";

const tabs: Tab[] = [
  { label: "Bet", slot: "bet" },
  { label: "Autobet", slot: "autobet" },
];

const buttons = [
  {
    label: "min",
  },
  {
    label: "½",
  },
  {
    label: "+5",
  },
  {
    label: "2X",
  },
  {
    label: "max",
  },
];
</script>

<template>
  <aside class="sidebar">
    <Tabs :tabs="tabs">
      <template #bet>
        <Space column justify="between" grow>
          <FormControl label="Bet Amount">
            <Input placeholder="Enter Amount">
              <template #icon>
                <Icon>
                  <CoinIcon />
                </Icon>
              </template>
            </Input>

            <template #addon>
              <Space :gap="12">
                <Button v-for="button of buttons" grow variant="ghost">{{
                  button.label
                }}</Button>
              </Space>
            </template>
          </FormControl>
          <Button size="lg" class="play">Play</Button>
        </Space>
      </template>

      <template #autobet>
        <div>Content for autobet</div>
      </template>
    </Tabs>
  </aside>
</template>

<style lang="scss" scoped>
.sidebar {
  width: var(--sidebar-width-desktop);
  background: var(--blue-0);
  display: flex;
  flex-direction: column;
  z-index: 2;

  @include media("<desktop") {
    width: 100%;
  }
}

.play {
  margin-top: 32px;
}
</style>
