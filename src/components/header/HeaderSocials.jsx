import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaArtstation} from 'react-icons/fa';

const HeaderSocials = () => {
    return  (
        <div className='header__socials'>
            <a href="http://www.linkedin.com/in/malyutina-diana" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/Diamata" target='_blank'><FaGithub/></a>
            <a href="https://www.artstation.com/dianamalyutina" target='_blank'><FaArtstation/></a>
        </div>
    )
}

export default HeaderSocials;