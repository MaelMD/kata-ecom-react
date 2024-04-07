import React, { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    ProductService.getAllProducts()
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setFilterCategory(category);
  };

  const filteredProducts = products.filter(product => {
    return (searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
           (filterCategory === 'All' || product.category === filterCategory);
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen scale-110">
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" style={{ animationDelay: '-0.5s' }}></div>
        </div>
      </div>
    );
  }
  
  if (error) return <div className="flex justify-center items-center min-h-screen">Error: {error}</div>;

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="mb-6 flex items-center justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ml-4"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="product-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
