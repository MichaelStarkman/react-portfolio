import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from 'react-bootstrap';

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
        <h1>Contact Me</h1>
        <p>I am open to work opportunities</p>
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
        {/* phone */}
        <input
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
        <br />
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
        {/* possible preferred contact drop down text/phone/email */}
          <Button 
          type="submit" 
          disabled={state.submitting} 
          // onClick={() => setSmShow(true)} 
          className="me-2">
            SEND MESSAGE
          </Button>
          
        </form>
      </div>
    </div>
  );
}

export default ContactForm;