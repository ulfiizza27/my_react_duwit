import Left from '@assets/img/img_left.jpeg';
import Right1 from '@assets/img/img_right1.jpeg';
import Right2 from '@assets/img/img_right3.jpeg';
import Right3 from '@assets/img/img_right2.jpeg';
import Right4 from '@assets/img/img_right4.jpeg';
import Sale from '@assets/img/sale.png';
import MarqueeComponent from './home-marquee';

export default function HomeLanding() {
  return (
    <div className="bg-[#ffff] mt-[90px]">  
      <div className="container mx-auto">
        <MarqueeComponent />
         <div className=" flex mt-[90px] mb-[100px]">
          <div className="relative h-[648px] w-[648px] object-cover">
            <p className="absolute left-0 bottom-4 transform -translate-y-full origin-bottom-left whitespace-nowrap mb-6" style={{ transform: 'rotate(-90deg)', fontSize: '34px', fontWeight: '400' }}>EXPLORE NEW AND POPULAR STYLES</p>
            <img src={Left.src} alt="image left"/>
          </div>
          <div className="flex flex-col justify-between object-cover h-[312px] w-[312px] mx-5">
            <img src={Right1.src} alt="image left" className='mb-5'/>
            <img src={Right2.src} alt="image left"/>
          </div>
          <div className="flex flex-col justify-between h-[312px] w-[312px] object-cover">
            <div style={{ position: 'relative' }}>
              <img src={Right3.src} alt="image left" className='mb-5' />
              <img src={Sale.src} alt="Sale" className='h-[24px] w-[52px]' style={{ position: 'absolute', left: 0, top: '22px', zIndex: 1 }}/>
            </div>
            <img src={Right4.src} alt="image left"/>
          </div>
        </div>
      </div>
    </div>  
  );
}