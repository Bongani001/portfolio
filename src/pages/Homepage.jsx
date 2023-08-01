import React from 'react';
import Header from '../components/Layout/homepage/Header';
import Technologies from '../components/Layout/homepage/Technologies';
import Projects from '../components/Layout/homepage/Projects';
import About from '../components/Layout/homepage/About';

const Homepage = () => {
  return (
    <>
        <Header />
        <Technologies />
        <Projects />
        <About />
    </>
  )
}

export default Homepage;