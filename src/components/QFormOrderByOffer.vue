<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import QInputRadio from "./QInputRadio.vue";
import QHeading from "./QHeading.vue";

let props = defineProps<{ orderBy?: string }>();
let emit = defineEmits(["change-order"]);
let selected = ref(props.orderBy || "course-name");

watch(selected, (val) => {
  emit("change-order", val);
});
</script>

<template>
  <form action="#">
    <QHeading tag="h2" size="sm" class="mb-2"> Ordenar </QHeading>

    <QInputRadio
      label="Cursos de A-Z"
      name="order-by"
      value="course-name"
      v-model="selected"
    />

    <QInputRadio
      label="Menor preço"
      name="order-by"
      value="price"
      v-model="selected"
    />

    <QInputRadio
      label="Melhor avaliados"
      name="order-by"
      value="rating"
      v-model="selected"
    />
  </form>
</template>
