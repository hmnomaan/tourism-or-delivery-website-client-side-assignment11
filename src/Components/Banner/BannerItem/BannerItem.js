import React from 'react';
import './BannerItem.css'

const BannerItem = (props) => {
    const { background, subtitle, title, description, button, handleButtonListener, image } = props;

    return (
        <div style={{ backgroundImage: `url(${background})` }}
            className="banner-item container-fluid">
            <div className="container p-5">
                <h4 className="ps-md-5">{subtitle}</h4>
                <h1 className="ps-md-5">{title}</h1>
                <p className="ps-md-5">{description}</p>
                <button onClick={handleButtonListener} className="btn btn-dark ms-md-5 px-4">{button}</button>
            </div>
        </div>
    );
};

export default BannerItem;