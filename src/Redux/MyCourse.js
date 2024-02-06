import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './MyCouse.css';
import "../StudyMaterial/MockTest.css"
import { useNavigate, NavLink } from "react-router-dom";

const AddMyCourse = () => {
    const countcourse = useSelector((state) => state.Course.course)
    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.Course.course);

    const [data, setData] = useState([])
    console.log(data)


    // const dispatch = useDispatch()

    const navigate = useNavigate()
    const [firstHandle, setFirstHandle] = useState(false);
    const [localName, setLocalName] = useState(localStorage.getItem('selfname'));
    let token = localStorage.getItem('token')



    // const handleLogout = () => {
    //     localStorage.removeItem('token')
    //     setData([])
    //     localStorage.removeItem('selfname')
    //     setLocalName(null);
    //     navigate('/dashboard')

    // };

    useEffect(() => {
        async function fetchapi() {
            const videoData = await fetch("https://mern-szic.onrender.com/api/getcourse")
            const res = await videoData.json()
            setData(res)
            console.log(res);
        }
        fetchapi()
    }, []);

    return (
        <>
            {/* {token ? <div className="dropdown1">
                <div className="dropbtn1">
                    <div className="navbar-naming-styles">
                        <div className="text-round-style2">{localName?.[0]?.toUpperCase()}</div>
                        <div className="naming-style"><span>Hi </span> {localName} </div>
                    </div>
                </div>
                <div className="dropdown-content1">
                    <button className="navbar-logout-btn1"><NavLink to="/dashboard"> Courses</NavLink></button>
                    <hr />
                    <button onClick={handleLogout} className="navbar-logout-btn1"><NavLink to="/">Logout</NavLink ></button>
                </div>
            </div> : ""} */}
            <div className="MyDashboard">
                <div className="sidebar">
                    <div className="Profile_nav_selected ">
                        <span className="Profile_nav-list-icon">
                            <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path>
                            </svg>
                        </span>
                        <span className="Profile_nav-list-detail">My Courses</span>
                    </div>
                </div>

                <div className="Mycourse">
                    {token ?
                        <div className="mycourse-heading">
                            <span>Courses({data.length})</span>

                        </div> : null}
                    {
                        token ?

                            <div className="container-course">

                                {data.map(item => {
                                    return (
                                        <div>
                                            <div className="imgae_container cards">
                                                <div className="pblogo-container">
                                                <img alt="car-bg-img" class="EnrolledCourseCard__container-bg-image" src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/bg-card+(1).png"/>
                                                    <div className="pblogo">
                                                        <img className="pblogo-img" src="\pblogo.png" />
                                                    </div>
                                                    <div className="EnrolledCourseCard__container-dates-container">

                                                        <div className="EnrolledCourseCard__container-dates-section">
                                                            <img className="EnrolledCourseCard__container-date-icon" src="\time.svg" />
                                                            <div className="EnrolledCourseCard__container-dates">
                                                                <div className="EnrolledCourseCard__container-date-label">START DATE:</div>
                                                                <div className="EnrolledCourseCard__container-date">1 Jan 2024</div>
                                                            </div>
                                                        </div>
                                                        <div className="EnrolledCourseCard__container-dates-section">
                                                            <img className="EnrolledCourseCard__container-date-icon" src="\time2.svg" />
                                                            <div className="EnrolledCourseCard__container-dates">
                                                                <div className="EnrolledCourseCard__container-date-label">LAST VISIT</div>
                                                                <div className="EnrolledCourseCard__container-date">6 Feb 2024</div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <p className='cardName' style={{ color: "black", marginTop: "15px" }}>{item.name}</p>

                                                <div className="PastMockTestCard__bottom">

                                                    <button className="PastMockTestCard__bottom--button">Go to course</button>

                                                </div>
                                            </div>

                                        </div>
                                    )

                                })}


                                {/* {data.map(item => {
                                return (
                                    <div>
                                        <div className='topic-wise-card'>
                                            <div className='topic-wise-card-image'>
                                                <img src={item.image} className='topic-wise-card-image-img' alt='image' />
                                            </div>
                                            <p className='topic-wise-card-name'>{item.name}</p>
                                            <div className="TopicMockTestCard__bottom">

                                                <button className="TopicMockTestCard__bottom--button">Test Now</button>

                                            </div>
                                        </div>

                                    </div>
                                )
                            })} */}





                                {/* {data.map(item => {
                                return (

                                    <div>
                                        <div className='practicemock-testlist-company-card'>
                                            <div className='practicemock-testlist-company-card-image'>
                                                <img src={item.image} className='practicemock-testlist-company-card-image-img' alt='image' />

                                            </div>
                                            <div className="CompanyMockTestCard__bottom">

                                                <button className="CompanyMockTestCard__bottom--button">Test Now</button>
                                            </div>
                                        </div>

                                    </div>
                                )

                            })} */}

                            </div>
                            : null}
                </div>
            </div>
        </>
    );
};
export default AddMyCourse;