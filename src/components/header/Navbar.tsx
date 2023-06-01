import Logo from "../../assets/msLogo.png";
import {FaSearch} from "react-icons/fa"
// import {FaCartPlus} from "react-icons/fa"
import SearchIcon from "../../assets/search.svg";
import CartIcon from "../../assets/icons8-cart-50.png"

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center mx-4 h-[54px] md:mx-20 ">
      <div className="flex md:order-2 space-x-2 items-center">
        <div className="hamburger md:hidden cursor-pointer inline-block">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>
        <div className="md:hidden"><FaSearch/></div>
      </div>
      <div className="logo text-center md:order-1 flex  space-x-6">
        <div className=" w-[6.7rem]"><img src={Logo} alt="" /></div>
        <div className="features absolute w-fit inset-0 -translate-x-96 bg-[#f2f2f2] md:flex md:items-center md:mx-4 md:bg-transparent md:text-[0.8rem] md:translate-x-0 md:space-x-6 md:static">
          <div className="fitems hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Microsoft365</div>
          <div className="fitems hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Teams</div>
          <div className="fitems hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Windows</div>
          <div className="fitems hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Surface</div>
          <div className="fitems hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Xbox</div>
          <div className="fitems hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Support</div>
        </div>
      </div>
      <div className="cart md:order-3 flex justify-center items-center space-x-2">
        <div className="hidden md:flex space-x-2"> <span className="font-semibold cursor-pointer">Search</span> <img src={SearchIcon} alt="" className="w-4" /></div>
        <div className="flex space-x-2">
            <img src={CartIcon} alt="" className="w-4" />
             <span className="hover:underline hover:underline-offset-4 text-gray-900 cursor-pointer">Account</span> </div>
      </div>
    </div>
  );
};

export default Navbar;
