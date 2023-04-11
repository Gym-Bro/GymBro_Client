import React, { useState } from 'react'
import css from './Modal.module.css'

export const Modal = ({children}) => { 
    
  return (
    <article className='modal open'>
        <div className={css.container}>
        {children}
        </div>
        </article>
  )
}
