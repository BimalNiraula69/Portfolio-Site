import React from 'react'
import MainContent from './MainContent'
import Contact from './Contact'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Services from './Services'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <MainContent/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Services/>
        <Contact/>
    </div>
  )
}

export default Home