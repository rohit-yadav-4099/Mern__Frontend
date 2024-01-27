import React, { useEffect, useState } from "react";
import './Project.css';
import { NavLink } from 'react-router-dom'

const Project = () => {
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
        {data.filter((item) => item.id === 56).map(
                (item, index) => {
                    return (
                        <div className="project-container">
                            <h1>HTML BLOG PAGE</h1>
                            <div className='project-container-main'>
                                <div className="project-container-left">
                                    <h3>Repo Link</h3>
                                    <NavLink to={item.repolink}><p>{item.repolink}</p></NavLink><br />
                                    <h3>Host Link</h3>
                                    <NavLink to={item.hostlink}><p>{item.hostlink}</p></NavLink>
                                </div>
                                <div className="project-container-right">
                                    <h5>About this Project</h5>
                                    <p>{item.about}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}

            
      {data.filter((item) => item.id === 57).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>Todo App UI Web</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                    <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}

{data.filter((item) => item.id === 58).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>Todo App UI Mobile</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                    <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}


      
{data.filter((item) => item.id === 59).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>Reminder Clock App</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                  <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}


      {data.filter((item) => item.id === 60).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>Todo App JS</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                  <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}

{data.filter((item) => item.id === 61).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>React Blog Web App</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                    <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}

      
{data.filter((item) => item.id === 62).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1>React Blog App Backend</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                    <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}

{data.filter((item) => item.id === 63).map(
        (item, index) => {
          return (
            <div key={index}>
              <div className="project-container">
                <h1> Ecommerce Web App</h1>
                <div className='project-container-main'>
                  <div className="project-container-left">
                    <h3>Repo Link</h3>
                    <NavLink to={item.repolink}>{item.repolink}</NavLink><br /><br />
                    <h3>Host Link</h3>
                    <NavLink to={item.hostlink}>{item.hostlink}</NavLink>
                  </div>
                  <div className="project-container-right">
                    <h5>About this Project</h5>
                    <p>{item.about}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}

    </>
  )
}

export default Project