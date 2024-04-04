import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import PaymentImage from '@assets/img/payment.png';

export default function Footer() {
    return (
        <footer className="bg-[#1E2832] py-8">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-gray-400">&copy; 2022 Coral, Inc.</div>
                <img src={PaymentImage.src} alt="Payment" className="mx-auto w-[283px] h-[24px]" />
                <div className="text-gray-400 flex items-center">
                    Scroll to top
                    <FontAwesomeIcon icon={faArrowUp} className="ml-2 h-[16px] w-[16px]" />
                </div>
            </div>
        </footer>
    );
}