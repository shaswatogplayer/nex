import React, { useState } from 'react'
import CookieUse from './policies/CookieUse'
import PrivacyPolicies from './policies/PrivacyPolicies'
import TermsOfServices from './policies/TermsOfServices'

export default function IndexModal({isOpen,onClose,content}) {

  if(!isOpen) return null;

  return (
    <div className='modal-container'>
          
            {content === 'CookieUse'? (
              <div className='modal-index-content'>
                <h3>Cookie Use</h3>
                <CookieUse />
              </div>
            ) : content === 'PrivacyPolicies'? (
              <div className='modal-index-content'>
                <h3>Privacy Policy</h3>
                <PrivacyPolicies />
              </div>
            ) : (
              <div className='modal-index-content'>
                <h3>Terms of Service</h3>
                <TermsOfServices />
              </div>
            )}

            <button className='btn-default white' onClick={onClose}>Close</button>

      </div>
  )
}
