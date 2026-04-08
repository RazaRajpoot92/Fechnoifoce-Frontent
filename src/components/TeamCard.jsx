

const TeamCard = ({item}) => {
  return (
    <div className='group relative w-64 h-84 bg-white rounded-xl 
    shadow-md hover:shadow-xl 
    transition-all duration-300 
    flex flex-col items-center justify-between 
    p-5 text-center overflow-hidden'>

      {/* Overlay (premium) */}
      <div className='absolute top-0 left-0 w-full h-2 
      bg-linear-to-b from-yellow-300/60 to-yellow-300/30 
      backdrop-blur-sm
      transition-all duration-500 ease-out 
      group-hover:h-full group-hover:opacity-80 z-0'>
      </div>

      {/* Image */}
      <div className='relative blob-pick z-10 w-38 h-38 rounded-full overflow-hidden 
      border-4 border-yellow-300 
      shadow-md transition-all duration-300'>
        <img src={item.dp} alt="" className=' object-cover' />
      </div>

      {/* Info */}
      <div className='relative z-10 mt-4'>
        <h2 className='text-gray-800 font-semibold text-xl'>
          {item.title}
        </h2>
        <p className='text-gray-500 text-sm'>
          {item.role}
        </p>
      </div>

      {/* Divider */}
      <div className='relative z-10 w-10 h-0.5 bg-yellow-400 my-2'></div>

      {/* Icons */}
      <div className='relative z-10 flex gap-4 items-center mt-2'>
        <div className='p-2.5 rounded-full bg-gray-200 
        hover:bg-yellow-400 hover:text-white 
        hover:scale-105
        transition cursor-pointer'>
          <a href={`mailto:${item.emailAdd}`}>
            <item.mail size={18} />
          </a>
        </div>

        <div className='p-2.5 rounded-full bg-gray-200 
        hover:bg-yellow-400 hover:text-white 
        hover:scale-105
        transition cursor-pointer'>
          <a href={`tel:${item.phoneNum}`} >
            <item.phone size={18}/>
          </a>
        </div>

        <div className='p-2 rounded-full bg-gray-200 
        hover:bg-yellow-400 hover:scale-105 transition cursor-pointer'>
          <a href={`${item.linkedUrl}`} target="_blank">
            <img src={item.linked} className='size-6' alt="" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default TeamCard