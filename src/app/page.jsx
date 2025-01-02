'use client'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './index.module.css'
import Login from './indexComponent/Login'
import SignUp from './indexComponent/SignUp'
import IndexModal from '../components/modal/IndexModal'
import VerifyEmail from './indexComponent/VerifyEmail';

export default function Index() {

  useEffect(() => {
    // Check if sessionStorage already contains the "isLoginPage" item.
    const page = sessionStorage.getItem('isLoginPage');

    // If it's not set, it means this is the first page load on the login page.
    if (!page) {
      // Set the "isLoginPage" item in sessionStorage.
      sessionStorage.setItem('isLoginPage', 'true');
    }
  }, []);

  const [isModalOpen,setIsModalOpen]=useState(false);
  const [modalContent,setModalContent]=useState(null);
  const [isLoginPage,setIsLoginPage]=useState(true);
  

  const openModal = (content) =>{
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal=()=>{
    setIsModalOpen(false)
  };

  const handlePage=(valueName)=>{
    if(valueName === 'login'){
      setIsLoginPage(true)
      sessionStorage.setItem("isLoginPage",'true')
    }else{
      setIsLoginPage(false)
      sessionStorage.setItem("isLoginPage",'false')
    }
  };
  
  

  return (
    <div className={styles.indexMain}>
      
      <div className={styles.left}>
      
      </div>
      <div className={styles.right}>
        <div className={styles.contentWrapper}>
          <div className={`${styles.indexHeader} prevent-select`}>
            <div className={`heading-medium-medium text-center pointer ${styles.textHeader} ${isLoginPage? styles.active:''}`} onClick={()=>handlePage('login')}>Login</div>
            <div className={styles.vLine}></div>
            <div className={`heading-medium-medium text-center pointer ${styles.textHeader} ${isLoginPage? '':styles.active}`} onClick={()=>handlePage('signUp')}>Sign Up</div>
          </div>

          <div className={styles.relative}>
            <Login leftPosition={isLoginPage ? 0 :-500}/>
            <SignUp leftPosition={isLoginPage ?500:0}/>
          </div>
        </div>
        <div className={styles.indexFooter}>
          <span className='clickable' onClick={()=> openModal('TermOfService')}>Terms of Service | </span>
          <span className='clickable' onClick={()=> openModal('PrivacyPolicies')}>Privacy Policy | </span>
          <span className='clickable' onClick={()=> openModal('CookieUse')}>Cookie Use</span>
        </div>  

        
        
      </div>

      <IndexModal isOpen={isModalOpen} onClose={closeModal} content={modalContent}></IndexModal>
      
    </div>
  )
}
/*'use client'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './index.module.css';
import Login from './indexComponent/Login';
import SignUp from './indexComponent/SignUp';
import VerifyEmail from './indexComponent/VerifyEmail';
import IndexModal from '../components/modal/IndexModal';

export default function Index() {
  useEffect(() => {
    // Check if sessionStorage already contains the "isLoginPage" item.
    const page = sessionStorage.getItem('isLoginPage');

    // If it's not set, it means this is the first page load on the login page.
    if (!page) {
      // Set the "isLoginPage" item in sessionStorage.
      sessionStorage.setItem('isLoginPage', 'true');
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
        <IndexModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} content={modalContent} />
      </div>
    </Router>
  );
}*/