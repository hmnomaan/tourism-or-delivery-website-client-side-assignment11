import React from 'react';
import './Offer.css'

const Offer = (props) => {
    const { _id, image, name, duration, details, regularPrice, discountedPrice } = props.offer;
   
    return (
        <div className="offer">
            <div className="col h-100">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="duration">{duration}</div>
                        <h5 className="card-title">{name}</h5>
                        <ul className="card-text">
                            {
                                details.map(detail => <li
                                    key={detail}
                                >
                                    <i className="fas fa-check"></i>{detail}</li>)
                            }
                        </ul>

                    </div>
                    <div className="card-footer">
                        <h5> <span>{regularPrice}</span> {discountedPrice} BDT </h5>
                        <hr />
                        <h6 className="text-center"><i className="fas fa-phone-alt me-2"></i>Call for Booking</h6>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Offer;