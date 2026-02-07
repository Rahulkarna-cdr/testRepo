import RatingStars from '../common/RatingStars';
import { getReviewsForProduct } from '../../data/reviews';

const ReviewsList = ({ productId }) => {
  const reviews = getReviewsForProduct(productId);

  if (!reviews.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No reviews yet. Be the first to review!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
      <ul className="divide-y divide-gray-200 space-y-4">
        {reviews.map((review) => (
          <li key={review.id} className="py-4 first:pt-0">
            <div className="flex items-center gap-2 mb-2">
              <RatingStars rating={review.rating} size="sm" showNumber />
              {review.verified && (
                <span className="text-xs text-emerald-600 font-medium">Verified Purchase</span>
              )}
              <span className="text-xs text-gray-500 ml-auto">{review.date}</span>
            </div>
            <p className="font-medium text-gray-900 mb-1">{review.title}</p>
            <p className="text-sm text-gray-600">{review.comment}</p>
            <p className="text-xs text-gray-500 mt-2">
              — {review.userName}
              {review.helpful > 0 && (
                <span className="ml-2">· {review.helpful} people found this helpful</span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
