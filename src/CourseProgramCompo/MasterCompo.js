import React, { useEffect, useState } from "react";
import '../CSScompo/MasterCompo.css';

const MasterCompatative = () => {

    const [data, setData] = useState([])
    console.log(data)

    const [selectedOption, setselectedOption] = useState("1st May")
    const handleOptionChange = (event) => {
        setselectedOption(event.target.value)

    }

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

                {/* <div className="Competitive_programing-container">
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

                                                  

                                                </div>

                                            </div>
                                        )
                                    }
                                )}
                            </li>
                        </ul>

                    </div>

                </div> */}

                <div id="CourseFeatures__main-section" className="CourseFeatures">
                    <h2>
                        <span>Master Competitive Programming With Us</span>
                    </h2>
                    <div className="CourseFeatures_container">
                        <div className="CourseFeatures_bg-img-container">
                            <picture className="CoursePageMasthead__picture">
                                <source srcset="\masterimage\Vector.svg 1x" type="image/webp" />
                                <img src="\masterimage\Vector.svg" />
                            </picture>
                        </div>
                        <ul>
                            <li>
                                <div className="CourseFeatures_list-item-even">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_Personalised+Program.webp" alt="Personalised Program" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>Personalised Program</h5>
                                        <p>Master your skills from where you are, with India's only personalised program </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-odd">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_Expert+Mentors.webp" alt="Expert Mentors" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>Expert Mentors</h5>
                                        <p>Get career guidance, mentorship, time management strategies from industry experts</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-even">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_Quick+Doubt+Support.webp" alt="Quick Doubt Support" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>Quick Doubt Support</h5>
                                        <p>Get your doubts cleared by coding experts and have a smooth learning</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-odd">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_Get+certificate-01.webp" alt="Get Certified" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>Get Certified</h5>
                                        <p>Get recognized on course completion with highly reputed PrepBytes certificates</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-even">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_250+Coding+Questions.webp" alt="250+ Coding Questions" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>250+ Coding Questions</h5>
                                        <p>Best way to master a language is by coding in the language</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-odd">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_20+Live+Coding+Sessions.webp" alt="20+ Live Coding Sessions " />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>20+ Live Coding Sessions </h5>
                                        <p>Code live and get mentorship with the top-rated coders of the country.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-even">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_80+Hours+of+Videos.webp" alt="50+ Hours of Videos" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>50+ Hours of Videos</h5>
                                        <p>Recorded video lectures by experts to help you understand the concepts easily</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="CourseFeatures_list-item-odd">
                                    <div className="CourseFeatures_img-container">
                                        <img loading="lazy" src="\masterimage\Icons_80+Tech-Apti+MCQ+Tests.webp" alt="40+ Coding quizes" />
                                    </div>
                                    <div className="CourseFeatures_details-container">
                                        <h5>40+ Coding quizes</h5>
                                        <p>Small quizzes after every topic to give you a quick check on your understandings</p>
                                    </div>
                                </div>
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

                <div className="CourseSyllabus-main">
                    <h5 className="CourseSyllabus__main-heading"><span>Curriculum</span></h5>
                    <div className="CourseSyllabus-container">
                        <div className="CourseSyllabus-container-subject">
                            <div className="CourseSyllabus__syllabus-subject-not-selected ">
                                <img className="CourseSyllabus__syllabus-subjects-img" src="https://prepbytes-uat-images.s3.ap-south-1.amazonaws.com/13.webp" alt="Subject Image" />
                                <div className="CourseSyllabus__syllabus-subjects-text" style={{ color: "#00a6ec" }}>Language Fundamentals (Choose any one of C/C++/Java/Python)</div>
                            </div>
                            <div className="CourseSyllabus__syllabus-subject-not-selected ">
                                <img className="CourseSyllabus__syllabus-subjects-img" src="\masterimage\Icon2.webp" alt="Subject Image" />
                                <div className="CourseSyllabus__syllabus-subjects-text">Data Structures and Algorithms</div>
                            </div>
                            <div className="CourseSyllabus__syllabus-subject-not-selected CourseSyllabus__syllabus-subject-last-item">
                                <img className="CourseSyllabus__syllabus-subjects-img" src="\masterimage\Icon3.webp" alt="Subject Image" />
                                <div className="CourseSyllabus__syllabus-subjects-text">Competitive Maths</div>
                            </div>
                            <div className="CourseSyllabus__syllabus-image">
                                <img className="CourseSyllabus__syllabus-img" alt="Syllabus image" src="\masterimage\Curriculum-Image.webp"></img>
                            </div>

                        </div>
                        <div className="CourseSyllabus-container-right">
                            <ul class="CoursePage-scrollbar CourseSyllabus__category-list" style={{ height: "402px" }}><li class="subtopic-list-item">C/C++/Java/Python Overview</li><li class="subtopic-list-item">Logic Building</li><li class="subtopic-list-item">Data Types</li><li class="subtopic-list-item">Loops and Conditions</li><li class="subtopic-list-item">Pattern Programming</li><li class="subtopic-list-item">Operators and Expressions</li><li class="subtopic-list-item">Input/Output</li><li class="subtopic-list-item">Functions</li><li class="subtopic-list-item">Functions and OOPs(Python)</li><li class="subtopic-list-item">Pointers(C/C++)</li><li class="subtopic-list-item">Arrays</li><li class="subtopic-list-item">Structures</li><li class="subtopic-list-item">Character Arrays and Strings</li><li class="subtopic-list-item">Recursion</li><li class="subtopic-list-item">Bit Manipulation</li><li class="subtopic-list-item">STLs(C++)</li><li class="subtopic-list-item">Collections (Java)</li><li class="last-subtopic">Set, List, Tuples, Dictionary(Python)</li></ul>

                        </div>

                    </div>

                </div>

                <div className="CoursesPage__container-batchDetails">
                    <div id="CoursePageBatchDetails__section_main_container_id" className="CoursePageBatchDetails__section_main_container">
                        <div id="CoursePageBatchDetails__section_container_id" className="CoursePageBatchDetails__section_container">
                            <h4 className="CoursePageBatchDetails__heading"> SELECT BATCH </h4>
                            <div className="CoursePageBatchDetails__section">
                                <div className="CoursePageBatchDetails__batch_text_section">
                                    <div className="CoursePageBatchComponent__date_container">
                                        <div className="CoursePageBatchComponent_radio_buttons CoursePageBatchComponent_radio_buttons_selected">
                                            <label for="1stMay" className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no">
                                                <input className="CoursePageBatchComponent__radio_input"
                                                    type="radio"
                                                    id='1stMay'
                                                    value="1st May"
                                                    name='selectBatch'
                                                    checked={selectedOption === "1st May"}
                                                    onChange={handleOptionChange} />
                                                <span className="CoursePageBatchComponent__radio_text_container">
                                                    <h5 className="CoursePageBatchComponent__radio_batch_start_date">1st May</h5>
                                                    <p className="CoursePageBatchComponent__reg_end_date_selected">Enrolment Started</p>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="CoursePageBatchComponent_radio_buttons CoursePageBatchComponent_radio_buttons_not-selected">
                                            <label className="CoursePageBatchComponent_radio_label CoursePageBatchComponent_radio_label_top_no" for="15thMay">
                                                <input className="CoursePageBatchComponent__radio_input"
                                                    type="radio"
                                                    id='15thMay'
                                                    value="15th May"
                                                    name='selectBatch'
                                                    checked={selectedOption === "15th May"}
                                                    onChange={handleOptionChange} />
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