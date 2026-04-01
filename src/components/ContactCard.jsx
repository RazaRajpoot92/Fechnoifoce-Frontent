

const ContactCard = ({item}) => {
  return (
    <div className='group  text-sm transition-all duration-300 flex items-center justify-center rounded-2xl bg-white shadow-md gap-2 border border-yellow-400 py-6  w-78'>

  <div className='size-14 flex items-center justify-center rounded-full bg-yellow-300 group-hover:bg-yellow-300/0 border border-yellow-300 transition-all duration-300'>
    <item.icon size={24}  className='text-white group-hover:text-yellow-300' />
  </div>

  <div className='flex flex-col gap-1 text-gray-500'>
    {
        item.data.map((text)=>(
            <p key={text} className='text-sm'>{text}</p>
        ))
    }
  </div>

</div>
  )
}

export default ContactCard