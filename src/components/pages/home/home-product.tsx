import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '../../global/Card';
import Product1 from '@assets/img/product1.png';
import Product2 from '@assets/img/product2.png';
import Product3 from '@assets/img/product3.png';
import Product4 from '@assets/img/product4.png';
import Product5 from '@assets/img/product5.png';
import Product6 from '@assets/img/product6.png';
import Product7 from '@assets/img/product7.png';
import Product8 from '@assets/img/product8.png';

const products = [
  { id: 1, name: 'Adicolor Classisc Joggers', category: 'Dress', price: '$63.85', realPrice: '$63.85', image: Product1.src },
  { id: 2, name: 'Nike Sportswear Futura Luxe', category: 'Bag', price: '$130.00', realPrice: '$130.00', image: Product2.src },
  { id: 3, name: 'Geometric Print Scarf', category: 'Scarf', price: '$53.00', realPrice: '$53.00', image: Product3.src },
  { id: 4, name: 'Yellow Reserverd Hoodie', category: 'Dress', price: '$69.99', realPrice: '$55.00', image: Product4.src, ribbonName: 'SALE', ribbonColor: '#1E2832', discount: 'Save 20%' },
  { id: 5, name: 'Basic Dress Green', category: 'Dress', price: '$236.00', realPrice: '$236.00', image: Product5.src, ribbonName: 'HOT', ribbonColor: '#FF6F61' },
  { id: 6, name: 'Nike Air Zoom Pegasus', category: 'Shoe', price: '$239.99', realPrice: '$198.00', image: Product6.src, ribbonName: 'SALE', ribbonColor: '#1E2832', discount: 'Save 17%' },
  { id: 7, name: 'Nike Repel Miler', category: 'Dress', price: '$120.50', realPrice: '$120.50', image: Product7.src },
  { id: 8, name: 'Nike Sportswear Futura Luxe', category: 'Glasses', price: '$160.00', realPrice: '$160.00', image: Product8.src },  
];

export default function HomeProduct() {
  return (
    <div className="bg-[#ffff] pt-10 px-10 pb-36">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center">Or Subscribe To The Newsletter</h2>
        <div className="flex justify-between items-center mb-[35px]">
          <div>
            <button className="bg-transparent py-2 px-4 mr-4 font-semibold">All products</button>
            <button className="bg-transparent py-2 px-4 mr-4">T-Shirt</button>
            <button className="bg-transparent py-2 px-4 mr-4">Hoodies</button>
            <button className="bg-transparent py-2 px-4">Jacket</button>
          </div>
          <button className="bg-[#1E2832] text-white py-2 px-4 flex items-center min-w-[100px] text-base">
            <FontAwesomeIcon icon={faFilter} className="mr-2" />
            Filter
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}