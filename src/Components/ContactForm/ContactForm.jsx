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
            <h1 className='contact-title'>Contact</h1>
            <hr className='contact-hr' />
            <section className='thank-you-text-container'>
              <p className='thank-you-text'>I enjoy interacting with people from all facets of life. Let's link up over Zoom, a phone call, or coffee if you are in the Denver area.</p>
              <p className='thank-you-text'>Thank you for visiting!</p>
            </section>
            <br />
            <SocialIcons></SocialIcons>
          </div>
        
      )

  }
  return (
    
    <div className='contact-container' id='contact'>
      <div>
        <h1 className='contact-title'>Contact</h1>
        <hr className='contact-hr' />
        <section className='contact-text-container'>
          <p className='contact-text'>I enjoy interacting with people from all facets of life. Let's link up over Zoom, a phone call, or coffee if you are in the Denver area.</p>
        </section>
        <SocialIcons></SocialIcons>
        <br />
        <div className="form-text">
          <p className='form-message'
          >Send me a message:</p>
        </div>
    </div>
      <div className='form-container'>
        <form 
        className='form'
        onSubmit={handleSubmit}>
        {/* Name */}
        <input
          className="input"
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
        <br /> <br />
        {/* email */}
        <input
          className="input"
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
        <br /><br />
        {/* subject */}
        <input
          className="input"
          id="subject"
          type="subject" 
          name="subject"
          required
          placeholder='Subject'
        />
        <br /><br/>
        {/* message */}
        <textarea
          className="w-75 mb-4"
          rows={5}
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
          variant='outline-dark'
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