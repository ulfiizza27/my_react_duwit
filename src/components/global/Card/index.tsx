import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  ribbonName?: string;
  ribbonColor?: string;
  realPrice?: string;
  discount?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discounted = product.discount && parseFloat(product.discount.replace('Save ', '').replace('%', '')) > 0;

  return (
    <div className="bg-white shadow-md overflow-hidden relative">
      {product.ribbonName && (
        <div
          className="absolute top-6 left-0 px-2 py-1 text-white font-semibold"
          style={{ backgroundColor: product.ribbonColor }}
        >
          {product.ribbonName}
        </div>
      )}
      <img src={product.image} alt={product.name} className="w-[312px] h-[400px] object-cover" />
      <div className="p-4">
        <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
        <div className="flex justify-between">
          <p className="text-gray-500">{product.category}</p>
          {discounted ? (
            <div className="text-gray-500">
              <span className="mr-1">{product.realPrice}</span>
              <span className="text-red-500 line-through">{product.price}</span>
            </div>
          ) : (
            <p className="text-gray-700 font-semibold">{product.price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;