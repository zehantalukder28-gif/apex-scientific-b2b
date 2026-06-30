import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { products as allProducts } from '../../data/products.js';

const categoryMap = {
  'all': 'All Products',
  'instruments': 'Scientific Instruments',
  'chemicals': 'Laboratory Chemicals',
  'glassware': 'Glassware',
  'porcelain': 'Porcelain Ware',
  'accessories': 'Laboratory Accessories'
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('A-Z');

  const categoryName = categoryMap[categoryId] || 'Products';

  useEffect(() => {
    window.scrollTo(0, 0);
    let filtered = allProducts;
    
    if (categoryId !== 'all') {
      filtered = allProducts.filter(item => item.category === categoryName);
    }
    
    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (sortBy === 'A-Z') return nameA.localeCompare(nameB);
      if (sortBy === 'Z-A') return nameB.localeCompare(nameA);
      return 0;
    });

    setProducts(sorted);
  }, [categoryId, categoryName, sortBy]);

  return (
    <Layout>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="flex flex-col gap-2 mb-8">
          <Link to="/" className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-[0.2em] transition-colors mb-4 inline-block">&larr; Back to Catalog</Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {categoryName === 'All Products' ? 'Full Catalog' : categoryName}
          </h1>
          <p className="text-sm font-medium text-slate-500 max-w-xl mb-4">
            {categoryName === 'All Products' 
              ? 'Explore our complete range of industrial-grade scientific equipment and high-purity reagents.' 
              : `Explore our industrial-grade ${categoryName.toLowerCase()} designed for rigorous analytical and manufacturing applications.`}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-slate-200 rounded-sm p-4 mb-8">
          <div className="text-sm font-medium text-slate-600 mb-4 sm:mb-0">
            Showing {products.length} products
          </div>
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Sort By:</label>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-slate-200 rounded-sm px-3 py-1.5 text-sm text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="A-Z">Name: A - Z</option>
              <option value="Z-A">Name: Z - A</option>
            </select>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
            {products.map(item => (
              <Card 
                key={item.id} 
                data={{
                  ...item,
                  title: item.name // Mapping name to title for Card component
                }} 
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h3 className="text-xl font-bold text-slate-300">No products found in this category.</h3>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
