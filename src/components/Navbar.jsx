import React from 'react'
import { header } from '../assets/images/special'
import {About, Beardle, Contact, Landing, Members} from '.'
import {Link} from "react-router-dom"
import { textVariant } from '../utils/motion'
import {motion} from 'framer-motion'
import { styles } from '../styles'
const Navbar = () => {
  return (
    <>
      <nav className='w-full flex items-center py-5 fixed top-0 z-20'>
      <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[40px] sm:top-[100px] max-w-7xl mx-0 flex flex-row items-start gap-3 sm:gap-10 `}>
        <Link to="/">
          <div className='header-container' to>
            <img src={header} className='header '/>
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
          <Link to="/beardle" className='page-link'>
            Beardle
            </Link>
          </li>
          <li className='links'>
          <Link to="/contact" className='page-link'>
            Contact
            </Link>
          </li>
        </ul>
        </motion.div>
        <div className='line' id='line-two'></div>
      </nav>
    </>
    
  )
}

export default Navbar