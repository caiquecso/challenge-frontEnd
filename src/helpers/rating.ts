export function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push({ half: false, empty: false });
    } else if (i === fullStars && hasHalf) {
      stars.push({ half: true, empty: false });
    } else {
      stars.push({ half: false, empty: true });
    }
  }
  return stars;
}
