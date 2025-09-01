<script lang="ts" setup>
import { defineProps } from "vue";
import QText from "./QText.vue";

let props = defineProps<{ label: string; checked?: boolean }>();
let emit = defineEmits(["update:checked"]);
</script>

<template>
  <label
    class="flex items-center text-sm py-2 justify-items-start cursor-pointer"
  >
    <input
      type="checkbox"
      :checked="props.checked"
      @change="
        emit('update:checked', ($event.target as HTMLInputElement)?.checked)
      "
    />
    <QText tag="span" weight="light" class="ml-2">
      {{ props.label }}
    </QText>
  </label>
</template>
