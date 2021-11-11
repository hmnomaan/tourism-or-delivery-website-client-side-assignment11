import React, { useEffect, useState } from 'react';

import ManageOrder from './ManageOrder/ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updateId, setUpdateId] = useState('');

    //----------------    Get All Order Details    ---------------
    useEffect(() => {
        fetch(`https://intense-fortress-41272.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [updateId]);

    //----------------    Handle Cancel Order Button   ---------------
    const handleCancelBookingButton = id => {
        const processed = window.confirm('Are you sure you want to delete?');
        if (processed) {
            fetch(`https://intense-fortress-41272.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                        alert('Deleted');
                    }
                });
        }
    }

    //----------------    Handle Approve Button    ---------------
    const handleApproveButton = id => {
        fetch(`https://intense-fortress-41272.herokuapp.com/orderUpdate/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUpdateId(id);
                }
            });
    }

    return (
        <div className="manage-all-orders py-5 container">
            <h1 className="text-center">Manage All Orders</h1>
            {
                //----------------    display Orders    ---------------
                orders?.map(order => <ManageOrder
                    key={order._id}
                    order={order}
                    handleCancelBookingButton={handleCancelBookingButton}
                    handleApproveButton={handleApproveButton}
                >
                </ManageOrder>)
            }
        </div>
    );
};

export default ManageAllOrders;