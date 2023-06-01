import Bgheader from "../../assets/bgheader.avif";
import BgPhoneHeader from "../../assets/bgPhoneHeader.avif";

const Slider = () => {
  return (
    <div className="slider w-screen h-4/5 flex flex-col-reverse justify-center items-center md:flex-row">
      <div className="left p-4 md:absolute md:w-2/5 md:left-20 flex flex-col justify-center">
        <h1 className="font-bold text-2xl">Microsoft 365</h1>
        <p>
          Turn your ideas into reality, stay safer online and off, and focus on
          what matters most with Microsoft 365 apps
        </p>
        <p className=" w-fit my-4"> <span className="text-white text-center cursor-pointer font-semibold bg-[#0067b8] p-2 px-3 mr-4 rounded-sm">For one person </span> 
        <span className="cursor-pointer font-semibold">For upto six people </span> </p>
      </div>
      <div className="right">
        <img src={BgPhoneHeader} alt="" className="object-fill w-screen md:hidden h-1/3" />
        <img src={Bgheader} alt="" className="object-fill w-screen hidden md:block h-2/3" />
      </div>
    </div>
  );
};

export default Slider;
