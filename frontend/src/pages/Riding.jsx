import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation
import { SocketContext } from '../context/SocketContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';
import axios from 'axios'; // Import axios here

const Riding = () => {
    const location = useLocation();
    const { ride } = location.state || {}; // Retrieve ride data
    const { socket } = useContext(SocketContext);
    const navigate = useNavigate();

    useEffect(() => {
        socket.on("ride-ended", () => {
            navigate('/home');
        });

        return () => {
            // Clean up the socket listener when component unmounts
            socket.off("ride-ended");
        };
    }, [socket, navigate]);

    async function handleOnlinePayment() {
        try {
            // Make a POST request to the backend route to generate the QR code
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/generate-qr`,
                {
                    amount: ride?.fare, // Pass the ride fare as the amount
                }
            );

            if (response.status === 200) {
                // Redirect to a page or show the QR code

                const qrCode = response.data.qrCode; // Get the QR code from the response
                navigate('/payment', {
                    state: {
                        qrCode: qrCode, // Pass the QR code to the payment page
                    }
                });
            }
        } catch (error) {
            console.error('Error generating QR code:', error.message);
            alert('Failed to generate QR code. Please try again.');
        }
    }

    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <LiveTracking />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>{ride?.destination}</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹{ride?.fare}</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button 
                    className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' 
                    onClick={handleOnlinePayment}
                >
                    Make a Payment
                </button>
            </div>
        </div>
    );
};

export default Riding;
