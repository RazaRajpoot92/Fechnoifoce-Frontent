

const ProcessCard = ({item, id}) => {
  return (
            <div className={`flex items-center justify-center md:${(id+1)%2==0?"justify-start":"justify-end"} relative md:w-115 h-50`}>
                <div className='size-10 rounded-full border-4 border-yellow-300 bg-yellow-200 absolute top-3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 font-semibold  text-xl pr-0.75 z-10 flex justify-center items-center'>{id+1}</div>
                <div className=' transition-all duration-300 hover:bg-yellow-50 flex hover:scale-105 flex-col rounded-4xl justify-center gap-3 border-4 border-yellow-300  items-center p-2 w-40 h-45 bg-gray-50 shadow-lg shadow-gray-300 relative'>
                    <div className={`hidden md:block w-13 h-1 rounded-6xl bg-yellow-300 z-1 absolute top-1/2 ${(id+1)%2==0?"-right-14":"-left-14"}  `}></div>
                    {<item.icon color="gray" size={36} />}
                   
                    <p className='leading-4 text-sm text-center text-gray-700'>{item.title}</p>
                </div>
            </div>
  )
}

export default ProcessCard