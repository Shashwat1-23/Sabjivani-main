

import React from 'react';
import './ContactPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div className="contact">
          <Navbar />
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>
            <div className="contact-content">
                <section className="contact-form">
                    <h2>Contact Form</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section className="map">
                    <h2>Our Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.893315671808!2d77.9922619098517!3d30.26862077470642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9451ae8dfd%3A0xf39c46d34a152faa!2sGraphic%20Era%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1693722669117!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </section>
            </div>
            <footer className="contact-footer">
                {/* &copy; {new Date().getFullYear()} Vegetable Rate Prediction App. All rights reserved. */}
                <Footer />
            </footer>
        </div>
    );
}

export default Contact;
