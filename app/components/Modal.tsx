import React, { useState } from 'react'
import css from './Modal.module.css'
import { useRouter } from 'next/navigation'


interface props{
  children: JSX.Element | JSX.Element[]
}
export const Modal = ({children}:props) => { 
    const route = useRouter()
  return (
    <article className='modal open'>
        <div onClick={(e)=> e.stopPropagation} className={css.container}>
        {children}
        </div>
        </article>
  )
}
