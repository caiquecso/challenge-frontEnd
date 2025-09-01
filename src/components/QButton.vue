<script lang="ts" setup>
import { defineProps, useAttrs, withDefaults } from "vue";

withDefaults(
  defineProps<{
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    tag?: "button" | "a";
  }>(),
  {
    variant: "primary",
    size: "md",
    tag: "button",
  }
);

const attrs = useAttrs();
</script>

<template>
  <Component
    :is="tag"
    v-bind="attrs"
    class="flex items-center gap-1 rounded-lg transition-colors ease-in-out duration-300 border justify-center"
    :class="[
      {
        primary: 'bg-primary-pure hover:bg-primary-dark text-white',
        secondary:
          'bg-primary-lightest text-primary-pure border-primary-light hover:border-primary-pure',
      }[variant],
      {
        sm: 'text-xs px-4 py-2',
        md: 'text-sm px-6 py-3',
        lg: 'text-base px-8 py-4',
      }[size],
    ]"
    @click="$emit('click', $event)"
  >
    <slot />
  </Component>
</template>
