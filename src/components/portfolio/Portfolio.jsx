import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Calendar with JavaScript',
        github: 'https://github.com/Diamata/js-calendar',
        demo: 'http://176.99.11.170/calendar/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Todo list with JavaScript',
        github: 'https://github.com/Diamata/js-todolist',
        demo: 'http://176.99.11.170/todolist/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Sticky Notes with JavaScript',
        github: 'https://github.com/Diamata/js-stickers',
        demo: 'http://176.99.11.170/stickers/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Pizza store, NextJS, React',
        github: 'https://github.com/Diamata/react_next_pizza',
        demo: 'http://176.99.11.170/pizza/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'This portfolio with React',
        github: 'https://github.com/Diamata/react_web_portfolio',
        demo: 'http://176.99.11.170/'
    },
];

const Portfolio = () => {
    return  (
        <section id='portfolio'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className="btn" target='_blank'>GitHub</a>
                                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;