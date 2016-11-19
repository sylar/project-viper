import React, { Component } from 'react'
import { Link } from 'react-router'
import style from './style.css'

const MainLayout = ({ children }) => (
  <div className={style.image}>
    <header className="w-100 ph3 pv3 ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        <Link className="link dim black-60 dib mr3 no-underline" to='/'>Go Home</Link>
        <Link className="link dim black-60 dib mr3 no-underline" to='/welcome'>The Welcome Note</Link>
        <Link className="link dim black-60 dib mr3 no-underline" to='/image'>See the image</Link>
      </nav>
    </header>
    <div className='vh-100 wh-100 '>
      { children }
    </div>
  </div>
)

export default MainLayout
