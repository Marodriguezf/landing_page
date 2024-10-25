import React, { useState, useEffect } from 'react';
import FilterSidebar from './FilterSidebar';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                const productList = data.slice(0, 12); 
                setProducts(productList);
            });
    }, []);

    return (
        <div className="flex flex-col lg:flex-row">
            <FilterSidebar />
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 flex-1">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow-lg p-4 bg-white transition duration-300 hover:bg-secondary group"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-48 object-contain mb-4"
                        />
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-white">{product.title}</h3>
                        <p className="text-gray-500 mb-4 group-hover:text-white">${product.price}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="bg-secondary text-white py-1 px-4 rounded-full mt-4 transition duration-300 group-hover:bg-white group-hover:text-primary font-semibold"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
