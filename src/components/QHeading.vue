<script lang="ts" setup>
import { useAttrs, defineProps, withDefaults } from "vue";

withDefaults(
  defineProps<{
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size?: "sm" | "md" | "lg";
  }>(),
  {
    size: "md",
  }
);

let attrs = useAttrs();
</script>

<template>
  <component
    v-bind="attrs"
    :is="tag"
    class="font-medium text-zinc-950"
    :class="[
      {
        sm: 'text-lg',
        md: 'text-2xl',
        lg: 'text-4xl',
      }[size],
    ]"
  >
    <slot />
  </component>
</template>
