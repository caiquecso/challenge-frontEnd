<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits, useAttrs } from "vue";
import QText from "./QText.vue";

let props = defineProps<{ label: string; modelValue?: number }>();
let emit = defineEmits(["update:modelValue"]);

let value = ref(props.modelValue ?? 0);

watch(
  () => props.modelValue,
  (val) => {
    value.value = val ?? 0;
  }
);

function onInput(e: Event) {
  const newValue = Number((e.target as HTMLInputElement).value);
  value.value = newValue;
  emit("update:modelValue", newValue);
}

const attrs = useAttrs();
</script>

<template>
  <QText tag="label" weight="light">
    {{ label }}
  </QText>
  <input
    :value="value"
    @input="onInput"
    type="range"
    class="w-full mt-3 cursor-col-resize"
    v-bind="attrs"
  />
</template>
