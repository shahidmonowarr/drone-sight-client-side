import React from 'react';
import Products from '../../Products/Products';
import Reviews from '../../Reviews/Reviews';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;