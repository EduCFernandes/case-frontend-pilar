export const convertRatingToPercentage = (rating: number) => {
  if (rating >= 0 && rating <= 10) {
    const percentage = Math.round(rating * 10);
    return percentage;
  } else {
    throw new Error('Rating must be between 0 and 10');
  }
};

export const getBorderColor = (percentage: number) => {
  if (percentage >= 70) {
    return 'border-green-500';
  } else if (percentage >= 60) {
    return 'border-yellow-500';
  } else if (percentage >= 40) {
    return 'border-orange-500';
  } else {
    return 'border-red-500';
  }
};
