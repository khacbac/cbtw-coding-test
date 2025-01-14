export const validateRating = (rating: string) => {
  try {
    const ratingNumber = parseInt(rating);
    return ratingNumber >= 1 && ratingNumber <= 5;
  } catch (error) {
    return false;
  }
};
