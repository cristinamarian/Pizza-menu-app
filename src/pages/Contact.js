import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';
function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{backgroundImage:`url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form id="contactForm" method="POST">
            <label htmlFor="name">Name</label>
            <input name="name" placeholder="Enter your full name" type="text"/>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter your email" type="email"/>
            <label htmlFor="message">Message</label>
            <textarea 
            rows="5" 
            placeholder="Enter a message"
             name="message"
            required >
            </textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  )
}
export default Contact;
