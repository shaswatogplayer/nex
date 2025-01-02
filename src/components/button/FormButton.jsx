import React from 'react'
import { LogInOutline } from '../svgs/Icons'

export default function FormButton({text,name}) {
  return (

        <button type='submit' name={name} className='btn-icon-right full-width'>
            {text}
            <LogInOutline className='ion-icon color-white'/>
        </button>

  )
}
