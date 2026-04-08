import React from 'react'
import ContactCard from '../components/ContactCard'
import {Mail, Phone, House} from "lucide-react"

const contactCardData = [
    {
    id:1,
    icon: Mail,
    data:["techno.iforce@gmail.com", "techo.iforceservice@gmail.com"]
    },
    {
    id:2,
    icon: Phone,
    data:["UAE: +971564840532", "UAE: +971503448668", "Pakistan: +923435230886"]
    },
    {
        id:3,
        icon: House,
        data:["Al Dam, Al Mali, Al Quoz 3"," Bur Office 106"]
    }
]

const ContactCardContainer = () => {
  return (
    <div className='pt-5 gap-2 flex justify-center flex-wrap'>
        
        {
            contactCardData.map((item)=>(
                <ContactCard key={item.id} item = {item} />
            ))
        }
      </div>
  )
}

export default ContactCardContainer