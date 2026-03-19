import BackDesign from "./BackDesign";
import carImg from "../assets/car-robotic.png";

const Hero = () => {
  return (
    <section className="pt-14 flex justify-center relative overflow-hidden min-h-screen md:h-[80vh] lg:h-screen 2xl:h-[55vh] bg-gray-900 text-white">
      
      {/* Background Design */}
      <BackDesign />

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around w-full max-w-6xl relative px-4 md:px-6 gap-8">
        
        {/* Text Content */}
        <div className="flex flex-col gap-5 md:gap-6 md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            Techno I <span className="text-yellow-500">Force</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-7 tracking-wide px-2 sm:px-0">
            Delivering reliable <span className="text-yellow-500">electromechanical</span> and <span className="text-yellow-500">packaging</span> solutions that keep industries
            moving. Our expert engineers ensure efficient installation,
            maintenance, and optimization of machinery, helping your operations
            perform better, faster, and smarter every single day.
          </p>

          <button className="mt-5 text-lg bg-yellow-500 hover:bg-yellow-400 cursor-pointer w-36 sm:w-44 lg:w-56 py-2 rounded-md font-semibold active:scale-105 transition-all duration-300">
            Get Free Quote
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={carImg}
            alt="Robotic Car"
            className="w-72 sm:w-80 md:w-96 lg:w-[520px] lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;