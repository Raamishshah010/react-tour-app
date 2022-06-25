    import React from "react";
    import { useNavigate } from "react-router-dom";
    import tour1 from "./tour1.jpg";
    import "./Destination.css";
    import { AiFillStar } from "react-icons/ai";
    function Destination(props) {
    console.log(props.tours);
    const navigate = useNavigate();

    const clickHandler = (item) => {
        navigate("/tour-details", { state: item });
    };
    const hotelsHandle = () => {
        window.alert("Please")
    }
    return (
        <div className="destination">
        <h1>
            Find Popular <br />{" "}
            <span className="destinationName">Destinations</span>{" "}
        </h1>

        <div className="destination_cards">
            {props.tours.map((item) => (
            <div className="tour_card" key={item.tourId}>
                <img src={tour1} alt="" />
                <div className="card_body">
                <h4>{item.tourTitle} </h4>
                <h6>Location : Upper Orakzai</h6>
                <p>
                    {" "}
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>{" "}
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                </p>
                <div className="card_bottom">
                    <div className="info">
                    <p>
                        <span className="priceTag">$</span>
                        <span className="price">200</span> / person{" "}
                    </p>
                    </div>
                    <div className="btn">
                    <button onClick={() => clickHandler(item)}>Book Now</button>
                    </div>
                </div>
                </div>
            </div>
            ))}

            {/* <div className="tour_card">
                    <img src={tour2} alt="" />
                    <div className="card_body">
                        <h4>New Tour Place </h4>
                        <h6>Location : Upper Orakzai</h6>
                        <p> <span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span> <span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span></p>
                        <div className="card_bottom">
                            <div className="info">
                                <p><span className="priceTag">$</span><span className="price">200</span> / person </p>
                            </div>
                            <div className="btn">
                                <button onClick={clickHandler}>Book Now</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tour_card">
                    <img src={tour3} alt="" />
                    <div className="card_body">
                        <h4>New Tour Place </h4>
                        <h6>Location : Upper Orakzai</h6>
                        <p> <span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span> <span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span></p>
                        <div className="card_bottom">
                            <div className="info">
                                <p><span className="priceTag">$</span><span className="price">200</span> / person </p>
                            </div>
                            <div className="btn">
                                <button onClick={clickHandler}>Book Now</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="tour_card">
                    <img src={tour1} alt="" />
                    <div className="card_body">
                        <h4>New Tour Place </h4>
                        <h6>Location : Upper Orakzai</h6>
                        <p> <span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span><span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span> <span><AiFillStar style={{ color: "gold", fontSize: "1rem" }} /></span></p>
                        <div className="card_bottom">
                            <div className="info">
                                <p><span className="priceTag">$</span><span className="price">200</span> / person </p>
                            </div>
                            <div className="btn">
                                <button onClick={clickHandler}>Book Now</button>
                            </div>
                        </div>

                    </div>
                </div> */}
        </div>

        <section className="hotel">
            <h1>
            Find Popular <br /> <span className="destinationName">Hotels</span>{" "}
            </h1>
            <div className="hotel_cards">

            <div className="hotel_card">
                <img src={tour1} alt="" />
                <div className="card_body">
                <h4>New PC Hotel</h4>
                <h6>Location : Upper Orakzai</h6>
                <p>
                    {" "}
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>{" "}
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                </p>
                <div className="card_bottom">
                    <div className="info">
                    <p>
                        <span className="priceTag">$</span>
                        <span className="price">200</span> / person{" "}
                    </p>
                    </div>
                    <div className="btn">
                    <button onClick={hotelsHandle}>Book Now</button>
                    </div>
                </div>
                </div>
            </div>

            <div className="hotel_card">
                <img src={tour1} alt="" />
                <div className="card_body">
                <h4>New PC Hotel</h4>
                <h6>Location : Upper Orakzai</h6>
                <p>
                    {" "}
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>{" "}
                    <span>
                    <AiFillStar style={{ color: "gold", fontSize: "1rem" }} />
                    </span>
                </p>
                <div className="card_bottom">
                    <div className="info">
                    <p>
                        <span className="priceTag">$</span>
                        <span className="price">200</span> / person{" "}
                    </p>
                    </div>
                    <div className="btn">
                    <button onClick={hotelsHandle}>Book Now</button>
                    </div>
                </div>
                </div>
            </div>




            </div>
        </section>
        </div>
    );
    }

    export default Destination;
