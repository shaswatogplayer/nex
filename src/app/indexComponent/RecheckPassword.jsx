"use client"

import React, { useState } from 'react'
import { CheckmarkCircleOutline } from '@/components/svgs/Icons'
import styles from './indexComponent.module.css'

export default function RecheckPassword({password}) {

//    Still on development

    const [isValid,setIsValid] =useState({
        passLen:false,
        number:false,
        spesial:false,
        lowerCap:false
    });
    const [passwordText,setPasswordText]=useState(password)

    if(passwordText.length >= 8){
        setIsValid({passLen:true})
    }

    return (
        <div className={styles.passwordCheck}>
            <p>Your password must contain:</p>
            <br />
            <div className={styles.state}>
                <CheckmarkCircleOutline className={styles.stateIcon}/>
                <div>8 characters or more with no space</div>
            </div>
            <div className={styles.state}>
                <CheckmarkCircleOutline className={styles.stateIcon}/>
                <div>At least one number</div>
            </div>
            <div className={styles.state}>
                <CheckmarkCircleOutline className={styles.stateIcon}/>
                <div>At least one of the special characters</div>
            </div>
            <div className={styles.state}>
                <CheckmarkCircleOutline className={styles.stateIcon}/>
                <div>At least one capital and lowercase letter</div>
            </div>
        </div>
    )
}
