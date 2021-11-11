import React from 'react';
import './Discount.css'
import Sale from '../../Images/sale.jpg';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div className="discount">
            <div className="container">
                <div className="row">
                    {/* -----------------   Discount Image   --------------- */}
                    <div className="col-md-6 col-12">
                        <img className="img-fluid p-5" src={Sale} alt="" />
                    </div>

                    {/* -----------------   Discount Text   --------------- */}
                    <div className="col-md-6 col-12 p-5 d-flex align-items-center">
                        <div>
                            <h1 className="title"> Biggest <span>11.11 </span> Shopping day is on the way!</h1>
                            <h4>Follow our website and get attractive discount upto 50%!</h4>
                            <Link className="btn btn-dark px-4 mt-3" to="/packages">View All Packages</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;