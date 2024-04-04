import React from 'react';
import Image from 'next/image';
import Card1 from '@assets/img/card1.png';
import Card2 from '@assets/img/card2.png';
import Card3 from '@assets/img/card3.png';
import Card4 from '@assets/img/card4.png';
import Card5 from '@assets/img/card5.png';
import Card6 from '@assets/img/card6.png';

export default function HomeFollow() {
    return (
        <div className="bg-[#F4F4F5] py-20">
            <h2 className="text-5xl text-center mb-12 font-medium">Follow products and discounts on Instagram</h2>
            <div className="flex justify-center mb-12">
                <div className="flex gap-4">
                    <div className="w-[200px] h-[200px] relative">
                        <Image src={Card1} alt="Card 1" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-[200px] h-[200px] relative">
                        <Image src={Card2} alt="Card 2" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-[200px] h-[200px] relative">
                        <Image src={Card3} alt="Card 3" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-[200px] h-[200px] relative">
                        <Image src={Card4} alt="Card 4" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-[200px] h-[200px] relative">
                        <Image src={Card5} alt="Card 5" layout="fill" objectFit="cover" />
                    </div>
                    <div className="w-[200px] h-[200px] relative">
                        <Image src={Card6} alt="Card 6" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
            <h2 className="text-5xl text-center mb-12 font-medium">Or subscribe to the newsletter</h2>
            <div className="flex justify-center items-center mb-12">
                <input type="text" placeholder="Email Address..." className="border-b-2 border-black outline-none mr-4"/>
                <button className="border-b-2 border-black">SUBMIT</button>
            </div>
        </div>
    );
}