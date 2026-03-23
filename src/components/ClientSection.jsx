import logoData from "../data/logoImgData"

const ClientSection = () => {
  return (
    <div className=" flex justify-center w-full bg-gray-100">
    <div className='w-full max-w-6xl flex flex-col lg:flex-row bg-gray-100 items-center'>

      {/* LEFT SECTION */}
      <div className='flex flex-col items-center justify-center 
      w-full lg:w-[40%] px-4 sm:px-6 
      rounded-none lg:rounded-r-[40px] lg:rounded-l-[40px] 
      bg-gradient-to-r from-yellow-300 to-yellow-200 
      min-h-auto lg:min-h-[400px] py-10'>

        <div className='flex flex-col items-center justify-center gap-5 max-w-md'>
          <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-700 text-center'>
            Our Key Clients
          </h1>

          <p className='text-center text-gray-500 leading-6 text-sm sm:text-base'>
            Driven by trust, we partner with organizations to deliver reliable,
            high-quality solutions that fuel growth and innovation.
          </p>
        </div>

        <button className='bg-gradient-to-r from-violet-500 to-purple-600 
        text-white px-8 sm:px-12 py-2.5 rounded-md 
        shadow-md hover:shadow-lg hover:cursor-pointer
        hover:from-violet-600 hover:to-purple-700 
        transition-all duration-300 active:scale-95 mt-8'>
          Become a Client
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className='w-full px-4 sm:px-6 py-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4'>

          {logoData.map((item) => (
            <div
              key={item.id}
              className='h-24 group hover:scale-105 duration-300 transition-all sm:h-28 w-full p-1.5 bg-gray-50 shadow-lg 
              relative overflow-hidden shadow-gray-300 
              flex items-center justify-center rounded-sm border border-gray-200'
            >
              <img
                src={item.imgUrl}
                alt=""
                className={`${item.id == 11 ? 'w-28 sm:w-36' : 'w-16 sm:w-20'} h-16 object-contain`}
              />

              <div className='w-24 h-24 group-hover:size-75 group-hover:opacity-50 duration-500 transition-all bg-yellow-300/70 absolute -bottom-16 -left-16 rounded-full'></div>
            </div>
          ))}

        </div>
      </div>

    </div>
    </div>
  )
}

export default ClientSection