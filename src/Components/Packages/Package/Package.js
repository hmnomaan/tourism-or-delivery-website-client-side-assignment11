import React from 'react';
import './Package.css'

const Package = (props) => {
    const { _id, image, name, duration, details, price } = props._package;
    const { handleBookNowClick } = props;
    return (
        <div className="package">
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
                        <h5 className="px-2"> {price} BDT </h5>
                        <button onClick={() => handleBookNowClick(_id)} className="w-100 btn btn-book-now">Book Now</button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Package;