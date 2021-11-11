import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Discount from '../Discount/Discount';
import Offers from '../Offers/Offers';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>            
            <Packages></Packages>
            <Discount></Discount>
            <Offers></Offers>
            <Contact></Contact>
        </div>
    );
};

export default Home;