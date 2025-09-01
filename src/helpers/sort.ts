import type { Offer } from "../types/offer";

export function sortOffers(
  offers: Offer[],
  orderBy: "course-name" | "price" | "rating"
) {
  return [...offers].sort((a, b) => {
    if (orderBy === "course-name") {
      return a.courseName.localeCompare(b.courseName);
    }
    if (orderBy === "price") {
      return Number(a.offeredPrice) - Number(b.offeredPrice);
    }
    if (orderBy === "rating") {
      return Number(b.rating) - Number(a.rating);
    }
    return 0;
  });
}
