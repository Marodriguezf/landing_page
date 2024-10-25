import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const SalesForm = ({ orderPopup, setOrderPopup, cart, totalPrice, clearCart }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        paymentMethod: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            
            setFormData({
                name: '',
                email: '',
                address: '',
                phone: '',
                paymentMethod: '',
            });
            setErrorMessage('');
            setShowSuccessMessage(true); 

         
            clearCart(); 

           
            setTimeout(() => {
                setShowSuccessMessage(false);
                setOrderPopup(false); 
            }, 2000);
        }
    };

    const validateForm = () => {
        const { name, email, address, phone, paymentMethod } = formData;
        if (!name || !email || !address || !phone || !paymentMethod) {
            setErrorMessage('Please fill in all required fields');
            return false;
        }

        const invalidPrice = cart.some(
            (product) => product.price < product.originalPrice * 0.9
        );
        if (invalidPrice) {
            setErrorMessage('Price cannot be less than 90% of the original price.');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    if (!orderPopup) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
                <IoCloseOutline
                    className="absolute top-2 right-2 text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                />
                <h2 className="text-2xl font-bold mb-4">Sales Form</h2>
                
                {errorMessage && (
                    <div className="text-red-500 mb-4">{errorMessage}</div>
                )}

                {showSuccessMessage && (
                    <div className="text-green-500 mb-4">Order placed successfully!</div>
                )}
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`border p-2 rounded w-full ${!formData.name && errorMessage ? 'border-red-500' : 'border-gray-300'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`border p-2 rounded w-full ${!formData.email && errorMessage ? 'border-red-500' : 'border-gray-300'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block mb-2">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className={`border p-2 rounded w-full ${!formData.address && errorMessage ? 'border-red-500' : 'border-gray-300'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2">Phone</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`border p-2 rounded w-full ${!formData.phone && errorMessage ? 'border-red-500' : 'border-gray-300'}`}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="paymentMethod" className="block mb-2">Payment Method</label>
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            className={`border p-2 rounded w-full ${!formData.paymentMethod && errorMessage ? 'border-red-500' : 'border-gray-300'}`}
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Cash">Cash</option>
                        </select>
                    </div>
                    <div className="text-lg font-bold mb-4">
                        Total Products: {cart.length}
                    </div>
                    <div className="text-lg font-bold mb-4">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                    <button
                        type="submit"
                        className="bg-secondary text-white py-2 px-4 rounded-full w-full"
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SalesForm;
