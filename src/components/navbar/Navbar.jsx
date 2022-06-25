/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import MainImage from "./Group 2.png"
import bgImage from "./homeimage.jpg";
import logo from "../auth/login/logo.png"
function Navbar() {
    const navigate= useNavigate();


    const tourHandler = () =>{
    navigate('/tours');
    };

    const searchTour = () =>{
        navigate('/tours');
    }

    const hotelHandle = () =>{
        navigate('/hotels');
    }

return (

    <div id="main-header"style={{  
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}>


        <header className="navbar ">
            
            <div className="logo">
            <Link to={'/'}>
                <img src={logo} width="100px" alt="" />
            </Link>
            </div>


            <div className="nav-links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#" onClick={tourHandler}>Tours</a>
                    </li>
                    <li>
                        <a href="#" onClick={hotelHandle}>Hotels</a>
                    </li>

                    <li>
                        <a href="#">Service</a>
                    </li>
                
                </ul>
            </div>
        </header>

        <div className="main">

            <div className="main-info">
            <h1>Live Your <br /> <span className="h-main">Advanture</span> </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi <br /> ad nemo exercitationem iste obcaecati ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolor repellat aliquid dolores itaque ea sint accusantium, repellendus velit tempore harum expedita. Et natus illo provident maiores, ipsa id molestias?</p>

            <div className="search-input">
                <div className="input">
                    <input type="text" placeholder="Search For Places..." />
                </div>
                <div className="button">
                    <button onClick={searchTour}>Search</button>
                </div>
            </div>

            </div>

            <div className="main-image">
                <img src={MainImage}  alt="main Image" />
            </div>
        </div>

    </div>
    
);
}

export default Navbar;
