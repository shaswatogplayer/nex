import React, { useState } from 'react'
import styles from '../index.module.css'
import FormInput from '../../components/formInput/FormInput'
import FormInputPassword from '../../components/formInput/FormInputPassword'
import FormButton from '../../components/button/FormButton'
import Link from 'next/link'
import axios from 'axios'
import Banner from '../../components/banner/Banner'


export default function Login({leftPosition}) {


  const initialFormData = {
    email: '',
    password: '',
  };
  
  const [formData,setFormData] = useState(initialFormData)
  const [error,setError] =useState(false)

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    try{
      const response = await axios.post(`https://nexus-server-utev7.ondigitalocean.app/auth/login`,formData)
      console.log(response.status)
      console.log('Api Response:',response.data);
      setFormData(initialFormData);
    }catch(error){
      setError(true)
    }
  }

  const handleError=()=>{
    setError(false)
  }

  return (
    <div className={styles.login} style={{left:`${leftPosition}px`}}>
        <div className="big-title">Welcome Back</div>
        <div className="sub-title-regular text-center">login to your dashboard</div>

        {
          error?<Banner type='error'>Incorrect username or password.</Banner>:''
        }
        

        <form onSubmit={handleSubmit} className={styles.indexInputContainer}>

            <FormInput 
              icon='MailOutline' 
              label='Email'
              className='container-column-start full-width gap10' 
              type='email' 
              name="email"
              autoComplete='off'
              value={formData.email}
              onChange={handleChange}
              onFocus={handleError}
            ></FormInput>

            <FormInputPassword 
              icon='KeyOutline' 
              label='Password'
              className='container-column-start full-width gap10' 
              name="password"
              value={formData.password}
              onChange={handleChange} 
              onFocus={handleError}
            ></FormInputPassword>
            
            <div className={styles.footerForm}>
                <div className="container-row gap10">
                    <input className='clickable' type="checkbox" name="rememberMe" />
                    <div className="heading-small-medium no-wrap">Remember Me</div>
                </div>
            <Link href=""className="heading-small-medium forgot-password">Forgot password? </Link>
                
            </div>

            <FormButton text='Login'/>
            
        </form>
    </div>
  )
}
