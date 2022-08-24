import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/social_links"
import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
  
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h1>Je suis Ousmane LY</h1>
            <h4>Spécialiste en Marketing / Communication & Digitale Business</h4>
            <Link to="/contact" className="btn">
              Contactez-Moi
            </Link>
            <SocialLinks/>   
        </div>
      </article>
      <img src={heroImg} alt="heroImg" className="hero-img-svg"/>
    </div>
  
  </header>
}

export default Hero
