import TeamCard from "./TeamCard"

import { Mail, PhoneCall } from "lucide-react"
import linkedinLogo from "../assets/linkedLogo.png"

const teamData = [
  {
    id:1,
    title:"M. Tahir Karim",
    role:"Founder & CEO",
    dp:"https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/Team/img3.jpeg",
    phone: PhoneCall,
    phoneNum:"+971564840532",
    emailAdd:"techno.iforce@gmail.com",
    mail: Mail,
    linked:linkedinLogo,
    linkedUrl:"https://www.linkedin.com/"
  },
    {
    id:2,
    title:"M. Tallat Karim",
    role:"Founder & Partner",
    dp:"https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/Team/img2.jpg",
    phone: PhoneCall,
    mail: Mail,
    linked:linkedinLogo,
    phoneNum:"+971503448668",
    emailAdd:"techno.iforce@gmail.com",
    linkedUrl:"https://www.linkedin.com/"
  },
    {
    id:3,
    title:"Areesha Tallat",
    role:"Head of Sales and Marketing",
    dp:"https://ik.imagekit.io/fn27qkx70/Techno%20Force%20Products/Team/img1.png",
    phone: PhoneCall,
    mail: Mail,
    linked:linkedinLogo,
    phoneNum:"+923435230886",
    emailAdd:"areeshatallat98@gmail.com",
    linkedUrl:"https://www.linkedin.com/in/areesha-tallat-31a823130/"
  },
  
  
]

const TeamSection = () => {
  return (
    <div className='bg-gray-900 text-white flex flex-col items-center 
py-12 sm:py-16 px-4 sm:px-6'>

  {/* Heading */}
  <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight'>
    Brains Behind the <span className="text-yellow-300">Excellence</span>
  </h1>

  {/* Paragraph */}
  <p className="max-w-md sm:max-w-xl md:max-w-2xl text-center 
  text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
    Our founders and leadership bring vision, expertise, and direction, 
    shaping our journey and delivering impactful results across every project.
  </p>

  {/* Cards */}
  <div className='mt-10  max-w-6xl 
  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
  gap-2 sm:gap-8 justify-items-center'>

    {teamData.map((item) => (
      <div data-aos = 'zoom-in'>
        <TeamCard key={item.id} item={item} />
      </div>
    ))}

  </div>
</div>
  )
}

export default TeamSection