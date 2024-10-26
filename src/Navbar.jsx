import React, { useState } from 'react';
import { IoSearchCircle } from "react-icons/io5";
import { FaShoppingCart, FaCaretDown, FaBars, FaTimes } from "react-icons/fa";


const ImageLogo = [
    {
        img: `${import.meta.env.BASE_URL}/gallery/logo_stgenetics.png`
    }
]


const Menu = [
    { id: 1, name: "Home", link: `${import.meta.env.BASE_URL}/#` },
    { id: 2, name: "Products", link: `${import.meta.env.BASE_URL}/productList` },
    { id: 3, name: "Dairy", link: "/#" },
    { id: 4, name: "Beef", link: "/#" },
    { id: 5, name: "Beef on dairy", link: "/#" },
    { id: 6, name: "Careers", link: "/#" },
];

const DropdownLinks = [
    { id: 1, name: "Dairy Contact Us", link: "/#" },
    { id: 2, name: "Dairy Team", link: "/#" },
    { id: 3, name: "Beef Contact Us", link: "/#" },
    { id: 4, name: "Beef Team", link: "/#" },
];

const Navbar = ({ handleOrderPopup, cartItems = 0 }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div className="shadow-md bg-white dark:text-white duration-200 relative z-40">
            <div className="bg-primary/20">
                <div className="container flex justify-between items-center py-2">
                    <div>
                        <a href={`${import.meta.env.BASE_URL}/`}>
                            <img src={ImageLogo[0].img} alt="Logo" className="w-38" />
                        </a>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-blue-900 px-2 py-1 focus:outline-none focus:border-1 focus:border-pink-600"
                            />
                            <IoSearchCircle className="text-blue-900 group-hover:text-pink-600 absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>
                        <button
                            onClick={handleOrderPopup}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-300">
                                Order
                            </span>
                            <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            {cartItems > 0 && (
                                <span className="bg-white text-primary font-semibold text-xs rounded-full px-2 py-1">
                                    {cartItems}
                                </span>
                            )}
                        </button>
                        <div className="sm:hidden block">
                            <button onClick={toggleMenu} className="text-2xl">
                                {menuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar for mobile */}
            <div
                className={`fixed top-0 left-0 h-full w-[250px] bg-white z-[9999] shadow-lg transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 sm:hidden`}
            >
                <ul className="flex flex-col items-start p-5">
                    {Menu.map((data) => (
                        <li key={data.id} className="mb-4">
                            <a href={data.link} className="text-black hover:text-primary duration-200">
                                {data.name}
                            </a>
                        </li>
                    ))}
                    <li className="cursor-pointer">
                        <div onClick={toggleDropdown} className="flex items-center justify-between w-full text-black hover:text-primary duration-200">
                            <span>Contact</span>
                            <FaCaretDown className={`ml-2 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {dropdownOpen && (
                            <div className="mt-2 pl-4">
                                <ul>
                                    {DropdownLinks.map((data) => (
                                        <li key={data.id} className="mb-2">
                                            <a href={data.link} className="text-black hover:text-primary duration-200">
                                                {data.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
            {/* lower Navbar for larger screens */}
            <div className={`hidden sm:flex justify-center hover:text-primary duration-200`}>
                <ul className="flex items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className="inline-block px-4 text-black hover:text-primary duration-200">
                                {data.name}
                            </a>
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2 text-black hover:text-primary duration-200">
                            Contact
                            <FaCaretDown className="ml-2" />
                        </a>
                        <div className="absolute hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="block w-full rounded-md p-2 hover:bg-primary/20">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
