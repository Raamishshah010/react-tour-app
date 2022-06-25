import React from "react";
import About2Image from "./aboutimage.png";
import './About2.css';
import {AiFillStar} from 'react-icons/ai';
function About2() {
return (
    <div className="about2_main">
    <div className="about2_image">
        <img src={About2Image} alt="" />
    </div>
    <div className="about2_info">
        <h1>
        What Advanturers <br /> Say <span className="about2Heading">About Us</span> 
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel placeat
        consequatur odit fugiat quas id recusandae iste, non dolorum deserunt
        beatae sunt eius a aliquam commodi voluptatibus animi! Nobis,
        accusamus.
        </p>


        <div className="card">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto modi impedit atque perspiciatis minima, facere amet alias laudantium eligendi, totam necessitatibus expedita exercitationem voluptatum consequatur tempora illum quisquam consequuntur! Odit!</p>
        
            <div className="rating">
            <p> <span><AiFillStar style={{ color: "gold", fontSize: "1.5em" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1.5em" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1.5em" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1.5em" }} /></span> <span><AiFillStar style={{ color: "gold", fontSize: "1.5em" }} /></span></p>
            <p>Steven Hawking</p>
            <p>New Member</p>
            </div>
        
        </div>

    </div>
    </div>
);
}

export default About2;
