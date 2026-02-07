import { Link } from 'react-router-dom';

const CategoryCard = ({ category, variant = 'default' }) => {
  if (variant === 'minimal') {
    return (
      <Link to={`/category/${category.id}`} className="block text-center group">
        <div className="w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl" aria-hidden>{category.icon}</span>
        </div>
        <p className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
          {category.name}
        </p>
      </Link>
    );
  }

  return (
    <Link
      to={`/category/${category.id}`}
      className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg mb-1">{category.name}</h3>
          <p className="text-white/90 text-sm">
            {category.subcategories?.length ?? 0} subcategories
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
