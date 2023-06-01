import WinLogo from "../../assets/icon-LL-Windows-Logo-80x80.webp";
import DeviceLogo from "../../assets/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80.webp"
import Xbox from "../../assets/icon-LL-Xbox-Logo-80x80.webp";
const Promo = () => {
  return (
    <div className="promo grid grid-cols-2 grid-flow-row md:grid-cols-4 gap-8 m-8">
        <div className="item flex flex-col text-[#0067b8] underline cursor-pointer font-light items-center space-y-2 space-x-2">
            <img src={WinLogo} alt="" />
            <a href="#" className="font-bold">Choose your Microsoft 365</a>
        </div>
        <div className="item flex flex-col text-[#0067b8] underline cursor-pointer font-light items-center space-x-2">
            <img src={DeviceLogo} alt="" />
            <a href="#" className="font-bold">Explore Surface Devices</a>
        </div>
        <div className="item flex flex-col text-[#0067b8] underline cursor-pointer font-light items-center space-x-2">
            <img src={Xbox} alt="" />
            <a href="#" className="font-bold">Buy Xbox Games</a>
        </div>
        <div className="item flex flex-col text-[#0067b8] underline cursor-pointer font-light items-center space-x-2">
            <img src={WinLogo} alt="" />
            <a href="#" className="font-bold">Get Windows 11</a>
        </div>
    </div>
  )
}

export default Promo