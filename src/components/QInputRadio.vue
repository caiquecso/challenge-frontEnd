<script lang="ts" setup>
import { defineProps, useAttrs, defineEmits } from "vue";
import QText from "./QText.vue";

let props = defineProps<{
  label: string;
  modelValue?: string;
}>();
let emit = defineEmits(["update:modelValue"]);
let attrs = useAttrs();
</script>

<template>
  <label
    class="flex items-center text-sm py-2 justify-items-start cursor-pointer"
  >
    <input
      v-bind="attrs"
      type="radio"
      :checked="attrs.value === attrs['modelValue']"
      @change="$emit('update:modelValue', attrs.value)"
    />
    <QText tag="span" weight="light" class="ml-2">
      {{ props.label }}
    </QText>
  </label>
</template>
