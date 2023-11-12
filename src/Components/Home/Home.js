import React from 'react';
import Hero from './Hero';
import Nav from '../Nav/Nav';
import ContactNav from '../Nav/ContactNav';
import Stats from './Stats';

const Home = () => {
    return (
        <div className=''>
            <ContactNav></ContactNav>
            <Nav></Nav>
            <Hero></Hero>

        </div>
    );
};

export default Home;