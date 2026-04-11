
const contactImg = "https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/Banners/bannerImg3.png"

const ContactBanner = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 overflow-hidden pt-15 px-4 
    items-center justify-center bg-linear-to-br from-slate-900 to-blue-950'>

    
        <div data-aos='fade-right' className='flex flex-col items-center lg:items-start pt-5 gap-4 w-full lg:w-120 text-center lg:text-left'>
            <h1 className='text-yellow-400 font-bold text-3xl sm:text-4xl'>
                Get Expert Solutions Today
            </h1>

            <p className='text-gray-200 text-start px-10 md:px-20 lg:px-0 text-sm md:text-base leading-relaxed'>
                Connect with us for advanced automotive and packaging solutions tailored to your business needs. 
                From workshop equipment to industrial systems, our team is ready to help you choose the right solutions 
                to improve efficiency, performance, and reliability.
            </p>

            <a href='#form' className='bg-yellow-400 mt-2 hover:cursor-pointer text-white 
            hover:bg-yellow-400/0 transition-all duration-300 border border-yellow-400 
             px-10 py-2'>
                Request a Quote
            </a>
        </div>


        <div data-aos='fade-left' className='w-full max-w-sm lg:w-100 flex justify-center'>
            <img loading="lazy" src={contactImg} className='w-full lg:w-100 min-h-85' alt="" />
        </div>

    </div>
  )
}

export default ContactBanner