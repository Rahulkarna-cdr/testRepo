const QuantitySelector = ({ value, min = 1, max = 99, onChange }) => {
  const handleChange = (delta) => {
    const next = Math.min(max, Math.max(min, value + delta));
    if (next !== value) onChange?.(next);
  };

  return (
    <div className="inline-flex items-center border border-gray-300 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => handleChange(-1)}
        disabled={value <= min}
        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-gray-700 font-medium"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="px-4 py-1.5 border-x border-gray-300 text-sm font-medium text-gray-900 min-w-[2.5rem] text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={() => handleChange(1)}
        disabled={value >= max}
        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-gray-700 font-medium"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
