'use client'

import React, { useState } from 'react'

export default function Dashboard() {

  const [data,prevData]= useState({})
  const [botId,prevId]=useState()


  const res = fetch(`https://assist-server-ftyjl.ondigitalocean.app/bot/${botId}`)
  

  return (
    <div>dashboard</div>
  )
}
