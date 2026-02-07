import { categories } from '../../data/categories';
import CategoryCard from '../common/CategoryCard';

const FeaturedCategories = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {categories.slice(0, 8).map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
