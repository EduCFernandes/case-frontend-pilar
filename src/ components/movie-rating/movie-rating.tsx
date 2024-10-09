import { cn } from '@/helpers/cn';
import { convertRatingToPercentage, getBorderColor } from '@/helpers/rating';
import { HTMLAttributes } from 'react';

interface MovieRatingProps extends HTMLAttributes<HTMLDivElement> {
  rating: number;
}

function MovieRating({ rating, className }: MovieRatingProps) {
  return (
    <div
      data-testid="test-movie-rating"
      className={cn(
        'border-2 rounded-full flex items-center justify-center text-xs text-white bg-slate-700 p-2 h-10 w-10 min-h-10 max-h-10 min-w-10 max-w-10',
        getBorderColor(convertRatingToPercentage(rating)),
        className
      )}
    >
      {convertRatingToPercentage(rating)}%
    </div>
  );
}

export default MovieRating;
