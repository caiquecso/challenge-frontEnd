import { Offer } from "../types/offer";

export async function fetchOffers(): Promise<Offer[]> {
  try {
    const response = await fetch("http://localhost:3000/offers");
    if (!response.ok) {
      throw new Error("Erro ao buscar ofertas");
    }
    return (await response.json()) as Offer[];
  } catch (error) {
    console.error(error);
    return [];
  }
}
