import React, { useState , useRef , useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Tour-Detail.css';
import tourDetail from "./tourdetail.jpg";
import { AiTwotoneStar } from 'react-icons/ai';
import DatePicker from "react-datepicker";
import Form from 'react-bootstrap/Form';
import "react-datepicker/dist/react-datepicker.css";


function Details() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  
  const showForm = (() =>{
    setShow(!show)
  });

  const [startDate, setStartDate] = useState(new Date());

  const [checkout , setCheckout] = useState(false);
  const paypal = useRef();


  // useEffect(() =>{

  //   window.paypal.Buttons({
  //     createOrder: (data , err , actions) =>{
  //       return actions.order.create({
  //         intent: "CAPTURE",
  //         purchase_units : [
  //           {
  //             description : "Cool Tour",
  //             amount : {
  //               currency_code : "USD",
  //               value: 650.00
  //             }
  //           }
  //         ]
  //       })
  //     },
  //     onApprove: async (data , actions) =>{
  //       const order = await actions.order.capture();
  //       console.log(order);
  //     },
  //     onError : (err) =>{
  //       console.log(err);
  //     }
  //   }).render(paypal.current)

  // }, []);
  

  const addCheckOut = () => {
    setCheckout(true)
    console.log(checkout)
    
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

    <div className="single_tour_hero">

        <div className="single_tour_hero_img">
        <img src={tourDetail} alt="" className="img-fluid" />

        </div>


        <div className="single_tour_hero_info">
            <div className="avaliable_badge">
              <small><span className="badgeText">A</span>valiable</small>
            </div>
            <h1>{location.state.tourTitle}</h1>
            <p className="mb-5">{location.state.totalDays} Days <AiTwotoneStar color="gold" /> 4.7 (1,006) </p>
            <p>{location.state.tourDescription}</p>
        
            <p>From <span className="bold">Kohat</span> to <span className="bold">Pindi</span> </p>

          <div className="tags">
            <p className="tag">asdasdsda</p>
            <p className="tag">asdsad</p>
            <p className="tag">asasdd</p>
            <p className="tag">asd</p>
            <p className="tag">assadd</p>
          
          
          </div>

        <div className="tour_info">

          <p className="info">Tour Operator: <br />
            {location.state.tourOperator}
          </p>

          <p className="info">Max Group Size: <br />
          {location.state.groupSize}
          </p>

          <p className="info">Age Range: <br />
          {location.state.ageRange}
          </p>

          



        </div>

      

        </div>

    </div>

    <div className="tour_description">

      <h5>Description:</h5>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Repellat maxime culpa at animi asperiores itaque commodi, 
        lorem ipsum dolor sit amet saepe laboriosam minus vitae. 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Tempore cumque repudiandae illo hic saepe quaerat cum qui!
        Soluta voluptatum odit nam, ea facilis ipsa corporis aspernatur praesentium, ratione minus cum?</p>

      <h6>Rs. {location.state.tourPrice}</h6>

        <br />
        <button className="btn btn-primary" onClick={showForm}>Book Now</button>
    </div>
    {
      show ? <div className="input-form">
      <h5>Add Traveller Details</h5>

      <div className="input">
      <label htmlFor="firstName">First Name: </label>
      <input type="text" id="firstName" />

      </div>

      <div className="input">
      <label htmlFor="lastName">Last Name: </label>
      <input type="text" id="lastName" />

      </div>

      <div className="input">
      <label htmlFor="email">Email: </label>
      <input type="Email" id="email" />

      </div>

      <div className="input">
      <label htmlFor="number">Phone No: </label>
      <input type="number" id="number" />

      </div>

      <div className="input">
      <label htmlFor="number">Date Of Birth: </label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />


      </div>


      <div className="input">
      <Form.Select  aria-label="Default select example">
      <option style={{float: 'left'}}>Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      
    </Form.Select>


      </div>


      <div className="input">
      
      {checkout ? <div>
      <div ref={paypal}></div>
      </div> : 
      <button onClick={addCheckOut} className="btn btn-primary">Check out</button>

      }




      </div>





    </div> 
    : ""
    }
    </div>
  );
}

export default Details;
