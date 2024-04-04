import React from 'react';
import Button from '@global/Button';
import Brand from '@assets/img/brand-banner.jpeg';
import Zara from '@assets/img/zara.png';   
import LogoZara from '@assets/img/logo_zara.png';
import Image from 'next/image';

export default function HomeCollection() {
    return (
        <div className="relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url("${Brand.src}")`, width: 'auto', height: '776px' }}>
            <div className="container mx-auto relative">
                <div className="grid grid-cols-2 gap-8">
                    <div className="col-span-1"></div> 
                    <div className="flex flex-col justify-center items-start col-span-1 relative z-0 self-end"> {/* Tambahkan self-end untuk menempatkan konten di sebelah kanan */}
                        <div className="relative w-32 h-32 mb-5">
                            <Image src={Zara.src} alt="Zara Logo" layout="fill" objectFit="contain" />
                        </div>
                        <p className="text-lg text-white mb-12" style={{ fontSize: '26px', lineHeight: '1.5' }}>
                            Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Armani boutique in Los Angeles.
                        </p>
                        <Button size="small">See Collection</Button>
                    </div>
                </div>
            </div>
            <div className="absolute top-12 right-0 z-10" style={{ width: '605px', height: '306px' }}>
                <Image src={LogoZara.src} alt="Zara Logo" layout="fill" />
            </div>
        </div>
    );
}
