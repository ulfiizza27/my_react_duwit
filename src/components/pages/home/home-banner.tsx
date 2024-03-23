import Banner from '@assets/img/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import LeftImage from '@assets/img/left.png';
import RightImage from '@assets/img/right.png';

export default function HomeBanner() {
  return (
    <div className="relative bg-[#F4F4F5] flex justify-between items-center pt-[81px] px-52 pb-[60px]">
      <img src={LeftImage.src} alt="left-image" className="absolute left-0 bottom-24 h-24 w-16" />
      <div className="text-black max-w-[calc(100% - 742px)] pe-[98px]">
        <h1 className="mb-[52px]" style={{ fontSize: '74px', fontWeight: '300' }}>Collections</h1>
        <p className="mb-[66px] font-medium" style={{ wordWrap: 'break-word', lineHeight: '3rem', fontSize: '22px' }}>
          You Can Explore And Shop Many Different Collections From Various Brands Here.
        </p>
        <button className="bg-[#1E2832] text-white py-3 px-4 text-lg flex items-center">
          <FontAwesomeIcon icon={faShoppingBag} className="mr-2 w-5 h-5" /> Shop Now
        </button>
      </div>   
      <img src={Banner.src} alt="banner" className="w-[442px] h-[562px]" />
      <img src={RightImage.src} alt="right-image" className="absolute right-0 h-52 w-36" />
    </div>
  );
}