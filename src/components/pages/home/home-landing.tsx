import LogoGraphic from '@assets/img/graphic.png';
import LogoSalva from '@assets/img/salva.png'; 
import LogoGolden from '@assets/img/golden.png';
import LogoFurniture from '@assets/img/furniture.png';
import LogoTravel from '@assets/img/travel.png';
import Left from '@assets/img/img_left.jpeg';
import Right1 from '@assets/img/img_right1.jpeg';
import Right2 from '@assets/img/img_right3.jpeg';
import Right3 from '@assets/img/img_right2.jpeg';
import Right4 from '@assets/img/img_right4.jpeg';
import Marquee from "react-fast-marquee";

export default function HomeLanding () {
    return (
        <div className="bg-[#ffff] mt-[90px] flex justify-center flex-col items-center">  
            <div style={{ width: '100%' }}>
                <Marquee speed={50}>
                    <img src={LogoGraphic.src} alt="Graphic Logo"/>
                    <img src={LogoSalva.src} alt="Salva Logo"/>
                    <img src={LogoGolden.src} alt="Golden Logo"/>
                    <img src={LogoFurniture.src} alt="Furniture Logo"/>
                    <img src={LogoTravel.src} alt="Travel Logo"/>
                </Marquee>
            </div>
            <div className="w-full flex justify-between mt-[90px] mb-[140px] px-48">
                <div className="relative">
                    <p className="absolute left-0 bottom-0 transform -translate-y-full origin-bottom-left whitespace-nowrap mb-6" style={{ transform: 'rotate(-90deg)', fontSize: '34px', fontWeight: '400' }}>EXPLORE NEW AND POPULAR STYLES</p>
                    <img src={Left.src} alt="image left" className='h-[648px] w-[648px]'/>
                </div>
                <div className="flex flex-col justify-between mx-3">
                    <img src={Right1.src} alt="image left" className='h-[312px] w-[312px] mx-3'/>
                    <img src={Right2.src} alt="image left" className='h-[312px] w-[312px] mx-3'/>
                </div>
                <div className="flex flex-col justify-between mx-3">
                    <img src={Right3.src} alt="image left" className='h-[312px] w-[312px] mx-3'/>
                    <img src={Right4.src} alt="image left" className='h-[312px] w-[312px] mx-3'/>
                </div>
            </div>
        </div>  
    );
}


