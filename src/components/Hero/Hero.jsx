import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-side">
                < Header />

                {/* Add section */}
                <div className="hero-add">
                    <div className="hero-add-div"></div>
                    <h2>Get your <span>free</span> estimate today!</h2>
                </div>

                {/* Heading */}
                <div className="hero-heading">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your Body</span>
                    </div>
                    <div>
                        <span>Shape </span>
                        <span className="stroke-text">Your</span>
                        <span> Life</span>
                    </div>
                    <div>
                        <span>Shape </span>
                        <span>Your </span>
                        <span>Future in a way you want</span>
                    </div>
                </div>

                {/* figures */}
                <div className="hero-figures">
                    <div>
                        <span>+150 </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+900 </span>
                        <span>members joined last month</span>
                    </div>
                    <div>
                        <span>60 </span>
                        <span>fitness classes</span>
                    </div>
                </div>

                {/* Hero buttons */}
                <div className="hero-buttons">
                    <button className="hero-button">Join us</button>
                    <button className="hero-button">Contact us</button>
                </div>

            </div>
            <div className="right-side"></div>
        </div >
    );
};

export default Hero;