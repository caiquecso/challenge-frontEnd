<script lang="ts" setup>
import { useAttrs, defineProps, defineEmits } from "vue";

let props = defineProps<{ modelValue?: string }>();
let emit = defineEmits(["update:modelValue", "enter"]);
let attrs = useAttrs();
</script>

<template>
  <input
    v-bind="attrs"
    :value="props.modelValue"
    @input="
      emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
    "
    @keyup.enter="$emit('enter')"
    class="border border-zinc-300 w-full p-3 text-sm rounded-lg"
  />
</template>
