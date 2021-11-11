import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    //  ----------------    Get Order Details Using Email   ---------------
    useEffect(() => {
        fetch(`https://intense-fortress-41272.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    //  ----------------    Handle Cancel Order Button   ---------------
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

    return (
        <div className="myOrders container py-5">
            <h1 className="text-center">My Orders</h1>
            {
                //  ----------------    Display My Orders   ---------------
                orders?.map(order => <MyOrder
                    key={order._id}
                    order={order}
                    handleCancelBookingButton={handleCancelBookingButton}
                >
                </MyOrder>)
            }
        </div>
    );
};

export default MyOrders;