import React, { Fragment, useState } from 'react'
import emailjs from 'emailjs-com';
import axios from 'axios';

const Contact = () => {

    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactMessage, setContactMessage] = useState('');

    const onContactNameChange = e => setContactName(e.target.value);
    const onContactEmailChange = e => setContactEmail(e.target.value);
    const onContactMessageChange = e => setContactMessage(e.target.value);

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        console.log({ contactEmail, contactMessage });
        var templateParams = {
            name: contactName,
            email: contactEmail,
            message: contactMessage
        };
         
        emailjs.send('service_7cx135v', 'template_qymk3zm', templateParams, 'user_qT1H0zVw19dibPaEUTxA1')
            .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
               console.log('FAILED...', error);
        });
    }

  return (
    <div>
        <form id="contact-form" className='col-6' onSubmit={handleContactSubmit} >           
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="contactName"
                    value={contactName}
                    placeholder="Your Name"
                    className="form-control" 
                    onChange={onContactNameChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="emailAddress">Email address</label>
                <input 
                    type="email" 
                    name="contactEmail"
                    value={contactEmail}
                    placeholder="Your email address"
                    className="form-control" 
                    aria-describedby="email"
                    onChange={onContactEmailChange} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                    className="form-control" 
                    rows="5"
                    name="contactMessage"
                    value={contactMessage}
                    placeholder="Your message"
                    onChange={onContactMessageChange}
                    >
                </textarea>

            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Contact;