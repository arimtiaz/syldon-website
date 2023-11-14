import React from 'react';
import Hero from './Hero';
import Nav from '../Nav/Nav';
import ContactNav from '../Nav/ContactNav';
import Facts from './Facts';
import AboutUs from './AboutUs';
import Feature from './Feature';


const Home = () => {
    return (
        <div className=''>
            <ContactNav></ContactNav>
            <Nav></Nav>
            <Hero></Hero>
            <Facts></Facts>
            <AboutUs></AboutUs>
            <Feature></Feature>
        </div>
    );
};

export default Home;