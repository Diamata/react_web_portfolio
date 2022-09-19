import React from "react";
import './header.css';
import CTA from './CTA';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return  (
        <section id='header'>
            <header>
                <div className="container header__container">
                    <h5>Hello, I'm</h5>
                    <h1>Diana Malyutina</h1>
                    <h5 className="text-light">Frontend Developer</h5>
                    <CTA/>
                    <HeaderSocials/>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>
            </header>
        </section>

    )
}

export default Header;