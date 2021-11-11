import React from 'react';

import BookedImage from '../../../Images/booking.jpg';

const Success = () => {
    return (
        <div className="container text-center my-5">
            <h1>Your Booking is Successful!</h1>
            <h4>Thank for Staying with TourInChina</h4>
            <p>Please check your email, our customer represitive will contact you soon for schedule and payment.</p>
            <img className="img-fluid p-4" src={BookedImage} alt="" />
        </div>
    );
};

export default Success;