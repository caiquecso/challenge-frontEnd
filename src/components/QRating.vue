<script lang="ts" setup>
import { defineProps } from "vue";
import QIconStar from "./QIconStar.vue";
import QText from "./QText.vue";

import { formatRating } from "../helpers/formaterText";
import { renderStars } from "../helpers/rating";

const props = defineProps<{ rating: number }>();
const ratingText = formatRating(props.rating);
</script>

<template>
  <div class="flex items-center gap-2">
    <QText tag="span">
      {{ ratingText }}
    </QText>
    <div class="flex items-center space-x-1 text-yellow-500">
      <QIconStar
        v-for="(star, i) in renderStars(props.rating)"
        :key="i"
        :half="star.half"
        :empty="star.empty"
      />
    </div>
  </div>
</template>
