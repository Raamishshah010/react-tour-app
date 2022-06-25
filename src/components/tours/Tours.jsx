import  {React, useEffect , useState} from 'react';
import './Tour.css';
import {GetAllTours } from '../Firebase/AllTours';
import {useNavigate } from 'react-router-dom';
import tourHero from './tour_hero.jpg';
import { RiHotelLine } from 'react-icons/ri';
import { MdEmojiTransportation } from 'react-icons/md';
import { SiGooglestreetview } from 'react-icons/si';


function Tours() {
    
    const [tours , setTours] = useState([])

    useEffect(() => {
        GetAllTours().then((result) => {
            setTours(result);
        
        })
    }, [])

    
    const navigate= useNavigate();
    const navigateSingleTour = (item) => {
        navigate('/tour-details' ,{state: item})
    }





return (
    <div className="Tours_main">

        <div className="header">

            <div className="logo">
            <h5>Logo</h5>

            </div>

            <div className="header_links">
                <p>Home</p>
                <p>Tours</p>
                <p>Register</p>
            </div>

        </div>

        <section className="tour_hero">
            <div className="hero_info">
            <h1> <span className="headings">Orakzai Agency</span>  Tours & Trips</h1>
            <p>Set sail and hop around the Similan Islands, cycle through the rice fields of Chiang Mai, 
                embark on an adventure in Kanchanaburi, or cook Pad Thai like the locals in Phuket - 
                there's nothing quite like a Thai adventure. With a fascinating culture, delicacies the 
                world can't get enough of and beaches you can't wait to escape to, there's no wonder this 
                is named the Land of Smiles. 
                Package your trip with a visit to Cambodia and Laos to discover the best of Indochina.</p>
                <p> <RiHotelLine size="30px" color="#ff8021"/> {tours.length}+ Luxary Hotels </p>
                <p> <MdEmojiTransportation size="30px" color="#ff8021" /> 40+ Comfortable Transport Services </p>
                <p> <SiGooglestreetview size="25px" color="#ff8021"/> 10+ Beautiful Nature Places</p>
            </div>
            
            <div className="hero_img">
            <img src={tourHero} alt="" />
            </div>
        </section>

        <section className="all_tours">
            <h1>All <span className="headings">Tours</span> Services</h1>

            <div className="cards">

                {
                    tours.map((tour) => (
                        <div className="card" key={tour.tourId}>
                        <div className="card-img">
                            <img src={tour.tourImage} width="100%" height="300px"  alt="" />
                        </div>
                        <div className="card-body">
                            <h5>{tour.tourTitle}</h5>
                            <p>{tour.tourDescription.slice(0,130)}</p>
    
                            <button className="btn btn-primary" onClick={()=> navigateSingleTour(tour)}>Book Now</button>
                        </div>
                    </div>
    
                    ))
                }

                {/* <div className="card">
                    <div className="card-img">
                        <img src={tourHero} className="img-fluid" alt="" />
                    </div>
                    <div className="card-body">
                        <h5>Title of a Tour</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem atque dolor odio aliquid eos!</p>

                        <button className="btn btn-primary" onClick={navigateSingleTour}>Book Now</button>
                    </div>
                </div> */}

                




            </div>


        </section>

    </div>
)
}

export default Tours