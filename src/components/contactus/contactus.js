import React, { useState } from 'react';


function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    surname: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
        [event.target.name]: event.target.value
        
    });
    
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      
    
  };
 
  
  
    return (
        <div className='flex flex-col bg-black-200 lg:w-10/12 xl:w-8/12 h-def mx-auto my-6 j  justify-center rounded-lg'>
            <form className='flex flex-col items-center gap-10' onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className='rounded-lg rounded-bl-lg text-center p-1'/>
                <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" required className='rounded-lg rounded-bl-lg text-center p-1'/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className='rounded-lg rounded-bl-lg text-center p-1'/>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required className='rounded-lg rounded-bl-lg text-center p-16'/>
                <button type="submit" className="bg-teal-300 hover:bg-teal-200 text-white font-bold py-3 px-16 mt-16 rounded-full">Send Message</button>
            </form>
        </div>
  );
}

export default ContactUs;