import React from 'react';

import ContactImage from '../../Images/contact.jpg';

const Contact = () => {
    return (
        <div className="Contact container pt-5">
            <h1 className="text-center">Contact Us</h1>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12 px-4">
                    <div>
                        <h3>Leave us a message</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Your Name/Company</label>
                            <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Your Email</label>
                            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                            <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="4" required></textarea>
                        </div>                       
                        <button className="btn btn-dark px-4"><i className="fas fa-paper-plane me-2"></i>Send Message</button>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <img className="p-4 img-fluid " src={ContactImage}  alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;