import React from 'react'
import { header } from '../assets/images/special'
import {About, Beardle, Contact, Landing, Members} from '.'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <>
      <nav>
        <div className='header-container'>
          <img src={header} className='header'/>
        </div>
        <div className='line'></div>
        <ul>
          <li className='links'>
            <Link to="/members">
            Members
            </Link>
          </li>
          <li className='links'>
            <Link to="/about">
              About
            </Link>
          </li>
          <li className='links'>
          <Link to="/Beardle">
            Beardle
            </Link>
          </li>
          <li className='links'>
          <Link to="/Contact">
            Contact
            </Link>
          </li>
        </ul>
        <div className='line'></div>
      </nav>
    </>
    
  )
}

export default Navbar