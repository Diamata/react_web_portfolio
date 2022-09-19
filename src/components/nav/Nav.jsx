import React from "react";
import './nav.css';
import {VscHome} from 'react-icons/vsc';
import {FiUser} from 'react-icons/fi';
import {AiOutlineBook} from 'react-icons/ai';
import {RiServiceLine} from 'react-icons/ri';
import {TbMessage} from 'react-icons/tb';
import {useState} from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return  (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><VscHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage/></a>
        </nav>
    )
}

export default Nav;