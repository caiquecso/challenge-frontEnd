<script setup lang="ts">
import QHeading from "./QHeading.vue";
import QInputCheckbox from "./QInputCheckbox.vue";
import QInputRange from "./QInputRange.vue";
import QFieldset from "./QFieldset.vue";
import { defineProps, defineEmits } from "vue";

let props = defineProps<{
  modelValue: string[];
  kinds?: string[];
  price?: number;
}>();

let emit = defineEmits(["update:modelValue", "update:kinds", "update:price"]);

function updatePrice(value: number) {
  emit("update:price", value);
}

function updateLevel(value: string, checked: boolean) {
  let newLevels = props.modelValue.slice();
  if (checked && !newLevels.includes(value)) {
    newLevels.push(value);
  } else if (!checked && newLevels.includes(value)) {
    let idx = newLevels.indexOf(value);
    newLevels.splice(idx, 1);
  }
  emit("update:modelValue", newLevels);
}

function updateKind(value: string, checked: boolean) {
  let kinds = Array.isArray(props.kinds) ? props.kinds.slice() : [];
  if (checked && !kinds.includes(value)) {
    kinds.push(value);
  } else if (!checked && kinds.includes(value)) {
    let idx = kinds.indexOf(value);
    kinds.splice(idx, 1);
  }
  emit("update:kinds", kinds);
}
</script>

<template>
  <form action="#">
    <QHeading tag="h1">Filtros</QHeading>

    <hr class="my-5" />

    <QFieldset legend="Graduação">
      <QInputCheckbox
        label="Bacharelado"
        :checked="props.modelValue.includes('bacharelado')"
        @update:checked="(checked) => updateLevel('bacharelado', checked)"
      />
      <QInputCheckbox
        label="Licenciatura"
        :checked="props.modelValue.includes('licenciatura')"
        @update:checked="(checked) => updateLevel('licenciatura', checked)"
      />
      <QInputCheckbox
        label="Tecnólogo"
        :checked="props.modelValue.includes('tecnologo')"
        @update:checked="(checked) => updateLevel('tecnologo', checked)"
      />
    </QFieldset>

    <hr class="my-5" />

    <QFieldset legend="Modalidade do curso">
      <QInputCheckbox
        label="Presencial"
        :checked="props.kinds && props.kinds.includes('presencial')"
        @update:checked="(checked) => updateKind('presencial', checked)"
      />
      <QInputCheckbox
        label="A distância - EaD"
        :checked="props.kinds && props.kinds.includes('ead')"
        @update:checked="(checked) => updateKind('ead', checked)"
      />
    </QFieldset>

    <hr class="my-5" />

    <QFieldset legend="Preço da mensalidade">
      <QInputRange
        :label="
          'R$ ' +
          (props.price !== undefined
            ? props.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
            : '0,00')
        "
        :model-value="props.price"
        @update:model-value="updatePrice"
        min="0"
        max="1000"
        step="10"
      />
    </QFieldset>

    <hr class="mt-5" />
  </form>
</template>
