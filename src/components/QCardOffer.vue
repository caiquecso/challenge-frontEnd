<script lang="ts" setup>
import { defineProps } from "vue";
import QHeading from "./QHeading.vue";
import QButton from "./QButton.vue";
import QRating from "./QRating.vue";
import QPrice from "./QPrice.vue";
import QText from "./QText.vue";

defineProps<{
  courseName: string;
  rating: number;
  fullPrice: string;
  offeredPrice: string;
  discount: string;
  kind: string;
  level: string;
  iesLogo: string;
  iesName: string;
}>();
</script>

<template>
  <article
    class="bg-white p-6 rounded-lg shadow-sm border flex flex-col justify-between items-start gap-3 h-full"
  >
    <img :src="iesLogo" :alt="iesName" class="h-10 object-contain" />
    <QHeading tag="h2" size="sm">
      {{ courseName }}
    </QHeading>
    <QRating :rating="rating" />
    <QPrice
      :full-price="fullPrice"
      :offered-price="offeredPrice"
      :discount="discount"
    />
    <div>
      <QText tag="p">{{ kind }}</QText>
      <QText tag="p" color="minor" size="sm">
        {{ level }}
      </QText>
    </div>
    <QButton tag="a" size="sm" href="#" class="w-full">
      Quero esta bolsa
    </QButton>
  </article>
</template>
