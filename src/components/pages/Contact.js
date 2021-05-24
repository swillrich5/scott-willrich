import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import DownloadLink from "react-download-link";

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
               setContactName("");
               setContactEmail("");
               setContactMessage("");
            }, function(error) {
               console.log('FAILED...', error);
        });
    }

  return (
    <div className="row py-5">  
        <div className="container col-md-6 col-lg-4 py-2 text-white about-container">
            <form id="contact-form" onSubmit={handleContactSubmit} >           
                <div className="form-group">
                    <div>
                        <h3 className="pb-2">Contact Me!</h3>
                        <p>You can email me at <a href="mailto:swillrich@gmail.com">swillrich@gmail.com</a> or please fill out the form below.</p>
                    </div>
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
            <p className="mt-4">Also, please check out my LinkedIn profile, GitHub repo, and resume:</p>
            <div className="d-flex justify-content-around mb-5">
                <a href="https://www.linkedin.com/in/scott-willrich"><i className="fab fa-linkedin fa-5x"></i></a>
                <a href="https://github.com/swillrich5"><i className="fab fa-github fa-5x"></i></a>
                <DownloadLink
                    label={<i className='far fa-address-card fa-5x' style={{color: "#D4F1F1"}}></i>}
                    filename="ScottWillrichResume.pdf"
                    exportFile={() => Promise.resolve("My cached data")}
                />
            </div>        
        </div>
    </div>
  )
}

export default Contact;