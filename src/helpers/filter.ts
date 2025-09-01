import type { Offer } from "../types/offer";
import { normalize } from "./string";

export function filterOffers(
  offers: Offer[],
  searchTerm: string,
  selectedLevels: string[],
  selectedKinds: string[],
  selectedPrice: number
): Offer[] {
  return offers.filter((offer) => {
    const matchesSearch =
      !searchTerm ||
      normalize(offer.courseName).includes(normalize(searchTerm)) ||
      normalize(offer.iesName).includes(normalize(searchTerm));
    const matchesLevel =
      selectedLevels.length === 0 || selectedLevels.includes(offer.level);
    const matchesKind =
      selectedKinds.length === 0 || selectedKinds.includes(offer.kind);
    const matchesPrice =
      !selectedPrice || Number(offer.offeredPrice) <= selectedPrice;
    return matchesSearch && matchesLevel && matchesKind && matchesPrice;
  });
}
