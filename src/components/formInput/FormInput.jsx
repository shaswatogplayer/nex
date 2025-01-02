'use client'

import React, { useState } from 'react'
import * as Icons from '../svgs/Icons'

export default function FormInput({icon,label,className, ...inputProps}) {

    const LeftIcon = Icons[icon]
    

  return (
    <div className={className}>
        <div className="input-group">
            
            {LeftIcon && <LeftIcon className='ion-icon'/>}
            <input placeholder=' '
                {...inputProps} />
            <label className='input-label'>{label}</label>
            
        </div>

    </div>
    )
}
