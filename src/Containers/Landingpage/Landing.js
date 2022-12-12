import React from 'react'
import Gallery from "../../components/LandingPagecompoents/Gallery"
import AboutUs from "../../components/LandingPagecompoents/AboutUs"
import TeamContact from "../../components/LandingPagecompoents/TeamContact"
import Footer from "../../components/LandingPagecompoents/Footer"
import Navbar from "../../components/LandingPagecompoents/Navbar"



const Landing = () => {
  return (
<div>
    <Navbar />
    <Gallery />
    <AboutUs />
    <TeamContact />
    <Footer />
    </div>
  )
}

export default Landing