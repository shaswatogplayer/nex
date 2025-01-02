import React from 'react'
import styles from './banner.module.css'

export default function Banner({children,type}) {
  return (
    <div className={`heading-small-medium ${styles[type]}`}>{children}</div>
  )
}
