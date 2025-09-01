export async function fetchOffers() {
  try {
    const response = await fetch("http://localhost:3000/offers");
    if (!response.ok) {
      throw new Error("Erro ao buscar ofertas");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
