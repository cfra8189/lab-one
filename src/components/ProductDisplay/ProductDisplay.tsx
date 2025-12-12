// ProductDisplay component implementation will go here
import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="bg-white/70 rounded-lg shadow-md overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-gray-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
        {showDescription && (
          <p className="text-gray-600 mt-2">{product.description}</p>
        )}
        {showStockStatus && (
          <p className="mt-2 text-green-800">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          
        )}
        <p className='text-gray-800'>YOU WANT IT, WE GOT IT</p>
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors"
          >
            Add to Cart
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default ProductDisplay;
