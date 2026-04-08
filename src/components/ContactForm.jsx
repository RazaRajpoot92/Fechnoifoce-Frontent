import React from 'react'

const ContactForm = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        
    }

    //onSubmit={(e) => handleSubmit(e)}

  return (
    <div className='px-4 sm:px-10 md:px-20 lg:px-45 py-6'>
        
        <h1 className='text-yellow-300 text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-6'>
            Just One Click Away
        </h1>

        <form method='Post' action={'https://formspree.io/f/xwvwzgpw'}  className='transition-all  duration-500 text-gray-500 flex gap-4 flex-col p-2 *:outline-none'>
            
            {/* Name Fields */}
            <div className='flex flex-col sm:flex-row gap-3 *:outline-none *:focus:border-yellow-400 *:rounded-lg'>
                <input 
                    className='border focus:border-yellow-400 bg-gray-50/70 border-gray-300 w-full sm:w-1/2 px-3 py-2 rounded-lg transition-all duration-200'  
                    type="text" 
                    name='First Name'
                    required = 'true'
                    placeholder='Enter your first name' 
                />

                <input 
                    className='border focus:border-yellow-400 bg-gray-50/70 border-gray-300 w-full sm:w-1/2 px-3 py-2 rounded-lg transition-all duration-200' 
                    type="text"
                    name='Last Name'
                    required = 'true' 
                    placeholder='Enter your last name' 
                />
            </div>
            
            {/* Email */}
            <input 
                className='border focus:border-yellow-400 rounded-lg bg-gray-50/70 px-3 py-2 border-gray-300 transition-all duration-200' 
                type="email"
                name='Email' 
                required = 'true'
                placeholder='Enter your email' 
            />

            {/* Message */}
            <textarea 
                className='border focus:border-yellow-400 rounded-lg bg-gray-50/70 border-gray-300 min-h-32 px-3 py-2 transition-all duration-200' 
                name='Message'
                required = 'true'
                placeholder='Enter your message...'>
            </textarea>

            {/* Button */}
            <input 
                type="submit" 
                value="Submit"
                className='w-full sm:w-70 transition-all duration-300 text-white mx-auto py-2 font-semibold 
                bg-yellow-300 border-yellow-300 border rounded-lg 
                hover:bg-transparent hover:text-yellow-400 cursor-pointer' 
            />
        </form>
    </div>
  )
}

export default ContactForm