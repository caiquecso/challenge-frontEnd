<script lang="ts" setup>
import { defineProps } from "vue";
import QText from "./QText.vue";
import QBadge from "./QBadge.vue";

defineProps<{
  fullPrice: string;
  offeredPrice: string;
  discount: string;
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex flex-col">
      <QText tag="del" color="minor" size="sm">
        {{ fullPrice }}
      </QText>

      <div class="flex items-center gap-2">
        <QText tag="ins" size="lg" weight="semibold">
          {{ offeredPrice }}
        </QText>

        <QBadge>
          <div class="inline-block text-emerald-800 align-middle">
            - {{ discount }}
          </div>
        </QBadge>
      </div>
    </div>
  </div>
</template>
