
import React from 'react';

import Slider from '../../Components/slider/slider';
import BlogItem from '../../Components/BlogItem/blogItem';
import FeaturedProduct from '../../Components/FeaturedProducts/featuredProduct';


function LandingPageHome () {
    return(
        <div>
        
            < Slider />
            < BlogItem />
            < FeaturedProduct />
            
        </div>
    )
    }

export default LandingPageHome;