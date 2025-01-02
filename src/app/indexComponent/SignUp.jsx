import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../index.module.css'
import FormInput from '../../components/formInput/FormInput'
import FormInputPassword from '../../components/formInput/FormInputPassword'
import FormButton from '../../components/button/FormButton'
import Link from 'next/link'
import IndexModal from '../../components/modal/IndexModal'
import RecheckPassword from './RecheckPassword'


export default function SignUp({leftPosition}) {

  /*const navigate = useNavigate();*/


  // handleInput
  const initialFormData={
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password:""
  };

  const [formData,setFormData] = useState(initialFormData)
  const [error,setError] =useState(false)

  const handleChange = (e) =>{
    const{name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  const handleChangePassword = (e) => {
    handleChange(e);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.first_name || !formData.email || !formData.password || !formData.confirm_password) {
        alert("Please fill in all required fields.");
        return;
    }

    // Validate password match
    if (formData.password !== formData.confirm_password) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const response = await axios.post(`https://nexus-server-utev7.ondigitalocean.app/auth/signup`, formData);
        console.log(response.status);
        console.log('Api Response:', response.data);
        setFormData(initialFormData); // Reset form on succes
        navigate('/verify-email');
    } catch (error) {
        console.error('Error during sign up:', error);
        setError(true);
    }
};


  const handleError=()=>{
    setError(false)
  }


  //controlling modal popup
  const [isModalOpen,setIsModalOpen]=useState(false);
  const [modalContent,setModalContent]=useState(null);
  
  const openModal = (content) =>{
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal=()=>{
    setIsModalOpen(false)
  };


  return (
    <div className={styles.signUp} style={{left:`${leftPosition}px`}}>
        <div className="big-title">Create your account</div>
        <div className="sub-title-regular text-center">Start your journey here</div>

        <form onSubmit={handleSubmit} className={styles.indexInputContainer}>
            <div className='main-container-row-spacebetween gap20'>
              <FormInput icon='PersonOutline' label='First Name'className='container-column-start gap10' type='text' name="first_name" 
                          onChange={handleChange}
                          onFocus={handleError}
                          ></FormInput>
              <FormInput icon='PersonOutline' label='Last Name'className='container-column-start  gap10' type='text' name="last_name" 
                          onChange={handleChange}
                          onFocus={handleError}
                          ></FormInput>
            </div>
            
            <FormInput icon='MailOutline' label='Email'className='container-column-start full-width gap10' type='email' name="email" 
                        onChange={handleChange}
                        onFocus={handleError}
                        ></FormInput>
            <div className='position-relative full-width'>
              {/* <RecheckPassword /> */}
              <FormInputPassword icon='KeyOutline' label='Password'className='container-column-start full-width gap10'  name="password" 
                          onChange={handleChangePassword}
                          onFocus={handleError}
                          ></FormInputPassword>
            </div>
            
            <FormInputPassword icon='KeyOutline' label='Confirm Password'className='container-column-start full-width gap10' name="confirm_password" 
                        onChange={handleChangePassword}
                        onFocus={handleError}
                        ></FormInputPassword>
            
            <div className={styles.disclaimer}>By signing up, you agree to our
              <span className={styles.spanLink} onClick={()=> openModal('TermOfService')}> Terms of Service</span> and that you have read our <span className={styles.spanLink} onClick={()=> openModal('PrivacyPolicies')}>Privacy Policy</span>
              , including our <span className={styles.spanLink} onClick={()=> openModal('CookieUse')}>Cookie Use</span>.
            </div>
            
            <FormButton text='Sign Up'/>
            
        </form>
        <IndexModal isOpen={isModalOpen} onClose={closeModal} content={modalContent}></IndexModal>
    </div>
  );
}
