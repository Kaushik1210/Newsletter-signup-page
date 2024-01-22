import React from 'react'
import './success.css'
import images from '../../image'

const Success = (props) => {
  return (
    <>
    <div className="success_page">
        <div className="success_content">
            <img src={images.iconlist} alt="" /> 
            <h1>Thanks for subscribing!</h1> 
            <p>A confirmation email has been sent to <strong>{props.email}</strong>. Please open it and click the button inside to confirm your subscription.</p>
            <button className='dismiss_button' onClick={props.onClick}>Dismiss message</button>
        </div>    
    </div> 
    </>
  )
}

export default Success
