<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { fetchOffers } from "./services/offersService";
import type { Offer } from "./types/offer";
import {
  formatCurrency,
  calculateDiscount,
  formatKind,
  formatLevel,
} from "./helpers/format";
import { filterOffers } from "./helpers/filter";
import { sortOffers } from "./helpers/sort";
import QHeader from "./components/QHeader.vue";
import QInput from "./components/QInput.vue";
import QButton from "./components/QButton.vue";
import QCardOffer from "./components/QCardOffer.vue";
import QFooter from "./components/QFooter.vue";
import QLayout from "./components/QLayout.vue";
import QListCard from "./components/QListCard.vue";
import QSectionForm from "./components/QSectionForm.vue";
import QFormOrderByOffer from "./components/QFormOrderByOffer.vue";
import QFormFilterOffer from "./components/QFormFilterOffer.vue";

let offers = ref<Offer[]>([]);
let orderBy = ref<"course-name" | "price" | "rating">("course-name");
let searchTerm = ref("");
let displayedOffers = ref<Offer[]>([]);
let selectedLevels = ref<string[]>([]);
let selectedKinds = ref<string[]>([]);
let selectedPrice = ref<number>(0);

function onSearch() {
  let filtered = filterOffers(
    offers.value,
    searchTerm.value,
    selectedLevels.value,
    selectedKinds.value,
    selectedPrice.value
  );
  filtered = sortOffers(filtered, orderBy.value);
  displayedOffers.value = filtered;
}

watch([selectedLevels, selectedKinds, selectedPrice], () => {
  onSearch();
});

onMounted(async () => {
  let apiOffers = await fetchOffers();
  offers.value = apiOffers.map((offer: Offer) => ({
    ...offer,
    discount: calculateDiscount(offer.fullPrice, offer.offeredPrice) + "%",
  }));
  onSearch();
});

function setOrderBy(value: "course-name" | "price" | "rating") {
  orderBy.value = value;
  onSearch();
}
</script>

<template>
  <QLayout>
    <template #header>
      <QHeader>
        <QInput
          v-model="searchTerm"
          type="search"
          id="site-search"
          name="q"
          placeholder="Busque o curso ideal para você"
          aria-label="Buscar cursos e bolsas"
          @enter="onSearch"
        />
        <QButton type="button" @click="onSearch">Buscar</QButton>
      </QHeader>
    </template>

    <template #sidebar>
      <QFormFilterOffer
        v-model="selectedLevels"
        v-model:kinds="selectedKinds"
        v-model:price="selectedPrice"
      />
    </template>

    <QSectionForm title="Veja as opções que encontramos">
      <template #filter>
        <QFormFilterOffer
          v-model="selectedLevels"
          v-model:kinds="selectedKinds"
          v-model:price="selectedPrice"
        />
      </template>

      <template #order-by>
        <QFormOrderByOffer :order-by="orderBy" @change-order="setOrderBy" />
      </template>
    </QSectionForm>

    <div
      v-if="displayedOffers.length === 0"
      class="text-center text-zinc-500 py-10"
    >
      Não foram encontrados resultados para esta busca.
    </div>
    <QListCard
      v-else
      :cards="displayedOffers"
      class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full"
    >
      <template #default="{ card }">
        <QCardOffer
          :course-name="card.courseName"
          :rating="card.rating"
          :full-price="formatCurrency(card.fullPrice)"
          :offered-price="formatCurrency(card.offeredPrice)"
          :discount="card.discount"
          :kind="formatKind(card.kind)"
          :level="formatLevel(card.level)"
          :ies-logo="card.iesLogo"
          :ies-name="card.iesName"
        />
      </template>
    </QListCard>

    <template #footer>
      <QFooter />
    </template>
  </QLayout>
</template>
