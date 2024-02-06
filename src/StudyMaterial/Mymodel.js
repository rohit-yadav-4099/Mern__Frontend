import React from 'react'
import './Model.css';
import { NavLink } from 'react-router-dom'

const Mymodel = ({message,onDialog}) => {
  return (
    <div style={{
        position:"fixed",
        top:"0",
        left:'0',
        right:"0",
        bottom:"0",
        backgroundColor:"#fff"
    }}>
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            position:"absolute",
            top:"30%",
            left:"50%",
            transform:"translate(-50%, -50%)"
        }}>
            <h3>Are you sure you want to Buy?</h3>
            <div style={{
                display:"flex",
                alignItems:"center",
                gap:"20px",
                marginTop:"20px"
                
            }}>
                <NavLink to="/success">
                <button onClick={()=>onDialog(true)} style={{background:"green",color:"white", width:"40px"}}>Yes</button>
                </NavLink>
                <NavLink to="/">
                <button onClick={()=>onDialog(false)} style={{background:"red",color:"white" ,width:"40px"}}>No</button>
                </NavLink>
            </div>

        </div>
    {/* <div className='modal-container'>
        <h2>Payment</h2>
        <p>payment kar lo</p>
        
        <NavLink to="/success"><button>Yes</button></NavLink>
        <NavLink to="/mock-tests"><button>No</button></NavLink>
        
    </div> */}
    </div>
  )
}

export default Mymodel