// # File name: Contact.tsx
// # Student’s Name: Amanpreet Kaur
// # StudentID: 301308654
// # Date: 23rd February 2024

import Navbar from "./Navbar";
import { BiGlobe, BiEnvelope, BiPhone } from 'react-icons/bi';
import React, { useState } from "react";

function Contact() {
    // create a variable to store the form details
    const [formData, setFormData] = useState({
        name:'',
        surname:'',
        phone:'',
        email:'',
        subject:'',
        message:'',
        });
    
        // updates the form data upon change in input data
        const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value} = e.target;

            setFormData(prevData => ({
                ...prevData, [name]:value
            }));

        };

    // handles submit functionality when user sends us a message,
    // prints the captured records to console
    // redirects users to homepage
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        window.history.pushState(null,'','/');
        window.location.reload();
    };

    return (
        <>
        {/* displays the navbar component */}
        <Navbar/>


         <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Reach out and let's chat! Whether you have questions, feedback, or just want to say hello, this is the place to connect. Looking forward to hearing from you!</p>
        </div>

        

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi"><BiGlobe/></i>
                <h4>Location:</h4>
                <p>50 Burgby Avenue, Brampton, Ontario, CAN</p>
              </div>

              <div className="email">
                <i className="bi"><BiEnvelope/></i>
                <h4>Email:</h4>
                <p>preetaman1729@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi"><BiPhone/></i>
                <h4>Call:</h4>
                <p>+1 437-667-6964</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form onSubmit={handleSubmit} method="post" role="form" className="email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" id="name" placeholder="First Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="text" className="form-control" name="surname" value={formData.surname} onChange={handleChange} id="email" placeholder="Last Name" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" id="name" placeholder="Contact Number" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>

        </>
    );
}

export default Contact;
