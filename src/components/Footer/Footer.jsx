import React from 'react';
import Logo from "/src/Logo_stgenetics.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope
} from "react-icons/fa";

const LegalLinks = [
    {
        title: "Terms & Conditions",
        link: "/#",
    },
    {
        title: "Vendor Terms & Conditions",
        link: "/#",
    },
];

const Footer = () => {
    return (
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-5 pb-30 pt-5">
                {/* Company Details */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                        <img src={Logo} alt="STgenetics Logo" className="max-w-[200px]" />
                    </h1>
                    <p>
                        STgenetics® is making the world greener, more sustainable and profitable.
                    </p>
                </div>

                {/* Locations Section */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-primary">
                        Locations
                    </h1>
                    <ul className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <FaLocationArrow />
                                <p>22575 State HWY 6 South</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaLocationArrow />
                                <p>Navasota, TX 77868</p>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* Sales & Contact Section */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3  text-primary">
                        Sales & Contact
                    </h1>
                    <ul className="flex flex-col gap-3">
                        <div>
                            <h1 className='font-bold  text-primary'>US Dairy Sales</h1>
                            <div className="flex items-center gap-2">
                                <FaMobileAlt />
                                <p>+1(844)828-7849</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope />
                                <p>dairy@stgen.com</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold  text-primary'>US Beef Sales</h1>
                            <div className="flex items-center gap-2">
                                <FaMobileAlt />
                                <p>+1(866)589-1708</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope />
                                <p>beef@stgen.com</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold  text-primary'>Customer Service and International Sales</h1>
                            <div className="flex items-center gap-2">
                                <FaMobileAlt />
                                <p>+1(920)921-6029</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMobileAlt />
                                <p>+1(800)525-2953</p>
                            </div>
                        </div>
                    </ul>
                </div>

                {/* Legal Links Section */}
                <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-primary">
                        Legal
                    </h1>
                    <ul className="flex flex-col gap-3">
                        {LegalLinks.map((link) => (
                            <li
                                className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-700"
                                key={link.title}
                            >
                                <a href={link.link} target="_blank" rel="noopener noreferrer">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center mt-6">
                    <div className="flex items-center gap-3">
                        <a href="#">
                            <FaInstagram className="text-3xl " />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
