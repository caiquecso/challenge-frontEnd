<script setup lang="ts">
import QText from "./QText.vue";
</script>

<template>
  <QText
    tag="small"
    size="xs"
    weight="semibold"
    class="px-2 py-1 bg-emerald-200 text-emerald-800 rounded leading-none"
  >
    <slot />
  </QText>
</template>
