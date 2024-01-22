import React, { useEffect, useState } from "react";
import '../CSScompo/MasterCompo.css';

const MasterCompatative = () => {

    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        async function fetchapi() {
            const videoData = await fetch("https://mern-szic.onrender.com/api/getData")
            const res = await videoData.json()
            setData(res)
            console.log(res);
        }
        fetchapi()
    })
    return (

        <>
            <div>
                <div className="CoursesPageMastHeadHeader">
                    <div className="CoursesPageMastHeadHeader__fixed-btn-container">
                        <img className="CoursesPageMastHeadHeader__fixed-btn-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/ApplyNow.svg" alt="Apply now Image" />
                        <div className="CoursesPageMastHeadHeader__fixed-btn-text">Enrol Now</div>
                    </div>
                    <div className="CoursesPageMastHeadHeader__container">
                        <div className="CoursesPageMastHeadHeader__left">
                            <div className="CoursesPageMastHeadHeader__left-heading">
                                <h1 className="CoursePageMasthead__heading_main" style={{ color: " rgb(46, 145, 235)" }}>MASTER COMPETITIVE PROGRAMMING</h1>
                                <h6 className="CoursePageMasthead__sub_heading">Master Competitive Programming Fom Zero And Become A Top-Rated Coder
                                    <p className="CoursePageMasthead__sub_heading-highlighter"> Under The Guidance Of Top Competitive Programmers
                                        <span className="CoursePageMasthead__sub_heading_second"></span>
                                    </p>
                                </h6>
                                <button className="CoursePageMasthead__btn">Enrol Now</button>
                            </div>
                        </div>
                        <div className="CoursesPageMastHeadHeader__right">
                            <img width="100%" height="100%" className="CoursesPageMastHeadHeader__right-img" src="\masterimage\mcp-header-image.webp" alt="masthead" />
                        </div>
                    </div>
                </div>
                <div className="CoursePageHighlights__main_container">
                    <div className="CoursePageHighlights__main_sub-container">
                        <div className="CoursePageHighlights__list_container-0">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">9 months intensive bootcamp</p>
                        </div>
                        <div className="CoursePageHighlights__list_container-1">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">Quick doubt resolution</p>
                        </div>
                        <div className="CoursePageHighlights__list_container-2">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">Live coding sessions with top-rated coders</p>
                        </div>
                        <div className="CoursePageHighlights__list_container-3">
                            <div className="CoursePageHighlights__img-container">
                                <img className="CoursePageHighlights__img" loading="lazy" src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp" alt="Highlights Image" />
                            </div>
                            <p className="CoursePageHighlights__list_text">Get certificate on course completion</p>
                        </div>
                    </div>
                </div>
                <div className="Menter-Container">
                    <h5 className="Menter-Container-heading">Get Guidance From Industry Leading Mentors</h5>
                    <div className="Menter-Container-two">
                        <h5>Other Mentors You Will Be Interactive With</h5>
                        <div className="Menter-Container-third">
                            {data.filter((item) => item.id >= 38 && item.id <= 40).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="mentor-main-container">
                                                <img src={item.image} className="mentor-image" alt="mamta"></img>
                                                <div className="mentor-info">
                                                    <h4>{item.name}</h4>
                                                    <p>{item.post}</p>
                                                    <img src={item.company} className="ComapniLogo" alt="companylogo" />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>

                </div>

                <div className="Competitive_programing-container">
                    <h2><span>Master Competitive Programming With Us</span></h2>
                    <div className="course-features-container">
                        <div className="course-features-container-image">
                            <img src="\masterimage\Vector.svg" className="course-features-container-image-img" alt="logo"></img>
                        </div>
                        <ul>
                            <li>
                                {data.filter((item) => item.id >= 41 && item.id <= 48).map(
                                    (item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className="course-features-list-container">
                                                    {/* <div className="course-features-list-container-image"> */}
                                                    {/* <img src={item.image} alt="image"/> */}
                                                    <ul>
                                                        <li>
                                                            <div className="course-features-list-container-item">
                                                                <div className="course-features-list-container-item-image">
                                                                    <img src={item.image} />

                                                                </div>
                                                                <div className="course-features-list-container-item-text">
                                                                    <h5>{item.title}</h5>
                                                                    <p>{item.text}</p>

                                                                </div>

                                                            </div>
                                                        </li>
                                                    </ul>

                                                    {/* </div> */}

                                                </div>

                                            </div>
                                        )
                                    }
                                )}
                            </li>
                        </ul>

                    </div>

                </div>

                <div className="CoursePageStatus">
                    {data.filter((item) => item.id >= 126 && item.id <= 128).map(
                        (item, index) => {
                            return (
                                <div>
                                    <div className="CoursePageStats__stat-container">
                                        <h1>{item.name}</h1>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )
                        }
                    )}


                </div>

                <div className="CompaniesNetwork__main">
                    <h2>
                        <span>Crack Reputed Coding Contests</span>
                    </h2>
                    <img className="CompaniesNetwork__companies-img" src="\masterimage\MCP-company-new.webp" alt="Companies Network Image" />
                </div>

                <div className="CoursesPage__container-batchDetails">
                    <div id="CoursePageBatchDetails__section_main_container_id" className="CoursePageBatchDetails__section_main_container">
                        <div id="CoursePageBatchDetails__section_container_id" className="CoursePageBatchDetails__section_container">
                            <h4 className="CoursePageBatchDetails__heading"> SELECT BATCH </h4>
                            <div className="CoursePageBatchDetails__section">
                                <div className="CoursePageBatchDetails__batch_text_section">
                                    <div className="CoursePageBatchComponent__date_container">
                                        <div className="CoursePageBatchComponent_radio_buttons CoursePageBatchComponent_radio_buttons_selected">
                                            <label for="1stmay" className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no">
                                                <input className="CoursePageBatchComponent__radio_input" type="radio" value="1stmay" id="1stmay" name="courseEnrollment" />
                                                <span className="CoursePageBatchComponent__radio_text_container">
                                                    <h5 className="CoursePageBatchComponent__radio_batch_start_date">1st May</h5>
                                                    <p className="CoursePageBatchComponent__reg_end_date_selected">Enrolment Started</p>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="CoursePageBatchComponent_radio_buttons CoursePageBatchComponent_radio_buttons_not-selected">
                                            <label className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no">
                                                <input className="CoursePageBatchComponent__radio_input" type="radio" value="15thmay" id="15thmay" name="courseEnrollment" />
                                                <span className="CoursePageBatchComponent__radio_text_container">
                                                    <h5 className="CoursePageBatchComponent__radio_batch_start_date">15th May</h5>
                                                    <p className="CoursePageBatchComponent__reg_end_date_not-selected">Enrolment Started</p>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="CoursePageBatchDetails__enrollNow_container">
                                    <div className="CoursePageBatchDetails__actual_priceamount_no_discount">₹ 25000</div>
                                    <div className="CoursePageBatchDetails__cta_container">
                                        <div className="CoursePageBatchDetails__enroll_now_button_box">
                                            <button className="CoursePageBatchDetails__enroll_now_button">Enroll Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CoursePageTestmonials">
                    <h5>This Might Be You!</h5>
                    <div className="CoursePageTestmonials-main">
                        {data.filter((item) => item.id >= 129 && item.id <= 131).map(
                            (item, index) => {
                                return (
                                    <div key={index}>
                                        <div className="CoursePageTestimonials__testimonial-card" style={{ width: "100%", display: "inline-block" }}>
                                            <div className="CoursePageTestimonials__testimonial-name-contanier">
                                                <img src={item.image} alt="Name Decoration Image" loading="lazy" />
                                                <h3>{item.name}</h3>
                                            </div>
                                            <div className="CoursePageTestimonials__testimonial-review">
                                                <p>{item.text}</p>
                                            </div>
                                            <div className="CoursePageTestimonials__testimonial-details">
                                                <div className="CoursePageTestimonials__student-img-container">
                                                    <img src={item.imagetwo} alt="Bottom Decoration Image" className="CoursePageTestimonials__student-img" loading="lazy" />
                                                </div>
                                                <img src={item.imagethree} alt="Bottom Decoration Image" className="CoursePageTestimonials__testimonial-bottom-img" loading="lazy" />
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        )}

                    </div>

                </div>

                <div className="CoursePage-Learning">
                    <h5>By The End Of This Course, You Will Be Able To</h5>
                    <div className="CoursePage-Learning-container">
                        <img loading="lazy" src="\masterimage\Vecto2.webp" alt="Learnig image" />
                        <div className="CoursePage-Learning-container-cards">
                            {data.filter((item) => item.id === 132).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-0">
                                                <img loading="lazy" src={item.image} alt="List Number image" />
                                                <div className="CoursePageLearnings__detail">{item.text}</div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}
                            {data.filter((item) => item.id === 133).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-1">
                                                <img loading="lazy" src={item.image} alt="List Number image" />
                                                <div className="CoursePageLearnings__detail">{item.text}</div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}
                            {data.filter((item) => item.id === 134).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-2">
                                                <img loading="lazy" src={item.image} alt="List Number image" />
                                                <div className="CoursePageLearnings__detail">{item.text}</div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}
                            {data.filter((item) => item.id === 135).map(
                                (item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="CoursePageLearnings__details-list-item CoursePageLearnings__details-list-item-3">
                                                <img loading="lazy" src={item.image} alt="List Number image" />
                                                <div className="CoursePageLearnings__detail">{item.text}</div>
                                            </div>

                                        </div>
                                    )
                                }
                            )}

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default MasterCompatative;