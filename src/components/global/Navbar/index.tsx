import Logo from '@assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

interface INavbar {}

export default function Navbar({ }: INavbar) {
  return (
    <div className="bg-[#F4F4F5]">
      <nav className="container mx-auto text-black pt-[31px] px-20">
          <div className="flex justify-between items-center mb-[30px]">
            <div>
              <button className="focus:outline-none">
                <FontAwesomeIcon icon={faSearch} className="h-[25px] w-[25px]" />
              </button>
            </div>
            <div>
              <img src={Logo.src} alt="logo" className="h-[34px] w-[180px]" />
            </div>
            <div className="flex space-x-[22px]">
              <button className="flex items-center focus:outline-none">
                <FontAwesomeIcon icon={faUser} className="h-[25px] w-[25px]" />
                <span className="ml-2 text-lg">Account</span>
              </button>
              <button className="flex items-center focus:outline-none">
                <FontAwesomeIcon icon={faShoppingBag} className="h-[25px] w-[25px]" />
                <span className="ml-2 text-lg">Shopping</span>
              </button>
            </div>
          </div>
          <hr />

          <div className="flex justify-between mt-[30px] text-gray-900 gap-5 text-base">
            <Link href="/jewelry-accessories">Jewelry & Accessories</Link>
            <Link href="/clothing-shoes">Clothing & Shoes</Link>
            <Link href="/home-living">Home & Living</Link>
            <Link href="/wedding-party">Wedding & Party</Link>
            <Link href="/toys-entertainment">Toys & Entertainment</Link>
            <Link href="/art-collectibles">Art & Collectibles</Link>
            <Link href="/craft-supplies-tools">Craft Supplies & Tools</Link>
          </div>
        </nav>
    </div>
  );
};
