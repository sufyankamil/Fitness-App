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
                    <div></div>
                </div>

                {/* Button */}
                <div className="hero-btn">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="right-side"></div>
        </div>
    );
};

export default Hero;