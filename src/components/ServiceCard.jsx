const ServiceCard = ({item}) => {
    
  return (

    <div className=" px-2 flex items-center  flex-col justify-center overflow-hidden shadow-md hover:bg-yellow-200 hover:scale-105 transition-all duration-300 bg-yellow-100 text-center border border-gray-100 relative h-70 w-75 sm:w-60  rounded-4xl">
        <div className='absolute size-70 bg-yellow-50 -bottom-40 rounded-full -left-5 '></div>
        <img src={item.imgUrl} className=" bg-cover bg-center opacity-85 blob h-40 w-50 " />
        <h2 className='text-gray-700  z-50 font-semibold mt-3 text-lg leading-5'>{item.title}</h2>
    </div>
  )
}

export default ServiceCard