import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'react-bootstrap';
import SocialIcons from '../SocialIcons/SocialIcons'
import './ContactForm.css'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mpzbknnw");
  if (state.succeeded) {
      return (
          <div className='thank-you-container'>
            {/* TODO: edit Thank you */}
            <p>Thank you for visiting!</p>
          </div>
        
      )

  }
  return (
    
    <div className='contact-container'>
      <div>
        <h1 className='contact-title'>Contact</h1>
        <p>I enjoy interacting with people from all facets of life. Let's link up over Zoom, a phone call, or coffee if you are in the Denver area.</p>
        <SocialIcons></SocialIcons>
        <p>Send me a message:</p>
    </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
        {/* Name */}
        <input
          id="name"
          type="name" 
          name="name"
          required
          placeholder='Name'
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <br />
        {/* email */}
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder='Email'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <br />
        {/* UNSURE WHETHER TO ADD PHONE TO CONTACT FORM */}
        {/* phone */}
        {/* <input
          id="phone"
          type="phone" 
          name="phone"
          placeholder='Phone Number'
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
        <br /> */}
        {/* subject */}
        <input
          id="subject"
          type="subject" 
          name="subject"
          required
          placeholder='Subject'
        />
        <br />
        {/* message */}
        {/* <label htmlFor="">
          Message: 
        </label> */}
        <textarea
          id="message"
          name="message"
          required
          placeholder="Message..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <br />
        {/* TODO: possible preferred contact drop down text/phone/email */}
          <Button 
          variant='dark'
          type="submit" 
          disabled={state.submitting} 
          // onClick={() => setSmShow(true)} 
          className="me-2">
            SEND MESSAGE
          </Button>
          
        </form>
      </div>
      {/* TODO: Add a back to top button */}
    </div>
  );
}

export default ContactForm;