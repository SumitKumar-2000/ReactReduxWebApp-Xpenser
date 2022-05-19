import React from 'react'
import '../header/header.css'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                Xpenser
            </div>
            <div>
              <i className="bi bi-credit-card-2-back-fill header-icon"></i>
            </div>
        </div>
    </div>
  )
}

export default Header