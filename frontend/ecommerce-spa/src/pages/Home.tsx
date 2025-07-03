import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/Product';
import axios from 'axios';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <main className="p-4 max-w-7xl mx-auto ">
      <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
