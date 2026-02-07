const SkeletonLoader = ({ variant = 'card', className = '' }) => {
  const base = 'animate-pulse bg-gray-200 rounded';

  if (variant === 'card') {
    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
        <div className={`aspect-square ${base}`} />
        <div className="p-4 space-y-2">
          <div className={`h-3 ${base} w-3/4`} />
          <div className={`h-3 ${base} w-1/2`} />
          <div className={`h-4 ${base} w-1/3`} />
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className={`h-4 ${base} w-full`} />
        <div className={`h-4 ${base} w-5/6`} />
        <div className={`h-4 ${base} w-4/6`} />
      </div>
    );
  }

  if (variant === 'image') {
    return <div className={`aspect-square w-full ${base} ${className}`} />;
  }

  return <div className={`${base} ${className}`} />;
};

export default SkeletonLoader;
