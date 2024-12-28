import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FinishRide = (props) => {
    const navigate = useNavigate();

    async function endRide() {
        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/rides/end-ride`,
            {
                rideId: props.ride._id,
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            }
        );

        if (response.status === 200) {
            navigate('/captain-home');
        }
    }

  

    async function handleOnlinePayment() {
        try {
            // Make a POST request to the backend route to generate the QR code
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/generate-qr`,
                {
                    amount: props.ride.fare, // Pass the ride fare as the amount
                }
            );
    
            if (response.status === 200) {
                // Redirect to a page or show the QR code

                // const qrCode = response.data.qrCode;
                // navigate(`/payment-gateway?rideId=${props.ride._id}&qrCode=${encodeURIComponent(qrCode)}`);

                const qrCode = response.data.qrCode
                navigate('/payment',{
                    state: {
                        qrCode: qrCode,
                    }
                })
            }
        } catch (error) {
            console.error('Error generating QR code:', error.message);
            alert('Failed to generate QR code. Please try again.');
        }
    }
    

    return (
        <div>
            <h5
                className="p-1 text-center w-[93%] absolute top-0"
                onClick={() => {
                    props.setFinishRidePanel(false);
                }}
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>
            <h3 className="text-2xl font-semibold mb-5">Finish this Ride</h3>
            <div className="flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4">
                <div className="flex items-center gap-3 ">
                    <img
                        className="h-12 rounded-full object-cover w-12"
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt=""
                    />
                    <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className="text-lg font-semibold">2.2 KM</h5>
            </div>
            <div className="flex gap-2 justify-between flex-col items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-2">
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">562/11-A</h3>
                            <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.ride?.fare} </h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 w-full flex gap-4">
                    <button
                        onClick={endRide}
                        className="flex-1 text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
                    >
                        Finish Ride
                    </button>

                    <button
                        onClick={handleOnlinePayment}
                        className="flex-1 text-lg justify-center bg-blue-600 text-white font-semibold p-3 rounded-lg"
                    >
                        Pay Online
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FinishRide;
