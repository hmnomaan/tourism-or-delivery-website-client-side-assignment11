import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Package from './Package/Package';


const Packages = () => {

    const [packages, setPackages] = useState([]);
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    //  ----------------    Get All Packages Details   ---------------
    useEffect(() => {
        fetch('https://intense-fortress-41272.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                setIsLoading(false);
            });
    }, []);



    //  ----------------    Handle Book Now On Click  ---------------
    const handleBookNowClick = id => {
        history.push(`/booking/${id}`);
    }

    return (
        <div className="packages my-5 container">
            <h2 className="text-center py-3">Regular Packages</h2>
            <p className="text-muted text-center">We Provide Best Tour Experience In the World. Try Our Packages.</p>
            {
                isLoading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                            {

                                //  ----------------    Display All Packages   ---------------
                                packages?.map(_package => <Package
                                    key={_package._id}
                                    handleBookNowClick={handleBookNowClick}
                                    _package={_package}
                                >
                                </Package>)
                            }
                        </div>
                    )
            }

        </div >
    );
};

export default Packages;