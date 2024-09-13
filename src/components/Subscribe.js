import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div>
      <div className="border">
        <div className='email-bar'>
            <input placeholder="Email" className='email-input'>
            </input>
            <button className='subscribe-button'>
                Subscribe
            </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
