<script lang="ts" generic="Card extends { id: string }" setup>
import { defineProps } from "vue";

defineProps<{
  cards: Card[];
}>();
</script>

<template>
  <ul>
    <li v-for="card in cards" :key="card.id" class="w-full">
      <div class="w-full h-full">
        <slot :card="card" />
      </div>
    </li>
  </ul>
</template>
