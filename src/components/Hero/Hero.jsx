import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

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
                    <button className="hero-button">Get Started </button>
                    <button className="hero-button">Contact us</button>
                </div>

            </div>
            <div className="right-side">
                <button className="hero-button">Join Now </button>
                <div className="heart">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate </span>
                    <span>116 BPM </span>
                </div>

                {/* images */}
                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero_image_bck" />
                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned </span>
                        <span>950 kcal </span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;