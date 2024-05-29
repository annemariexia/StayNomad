import React from 'react'
import "./NavBar.css"
import Logo from "../assets/Logo-red.png"

function NavBar() {
  return (
    <>
        <header className='header'>
            <div>
                <img src={Logo} alt="StayNomad Logo" className='logo'/>
            </div>
            <div class="navtabs">
            <div class="navtab active" data-target="home">Find a Stay</div>
            <div class="navtab" data-target="about">About</div>
            <div class="navtab" data-target="contact">Contact</div>
            <div class="underline"></div>
            </div>
        </header>
    </>
  )
}

export default NavBar
