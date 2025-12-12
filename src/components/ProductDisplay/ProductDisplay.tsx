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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-blue-600 mt-2">
          ${product.price.toFixed(2)}
        </p>
        {showDescription && (
          <p className="text-gray-600 mt-2">{product.description}</p>
        )}
        {showStockStatus && (
          <p className="mt-2 text-green-600">
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
        )}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
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
