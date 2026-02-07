import { useState } from 'react';

const VariantSelector = ({ variants = [], selected = {}, onChange }) => {
  const [local, setLocal] = useState(selected);

  const handleSelect = (type, option) => {
    const next = { ...local, [type]: option };
    setLocal(next);
    onChange?.(next);
  };

  if (!variants?.length) return null;

  return (
    <div className="space-y-4">
      {variants.map((v) => (
        <div key={v.type}>
          <p className="text-sm font-medium text-gray-700 mb-2 capitalize">{v.type}</p>
          <div className="flex flex-wrap gap-2">
            {v.options.map((option) => {
              const isSelected = local[v.type] === option;
              const isColor = v.type.toLowerCase() === 'color';
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(v.type, option)}
                  className={`
                    px-4 py-2 rounded-lg border-2 text-sm font-medium transition-colors
                    ${isSelected ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 text-gray-700'}
                    ${isColor ? 'capitalize' : ''}
                  `}
                  style={isColor ? { backgroundColor: option.toLowerCase().includes(' ') ? undefined : option.toLowerCase() } : undefined}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariantSelector;
