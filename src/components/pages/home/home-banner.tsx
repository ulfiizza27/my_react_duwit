import Banner from '@assets/img/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import LeftImage from '@assets/img/left.png';
import RightImage from '@assets/img/right.png';
import Button from '@global/Button';
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="min-h-[calc(100vh-155px)] flex items-center relative bg-[#F4F4F5] pt-[81px] pb-[60px]">
      <div className="grid grid-cols-2 container mx-auto">
        <div className="flex flex-col justify-center gap-[66px]">
          <div className="flex flex-col gap-[52px]">
            <h2 className="text-[74px] font-light">Collections</h2>
            <p className="text-[25px] leading-[55px] capitalize font-normal">You Can Explore And Shop Many Different Collection From Various Brands Here.</p>
          </div>
          <div className="flex justify-start">
            <Button>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faShoppingBag} className="mr-2 w-7 h-7" />
                <span>Shop Now</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image alt="banner" src={Banner} width={442} />
        </div>
        <div className="absolute bottom-[10%] left-0">
          <Image src={LeftImage} alt="illu" />
        </div>
        <div className="absolute bottom-[20%] right-0">
          <Image src={RightImage} alt="illu" width={150} />
        </div>
      </div>
    </section>
  );
}