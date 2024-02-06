import React, { useEffect, useState } from 'react'
import './MockTest.css';
import { useDispatch } from 'react-redux';
import { addtocourse } from '../Redux/Slice';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

// import { PayPalButtons } from "@paypal/react-paypal-js";z

// import ReactDOM from "react-dom"
// import paypal from "paypal-rest-sdk"
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const MockTest = () => {
    const [data, setData] = useState([])
    console.log(data)
    const dispatch = useDispatch()

    const [cart, setCart] = useState([])

    const [showDialog, setShowDialog] = useState(false)

    useEffect(() => {
        async function fetchapi() {
            const videoData = await fetch("https://mern-szic.onrender.com/api/getData")
            const res = await videoData.json()
            setData(res)
            console.log(res);
        }
        fetchapi()
    }, []);

    // const handlePostData = async (data) => {
    //     setShowDialog(true);
    // };

    // const handleYesClick = async (data) => {
    //     try {
    //          axios.post("http://localhost:3030/api/savecourse",data);
    //         console.log("successfully added", data);
    //         setShowDialog(false);
    //         alert("Data posted successfully");
    //     } catch (error) {
    //         console.error("Error posting data", error);
    //         alert("An error occurred while posting data");
    //     }
    // };

    // const handleNoClick = () => {
    //     setShowDialog(false);
    //     alert("Action canceled")
    // };

      useEffect(() => {
    axios
      .get("https://mern-szic.onrender.com/api/getcourse")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, []);

    const handleClick = async(item) => {
        const FindItem = cart && cart.find((data) => data.id === item.id);
        console.log(FindItem);
        if(FindItem){
            alert("This Course already Buy");
        } else {
            console.log(item.id);
             axios.post("https://mern-szic.onrender.com/api/addcourse", item)
            .then((res)=>{console.log(res.data)});
            alert("Course has been successfully Buy")
        }
    };



    // const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

    //   const createOrder = (data) => {
    //     // Order is created on the server and the order id is returned
    //     return fetch("http://localhost:3030/api/orders", {
    //       method: "POST",
    //        headers: {
    //         "Content-Type": "application/json",
    //       },
    //       // use the "body" param to optionally pass additional order information
    //       // like product skus and quantities
    //       body: JSON.stringify({
    //         cart: [
    //           {
    //             sku: "unique_id",
    //             quantity: data.quantity,
    //           },
    //         ],
    //       }),
    //     })
    //     .then((response) => response.json())
    //     .then((order) => order.id);
    //   };
    //   const onApprove = (data) => {
    //      // Order is captured on the server and the response is returned to the browser
    //      return fetch("http://localhost:3030/api/orders", {
    //       method: "POST",
    //        headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         orderID: data.orderID
    //       })
    //     })
    //     .then((response) => response.json());
    //   };
    //   return (
    //     <PayPalButton
    //       createOrder={(data) => createOrder(data)}
    //       onApprove={(data) => onApprove(data)}
    //     />
    //   );

    // const checkitem = (id) => {
    //     for (let i = 0; i < data.length; i++) {
    //         if (data[i].id === id) {
    //             data[i]['useremail'] = localStorage.getItem("selfdetails")
    //             return [data[i]]

    //         }
    //     }

    // }
    // const dopayment = async (id) => {
    //     const result = await checkitem(id)



    //     const stripe = await loadStripe("pk_test_51Oeem7SBO2dXKM05Fgfdzzzn87jdEy570GQCEgB7ATutdUpL7ur3HeQc73rMiY51SPDPWqRapm4BsHEChDEEjiJI00QTF7Dvz3")
    //     const body = {
    //         products: result
    //     }
    //     const headers = {
    //         "content-Type": "application/json"
    //     }
    //     try {

    //         const response = await fetch("https://mern-szic.onrender.com/createcheckout", {
    //             method: "POST",
    //             headers: headers,
    //             body: JSON.stringify(body),
    //         });

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const session = await response.json();
    //         console.log(session);

    //         const result = await stripe.redirectToCheckout({
    //             sessionId: session.id,
    //         });


    //         if (result.error) {
    //             console.log(result.error);
    //         }
    //     } catch (error) {
    //         console.error("Fetch error:", error);
    //     }

    // }


    return (
        <div>
            <div>
                <div className="MockTestFirstContainer">
                    <div className="MockTestFirstContainer-text">
                        <div className="MockTestFirstContainer-text-left">

                            <h2 className="MockTestFirstContainer-text-left-top">Mock Tests</h2>
                            <p className="MockTestFirstContainer-text-left-bottom">
                                Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-mock-test-container">
                <div className='featured-mock-test-container-main'>
                    <p className='featured-mock-test-heading'>Featured Mock Tests</p>
                    <div className='featured-mock-test-main-Container'>
                        <div className='featured-mock-test-main-Container-inner'>
                            <p className='featured-mock-test-main-Container-inner-heading'>PAST MOCK TESTS</p>

                            <div className='featured-mock-test-cards'>
                                {data.filter((item) => item.id >= 7 && item.id <= 18).map
                                ( item => {
                                        return (
                                            <div key={item.id}>
                                                <div className='mockCards'>
                                                    <div className='mockCards-top'>
                                                        <img src='\VideoImage\infoicon.svg' className='mockCards-top-infoicon'></img>
                                                        <div className='mockCards-top-bar'>
                                                            <div className='mockCards-top-bar-share-button'>
                                                                <img src='\VideoImage\shareicon.svg' className='mockCards-top-shareicon' />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className='mockCards-middele'>
                                                        <img src={item.image} className='mockCards-middele-image' />
                                                    </div>
                                                    <p className='cardName'>{item.name}</p>
                                                    <div className='cardContent'>
                                                        <div className='cardContent-left'>
                                                            <p className='cardContent-left-date'>{item.date}</p>
                                                            <p className='cardContent-left-date-heading'>{item.dateheading}</p>

                                                        </div>
                                                        <div className='cardContent-middle'>
                                                            <p className='testParticipants'>{item.participants}</p>
                                                            <p className='testParticipants-heading'>{item.participantsheading}</p>

                                                        </div>
                                                        <div className='cardContent-right'>
                                                            <p className='time'>{item.duration}</p>
                                                            <p className='durationheading'>{item.durationheading}</p>

                                                        </div>

                                                    </div><br />
                                                    <div>
                                                        <p>Rs {item.price}</p>
                                                    </div>

                                                    <div className='cardbuy'>
                                                        <button className="cardbuybtn" onClick={() => handleClick(item)}>
                                                            Buy now
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='practicemock-testlist-container'>
                <div className='practicemock-testlist-container-main'>
                    <p className='practicemock-testlist-heading'>Practice Tests</p>
                    <div className='practicemock-testlist-container-card'>
                        <div className='practicemock-testlist-container-topic'>
                            <p className='practicemock-testlist-container-topic-heading'>Topic Wise</p>
                            <div className='practice-mock-Testlist-container-topicwise'>
                                {data.filter((item) => item.id >= 19 && item.id <= 27).map(
                                    (item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='topic-wise-card'>
                                                    <div className='topic-wise-card-image'>
                                                        <img src={item.image} className='topic-wise-card-image-img' alt='image' />
                                                    </div>
                                                    <p className='topic-wise-card-name'>{item.name}</p>
                                                    <p>Rs. {item.price}</p>
                                                    <div className='topic-wise-card-btn'>
                                                    <button className="cardbuybtn" onClick={() => handleClick(item)}>
                                                            Buy now
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        )
                                    }
                                )}

                            </div>

                        </div>

                        <div className='practicemock-testlist-container-company'>
                            <p className='practicemock-testlist-container-company-heading'>Company Wise</p>
                            <div className='practicemock-testlist-container-card-company'>
                                {data.filter((item) => item.id >= 28 && item.id <= 37).map(
                                    (item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='practicemock-testlist-company-card'>
                                                    <div className='practicemock-testlist-company-card-image'>
                                                        <img src={item.image} className='practicemock-testlist-company-card-image-img' alt='image' />


                                                    </div>
                                                    <p>Rs. {item.price}</p>
                                                    <p style={{ color: "#fff" }}>{item.name}</p>
                                                    <div className='practicemock-testlist-company-card-btn'>
                                                    <button className="cardbuybtn" onClick={() => handleClick(item)}>
                                                            Buy now
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        )
                                    }
                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default MockTest