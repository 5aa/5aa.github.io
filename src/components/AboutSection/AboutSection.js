import React from 'react'
import AboutImage from './components/AboutImage'
import './AboutSection.scss'

const AboutSection = () => {
  return (
    <div class='about-container'>
      <h1
        class='about-title'
        data-aos='fade-left'
        data-aos-easing='ease-out-quad'
        data-aos-duration='800'>About</h1>
      <AboutImage />
      <div
        class='about-description'
        data-aos='fade-up'
        data-aos-easing='ease-out-quad'
        data-aos-duration='800'>
        <p>There is more than meets the eye.</p>
        <p>I must push the envelope.</p>
        <p>And leave no stone unturned.</p>
      </div>
    </div>
  )
}

export default AboutSection
