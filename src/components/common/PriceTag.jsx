const PriceTag = ({ price, originalPrice, discount, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl'
  };
  const s = sizeClasses[size] || sizeClasses.md;
  const hasDiscount = originalPrice != null && originalPrice > price;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className={`${s} font-bold text-gray-900`}>
        ${Number(price).toFixed(2)}
      </span>
      {hasDiscount && (
        <>
          <span className={`${s} text-gray-400 line-through`}>
            ${Number(originalPrice).toFixed(2)}
          </span>
          {discount != null && discount > 0 && (
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              Save {discount}%
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default PriceTag;
