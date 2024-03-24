import Left from '@assets/img/img_left.jpeg';
import Right1 from '@assets/img/img_right1.jpeg';
import Right2 from '@assets/img/img_right3.jpeg';
import Right3 from '@assets/img/img_right2.jpeg';
import Right4 from '@assets/img/img_right4.jpeg';

import Sale from '@assets/img/sale.png';
import MarqueeComponent from './home-marquee';

export default function HomeLanding() {
  return (
    <div className="bg-[#ffff] mt-[90px] flex justify-center flex-col items-center">  
      <div className="container mx-auto">
        <MarqueeComponent />
        <div className="w-full flex justify-between mt-[90px] mb-[140px] px-44">
          <div className="relative">
            <p className="absolute left-0 bottom-0 transform -translate-y-full origin-bottom-left whitespace-nowrap mb-6" style={{ transform: 'rotate(-90deg)', fontSize: '34px', fontWeight: '400' }}>EXPLORE NEW AND POPULAR STYLES</p>
            <img src={Left.src} alt="image left" className='h-[648px] w-[648px] object-cover'/>
          </div>
          <div className="flex flex-col justify-between mx-3">
            <img src={Right1.src} alt="image left" className='h-[312px] w-[312px] object-cover mx-3'/>
            <img src={Right2.src} alt="image left" className='h-[312px] w-[312px] object-cover mx-3'/>
          </div>
          <div className="flex flex-col justify-between mx-3">
            <div style={{ position: 'relative' }}>
              <img src={Right3.src} alt="image left" className='h-[312px] w-[312px] object-cover mx-3'/>
              <img src={Sale.src} alt="Sale" className='h-[24px] w-[52px] mx-3' style={{ position: 'absolute', left: 0, top: '22px', zIndex: 1 }}/>
            </div>
            <img src={Right4.src} alt="image left" className='h-[312px] w-[312px] object-cover mx-3'/>
          </div>
        </div>
      </div>
    </div>  
  );
}