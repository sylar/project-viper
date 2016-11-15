import React, { Component } from 'react'
import { Link } from 'react-router'

const Header = () => (
  <div>
    <li><Link to='/welcome'>The Welcome Note</Link></li>
  </div>
)

export default Header
