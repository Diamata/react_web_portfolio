import React from "react";
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {RiGalleryUploadFill} from 'react-icons/ri';

const About = () => {
    return  (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt=""/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>n+ years</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>n+ worldwide</small>
                        </article>

                        <article className="about__card">
                            <RiGalleryUploadFill className='about__icon'/>
                            <h5>Projects</h5>
                            <small>n+ completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, debitis dolor eum fugit ipsam itaque magni minima nam placeat possimus quaerat quod, quos saepe sapiente sed vitae voluptates! Deserunt, est.</p>

                    <a href="#contact" className='btn btn-primary'>Contact me!</a>
                </div>
            </div>
        </section>
    )
}

export default About;