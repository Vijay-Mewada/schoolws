import React from 'react'
import Carousel from '../components/Carousel'
import Information from '../components/Information';
import Event from '../components/Event';
import Topper from '../components/Topper';

function Home() {
    return (
        <div>
            <Carousel />
            <Information />
            <Topper />
            <Event />
        </div>
    )
}

export default Home
