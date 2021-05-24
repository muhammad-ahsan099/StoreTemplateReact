
import {Link} from 'react-router-dom';
import './Navbar.css';
import React from 'react';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import AdjustIcon from '@material-ui/icons/Adjust';




export default function Navbar() {
    return (
        <div >
            <nav className="mainNav">

                <input type="checkbox" id="check"    />
                    <label for="check" class="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <label className="logo">Ta-Series</label>
                 
                    <ul className="List">
                        <li className='List_li'><Link to="/" className='List_li_a'  >Home <HomeIcon   />  </Link> </li>
                        <li className='List_li'><Link to="/mens" className='List_li_a' href="">Men's <DirectionsWalkIcon/> </Link></li>
                        <li className='List_li'><Link to="/womens" className='List_li_a' href="">Women's <ShoppingBasketOutlinedIcon /> </Link></li>
                        <li className='List_li'><Link to="jewelery"  className='List_li_a' href="">Jewellery < AdjustIcon/> </Link></li>
                        <li className='List_li'><Link to="/electronics"  className='List_li_a' href="">Electronics  < AllInclusiveIcon /> </Link></li>
                    </ul>
            </nav>
    
        </div>
    )
}