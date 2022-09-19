import React from "react";
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
    return  (
        <section id='experience'>
            <h5>What skills I have</h5>
            <h2>My experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>CSS | SASS | SCSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>WebPack</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                    </div>
                </div>

                <div className="experience__side-skills">
                    <h3>More useful skills</h3>
                    <div className="experience__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Photoshop</h4>
                                <small className='text-light'>Advanced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Maya</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Blender</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Marmoset</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4>Substance Painter</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;