import React from 'react';
import Hero from './Hero';
import Nav from '../Nav/Nav';
import ContactNav from '../Nav/ContactNav';
import Facts from './Facts';
import AboutUs from './AboutUs';
import Feature from './Feature';
import Services from './Services';
import FAQ from './FAQ';
import Footer from './Footer';
import Diagonostic from './Diagonostic';
import Pharmacy from './Pharmacy';
import Entertainment from './Entertainment';
import Construction from './Construction';


const Home = () => {
    return (
        <div className=''>
            <ContactNav></ContactNav>
            <Nav></Nav>
            <Hero></Hero>
            <Facts></Facts>
            <AboutUs></AboutUs>
            <div className='bg-blue-700'>
            <Feature></Feature>
            </div>
           <Services></Services>
           <Diagonostic></Diagonostic>
           <Pharmacy></Pharmacy>
           <Entertainment></Entertainment>
           <Construction></Construction>
           <div className='bg-blue-50'>
           <FAQ></FAQ>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;