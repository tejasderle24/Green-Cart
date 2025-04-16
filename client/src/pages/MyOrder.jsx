import React, { useEffect, useState } from 'react'
import { dummyOrders } from '../assets/assets';
import FormatPrice from '../Other/FormatPrice';

const MyOrder = () => {

    const [myOrders, setMyOrders] = useState([]);

    const fetchMyOrders = async () => {
        setMyOrders(dummyOrders)
    }

    useEffect(() => {
        fetchMyOrders()
    }, []);

    return (
        <div className='mt-16 pb-16' >
            <div className="flex flex-col items-end w-max mb-8">
                <p className="text-2xl font-semibold uppercase"> My Orders</p>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>
            {myOrders.map((order, index) => (
                <div key={index} className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl">
                    <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
                        <span>OrderId : {order._id}</span>
                        <span>Payment : {order.paymentType}</span>
                        <span>Total Ammount : <FormatPrice price={order.amount} /></span>
                    </p>
                    {order.items.map((item, index) => (
                        <div key={index}
                         className={`relative bg-white text-gray-500/70 ${order.items.length !== index +1 && "border-b"} border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}>
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="bg-primary/10 p-4 rounded-lg">
                                    <img src={item.product.image[0]} alt="" className='w-16 h-16' />
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-xl font-medium text-gray-800">{item.product.name}</h2>
                                    <p className="">{item.product.category}</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                                <p>Quantity : {item.quantity || "1"} </p>
                                <p>Status: {order.status}</p>
                                <p>Date : {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <p className="text-primary text-lg font-medium">
                                Amount: <FormatPrice price={item.product.offerPrice * item.quantity}/>
                            </p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default MyOrder