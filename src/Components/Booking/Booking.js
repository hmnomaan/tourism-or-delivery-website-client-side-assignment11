import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import './Booking.css'
import useAuth from '../../Hooks/useAuth';

const Booking = (props) => {
    const { packageId } = useParams();
    const [_package, setPackage] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const { register, formState: { errors }, handleSubmit } = useForm();

    // ----------------------   Handle Form On Submit    ----------------------- 
    const onSubmit = data => {
        // ----------------------   Get Form data and add status   -----------------------
        const formData = data;
        formData.user = user.email;
        formData.packageId = _package._id;
        formData.status = "pending";

        // ----------------------   Send Form Data to Server    -----------------------
        fetch('https://intense-fortress-41272.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    history.push('../../bookingSuccessful');
                }
                else {
                    alert('Error Occurred!');
                }
            });
    }

    // ----------------------   Load Package Details    -----------------------
    useEffect(() => {
        fetch(`https://intense-fortress-41272.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackage(data));
    }, [])

    return (
        <div className="booking container">
            <h2 className="text-center my-5">Booking</h2>
            {
                // -----------  Booking Package Details  ------------
                <div className="package d-sm-flex align-items-center px-4 py-3">
                    <div>
                        <img className="package-image me-5" src={_package?.image} alt="" />
                    </div>
                    <div>
                        <h4>{_package.name}</h4>
                        <h5>Price: {_package.price}</h5>
                        <ul>
                            {
                                _package?.details?.map(detail => <li
                                    key={detail}
                                >
                                    <i className="fas fa-check"></i>{detail}</li>)
                            }
                        </ul>
                    </div>
                </div>
            }

            {/* ----------------------   Billing Information    ----------------------- */}
            <h4 className="mt-5 mb-3 text-center">Billing Information</h4>
            <div className="d-flex justify-content-center">
                {/* -----------------   Billing Information Form    --------------- */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* -----------------   User Email    --------------- */}
                    <p>User Email: {user?.email}</p>

                    {/* -----------------   Full Name    --------------- */}
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input defaultValue={user?.displayName || ""} type="text" className="form-control" {...register("name", { required: true })} />
                        <p className="text-danger">{errors.name?.type === 'required' && "Name is required"}</p>
                    </div>

                    {/* -----------------   Address    --------------- */}
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" placeholder="House, Street" className="form-control mb-2" {...register("address", { required: true })} />
                        <p className="text-danger">{errors.address?.type === 'required' && "House, Street is required"}</p>
                        <div className="d-flex">
                            <div>
                                <input type="text" placeholder="Thana/Upazilla" className="form-control me-2" {...register("thana", { required: true })} />
                                <p className="text-danger">{errors.thana?.type === 'required' && "Thana/Upazilla is required"}</p>
                            </div>
                            <div>
                                <input type="text" placeholder="District" className="form-control" {...register("district", { required: true })} />
                                <p className="text-danger">{errors.district?.type === 'required' && "District is required"}</p>
                            </div>
                        </div>
                    </div>

                    {/* -----------------   Payment Method    --------------- */}
                    <div className="mb-3">
                        <label className="form-label">Payment Method </label>
                        <select className="form-control" {...register("payment", { required: true })}>
                            <option value="cash" >Select a payment method (Default: Cash)</option>
                            <option value="cash">Cash</option>
                            <option value="bank">Bank</option>
                        </select>
                    </div>

                    {/* -----------------   Booking Button    --------------- */}
                    <input className="btn btn-dark" type="submit" value="Confirm Booking" />
                </form>
            </div>
        </div>
    );
};

export default Booking;