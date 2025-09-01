export function formatKind(kind: string): string {
  return kind === "presencial" ? "Presencial" : "EaD";
}

export function formatLevel(level: string): string {
  if (level === "bacharelado") return "Graduação (bacharelado)";
  if (level === "tecnologo") return "Graduação (tecnólogo)";
  if (level === "licenciatura") return "Graduação (licenciatura)";
  return level;
}

export function formatCurrency(
  value: number | string,
  locale = "pt-BR",
  currency = "BRL"
): string {
  return Number(value).toLocaleString(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
}

export function calculateDiscount(
  fullPrice: number | string,
  offeredPrice: number | string
): number {
  const full = Number(fullPrice);
  const offer = Number(offeredPrice);
  if (!full || !offer) return 0;
  return Math.round(((full - offer) / full) * 100);
}
