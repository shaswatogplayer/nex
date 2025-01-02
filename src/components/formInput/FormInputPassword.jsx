'use client'

import React, { useState } from 'react'
import * as Icons from '../svgs/Icons'

export default function FormInputPassword({icon,label,className, ...inputProps}) {

    const LeftIcon = Icons[icon]
    const PassOff = Icons['EyeOffOutline']
    const PassOn = Icons['EyeOutline']

    const [passVisible,setPassVisible]= useState(false);


    const handleClick =()=>{
        setPassVisible(!passVisible)
    }

  return (
    <div className={className}>
        <div className="input-group">
            
            {LeftIcon && <LeftIcon className='ion-icon'/>}
            <input type={passVisible?'text':'password'}
            placeholder=' '
            {...inputProps}
            />
            <label className='input-label'>{label}</label>
            {passVisible?
                PassOn && <PassOn onClick={handleClick} className='ion-icon clickable'/>:
                PassOff && <PassOff onClick={handleClick} className='ion-icon clickable'/>}
        </div>

    </div>
    )
}
