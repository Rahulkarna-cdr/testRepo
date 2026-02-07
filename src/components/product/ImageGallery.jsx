import { useState } from 'react';

const ImageGallery = ({ images, alt = 'Product' }) => {
  const [selected, setSelected] = useState(0);
  const list = Array.isArray(images) && images.length ? images : [''];
  const mainImage = list[selected] || list[0];

  return (
    <div className="space-y-3">
      <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={mainImage}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {list.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {list.map((src, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelected(index)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                selected === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
