import BackDesign from "./BackDesign";
import carImg from "../assets/car-robotic.png";
import BottomDivider from "../components/BottomDivider"

const Hero = () => {
  return (
    <section class=" pt-14 flex justify-center relative overflow-hidden min-h-screen md:h-[80vh] lg:h-screen 2xl:h-[55vh] bg-gray-900  text-white">
      <BackDesign />
  

      <div class=" max-w-350 relative justify-center flex flex-col md:flex-row w-full md:justify-around items-center">
        <div className="items-center md:pl-3 md:items-start md:w-1/2 pl-2 flex flex-col gap-5">
          <h1 class="  mb-2 text-2xl md:text-3xl lg:text-5xl font-bold">
            Techno I <span className="text-blue-500">Force</span>
          </h1>
          <p className=" px-2 sm:p-0 text-sm sm:text-[16px] text-gray-300 leading-7 tracking-wider ">
            Delivering reliable <span className="text-blue-500">electromechanical</span> and <span className="text-blue-500">packaging</span>  solutions that keep industries
            moving. Our expert engineers ensure efficient installation,
            maintenance, and optimization of machinery, helping your operations
            perform better, faster, and smarter every single day.
          </p>
          <button className=" mt-5  text-lg bg-blue-500 hover:cursor-pointer w-40 sm:w-50 lg:w-70 hover:bg-blue-400 py-2 rounded-xs font-semibold active:scale-105 transition-all duration-300">
            Get Free Quote
          </button>
        </div>

        <img
          className=" w-120 md:w-110 lg:w-130 lg:h-110 "
          src={carImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
