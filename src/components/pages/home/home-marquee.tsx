import Marquee from "react-fast-marquee";
import LogoGraphic from '@assets/img/graphic.png';
import LogoSalva from '@assets/img/salva.png'; 
import LogoGolden from '@assets/img/golden.png';
import LogoFurniture from '@assets/img/furniture.png';
import LogoTravel from '@assets/img/travel.png';

export default function MarqueeComponent() {
  return (
    <div>
      <Marquee speed={50}>
        <div className="w-[400px]">
            <img src={LogoGraphic.src} alt="Graphic Logo"/>
        </div>
        <div className="w-[400px]">
            <img src={LogoSalva.src} alt="Salva Logo"/>
        </div>
        <div className="w-[400px]">
            <img src={LogoGolden.src} alt="Golden Logo"/>
        </div>
        <div className="w-[400px]">
            <img src={LogoFurniture.src} alt="Furniture Logo"/>
        </div>
        <div className="w-[400px]">
            <img src={LogoTravel.src} alt="Travel Logo"/>
        </div> 
      </Marquee>
    </div>
    
  );
}
