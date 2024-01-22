import React from 'react'
import './newsletter.css'
import images from '../../image'
import { useState} from 'react'
import {useForm} from 'react-hook-form'
import Success from '../Success/Success'

const Newsletter = () => {

  const { register,handleSubmit,formState:{errors} } = useForm();
  const [input , setInput] = useState("")  
  const [success , setSuccess] = useState(false) 

  const onSubmit = () =>{
    if(!errors.email){
      console.log('correct');
      setSuccess(true)
    }
    else{
      console.log('incorect');
    }
  }  

  const handleSuccess = () =>{
    window.location.reload(false)
    setSuccess(false)
    setInput("")
  }

  return success?<Success email={input} onClick={() => handleSuccess()} />: (
    <>
    <div className="newsletter">
    <div className='container'>
      <div className="left_content">
        <header>
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </header>

        <div className="updates">
          <ul>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
        </div>

        <div className="form_section">
          <form onSubmit={handleSubmit(onSubmit)} >
            <label >
              <h6>Email address</h6>               
              <h6 className='error' >{errors.email?.type === "required" && "Email is required"}
        {errors.email?.type === "pattern" && "Valid email required "}</h6>
            </label>
                       
            <input 
            type="text"
            placeholder='email@company.com'
            style={errors.email?{backgroundColor:"#FFE8E6",border:"1px solid hsl(4, 100%, 67%)",color:"hsl(4, 100%, 67%)"}:{}}
            {...register("email",{required:true , pattern:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g})}
            onChange={(e) => setInput(e.target.value)}            
            />            

            <button   className='subscribe_button'  >Subscribe to monthly newsletter</button>            
            
          </form>
        </div>
      </div>
      <div className="right_content">
        <img className='desktop_img' src={images.illustrationsignupdesktop} alt="" />
        <img className='mobile_img' src={images.illustrationsignupmobile} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}

export default Newsletter
