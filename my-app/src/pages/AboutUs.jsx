import React from 'react';
import about1 from "../images/about.jpg"
import about2 from "../images/about2.jpg"
import "./AboutUs.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 

function AboutUs() {
    return (
     
        <div className="about-us">
            <Navbar />
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <div className="about-content">
                <section className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        At Vegetable Rate Prediction, our mission is to create a transparent and efficient vegetable market.
                        We are dedicated to leveraging data analytics and technology to forecast vegetable prices, enabling farmers
                        to get fair prices for their produce and consumers to make budget-conscious choices.
                    </p>
                    <img src={about1} alt="Mission" />
                </section>
                <section className="vision">
                    <h2>Our Vision</h2>
                    <p>
                        Our vision is to revolutionize the way people buy and sell vegetables. We strive to provide accurate and
                        timely price predictions, helping both farmers and consumers make informed decisions.
                    </p>
                    <img src={about2} alt="Vision" />
                </section>
            </div>
            <footer className="about-footer">
                {/* &copy; {new Date().getFullYear()} Vegetable Rate Prediction App. All rights reserved. */}
                <Footer />
            </footer>
        </div>
    );
}

export default AboutUs;
