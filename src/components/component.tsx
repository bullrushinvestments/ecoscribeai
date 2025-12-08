import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const BusinessSpecification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('An error occurred while loading the product data.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isTabletOrMobile })}>
      <h2 className="text-xl font-bold mb-4">Business Specification</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert" aria-live="assertive">
          {error}
        </div>
      ) : (
        <ul className="list-disc pl-5">
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              <h3
                tabIndex={0}
                role="button"
                aria-expanded="false"
                onClick={() => console.log(`View details for ${product.name}`)}
                onKeyDown={(e) => e.key === 'Enter' && console.log(`View details for ${product.name}`)}
                className="cursor-pointer hover:underline"
              >
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex items-center">
                <span className="mr-2 font-bold">${product.price.toFixed(2)}</span>
                <img src={product.image} alt={`Product image for ${product.name}`} className="w-16 h-16 object-cover" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const BusinessSpecification: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('An error occurred while loading the product data.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', { 'bg-gray-100': !isTabletOrMobile })}>
      <h2 className="text-xl font-bold mb-4">Business Specification</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert" aria-live="assertive">
          {error}
        </div>
      ) : (
        <ul className="list-disc pl-5">
          {products.map((product) => (
            <li key={product.id} className="mb-2">
              <h3
                tabIndex={0}
                role="button"
                aria-expanded="false"
                onClick={() => console.log(`View details for ${product.name}`)}
                onKeyDown={(e) => e.key === 'Enter' && console.log(`View details for ${product.name}`)}
                className="cursor-pointer hover:underline"
              >
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="flex items-center">
                <span className="mr-2 font-bold">${product.price.toFixed(2)}</span>
                <img src={product.image} alt={`Product image for ${product.name}`} className="w-16 h-16 object-cover" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BusinessSpecification;