import React from 'react'
import { header } from '../assets/images/special'
import {About, Beardle, Contact, Landing, Members} from '.'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <nav className='links-container'>
        <Link to="/">
          <div className='header-container' to>
            <img src={header} className='header'/>
          </div>
        </Link>
        <div className='line'></div>
        <ul className='link-stuff'>
        <li className='links'>
            <Link to="/" className='page-link'>
            Home
            </Link>
          </li>
          <li className='links'>
            <Link to="/members" className='page-link'>
            Members
            </Link>
          </li>
          <li className='links'>
            <Link to="/about" className='page-link'>
              About
            </Link>
          </li>
          <li className='links'>
          <Link to="/Beardle" className='page-link'>
            Beardle
            </Link>
          </li>
          <li className='links'>
          <Link to="/Contact" className='page-link'>
            Contact
            </Link>
          </li>
        </ul>
        <div className='line' id='line-two'></div>
      </nav>
    </>
    
  )
}

export default Navbar