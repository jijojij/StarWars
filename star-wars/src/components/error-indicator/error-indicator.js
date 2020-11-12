import React from 'react'
import './error-indicator.css'
import img   from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={img} alt='error-image'/>
            <span className='boom'>BOOM</span>
        </div>
    )
}

export default ErrorIndicator