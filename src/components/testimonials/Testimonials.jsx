import React from "react";
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
    {
        avatar: AVTR1,
        name: 'Name One',
        review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eveniet nostrum rerum tempora. Architecto dignissimos enim expedita id ipsam molestiae molestias nihil sed, sunt tenetur, voluptas voluptatum. Consequatur consequuntur, ducimus?' ,
    },
    {
        avatar: AVTR2,
        name: 'Name Two',
        review: 'Ipsum lorem dolor sit amet, consectetur adipisicing elit. Distinctio eveniet nostrum rerum tempora. Architecto dignissimos enim expedita id ipsam molestiae molestias nihil sed, sunt tenetur, voluptas voluptatum. Consequatur consequuntur, ducimus?' ,
    },
    {
        avatar: AVTR3,
        name: 'Name Three',
        review: 'Dolor lorem ipsum  sit amet, consectetur adipisicing elit. Distinctio eveniet nostrum rerum tempora. Architecto dignissimos enim expedita id ipsam molestiae molestias nihil sed, sunt tenetur, voluptas voluptatum. Consequatur consequuntur, ducimus?' ,
    },
    {
        avatar: AVTR4,
        name: 'Name Four',
        review: 'Sit lorem ipsum dolor amet, consectetur adipisicing elit. Distinctio eveniet nostrum rerum tempora. Architecto dignissimos enim expedita id ipsam molestiae molestias nihil sed, sunt tenetur, voluptas voluptatum. Consequatur consequuntur, ducimus?' ,
    },
];

const Testimonials = () => {
    return  (
        <section id='testimonials'>
            <h5>Reviews from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper spaceBetween={30} pagination={{clickable: true,}} modules={[Pagination]} className="container testimonials__container">
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt='client avatar'/>
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;