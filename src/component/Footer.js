import React, { Fragment } from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <Fragment>
        <div className='footer-main'>
            <div className='footer-sub'>
                <div className='footer-logo'>
                The Generics
                </div>
                <div className='footer-icons'>
                    <div className='footer-icon1'>
                    <img src={'https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg'} />
                    </div>
                    <div className='footer-icon2'>
                    <img src={'https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png'} />
                    </div>
                    <div className='footer-icon3'>
                    <img src={'https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png'} />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Footer