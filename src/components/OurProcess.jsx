
import {PhoneCall, ShieldCheck, MessageSquareQuote, Waypoints,Van, ShieldUser} from "lucide-react"

const ProcessData = [
    {
        title:"Share your query with us via email",
        icon: PhoneCall,
    },
     {
        title:"Receive a quotation",
        icon: MessageSquareQuote,
    },
     {
        title:"Share Purchase Order with us via email",
        icon: Waypoints,
    },
     {
        title:"Our engineers will visit your site for inspection ",
        icon: ShieldUser,
    },
     {
        title:"We will deliver and install the required machinery",
        icon: Van,
    },
     {
        title:"We will provide after sales service and maintenance",
        icon: ShieldCheck,
    }

]

import ProcessCard from './ProcessCard'
const OurProcess = () => {
  return (
    <div className='relative'>

        <div className='w-1 rounded-full bg-yellow-200 h-250  absolute  top-150 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
        

        {ProcessData.map((item, idx)=>(
            <div data-aos='zoom-in'>
                <ProcessCard item = {item} id={idx} key={idx}  />
            </div>
        ))}

    
    </div>
  )
}

export default OurProcess