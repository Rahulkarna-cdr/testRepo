import HeroCarousel from '../components/home/HeroCarousel';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FlashDeals from '../components/home/FlashDeals';
import TrendingProducts from '../components/home/TrendingProducts';
import RecentlyViewed from '../components/home/RecentlyViewed';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroCarousel />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <FeaturedCategories />
        <FlashDeals />
        <section className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <TrendingProducts />
        </section>
        <RecentlyViewed />
        <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated!</h2>
            <p className="mb-6 text-white/90">Subscribe for offers and new arrivals.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button
                type="button"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
