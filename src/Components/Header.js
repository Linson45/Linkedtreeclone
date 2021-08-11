import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1>The Only Link You’ll Ever Need</h1>
                <p classname="details">
                Connect audiences to all of your content with just one link
                </p>
                <a href="#" className='cv-btn'>Get Started</a>
            </div>
        </div>
    )
}

export default Header
