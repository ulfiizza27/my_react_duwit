import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from '@assets/img/logo.png';

const HomeBottom: React.FC = () => {
    return (
        <div className="container mx-auto mt-20">
            <div className="grid grid-cols-4 gap-8">
                {/* Kolom pertama */}
                <div>
                    <div className="flex items-center mb-[90px]">
                        <div className="flex flex-col">
                            <img src={Logo.src} alt="Logo" className="w-[180px] h-[34px]" />
                            <p className="text-sm text-gray-600 mb-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faFacebook} className="mr-9" style={{ width: '25px', height: '25px', color: 'black' }} />
                                <FontAwesomeIcon icon={faTwitter} className="mr-9" style={{ width: '25px', height: '25px', color: 'black' }} />
                                <FontAwesomeIcon icon={faLinkedin} className="mr-9" style={{ width: '25px', height: '25px', color: 'black' }} />
                                <FontAwesomeIcon icon={faInstagram} className="mr-9" style={{ width: '25px', height: '25px', color: 'black' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom kedua */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">CATALOG</h3>
                    <ul className="text-sm">
                        <li className="mb-2">Necklaces</li>
                        <li className="mb-2">Hoodies</li>
                        <li className="mb-2">Jewelry Box</li>
                        <li className="mb-2">T-Shirt</li>
                        <li>Jacket</li>
                    </ul>
                </div>

                {/* Kolom ketiga */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
                    <ul className="text-sm">
                        <li className="mb-2">Our Producers</li>
                        <li className="mb-2">Sitemap</li>
                        <li className="mb-2">FAQ</li>
                        <li className="mb-2">About Us</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Kolom keempat */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICES</h3>
                    <ul className="text-sm">
                        <li className="mb-2">Contact Us</li>
                        <li className="mb-2">Track Your Order</li>
                        <li className="mb-2">Product Care & Repair</li>
                        <li className="mb-2">Book An Appointment</li>
                        <li>Shipping & Return</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeBottom;
