import React from 'react'
import HeroSection from './Home/HeroSection'
import WhyTeenLancing from './Home/WhyTeenLancing'
import HowToGetStarted from './Home/HowToGetStarted'
import ProjectCategories from './Home/ProjectCategories'
import AboutUs from './Home/AboutUs'

export default function Home() {
    return (
        <>
            <HeroSection />
            <WhyTeenLancing />
            <HowToGetStarted />
            <ProjectCategories />
            <AboutUs />
        </>
    )
}
