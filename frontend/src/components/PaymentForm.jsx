import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentForm() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { qrCode } = state || {}; // Handle possible undefined state

    if (!qrCode) {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#f3f4f6',
                    padding: '16px',
                }}
            >
                <div
                    style={{
                        backgroundColor: 'white',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        padding: '24px',
                        width: '100%',
                        maxWidth: '400px',
                        textAlign: 'center',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '24px',
                            fontWeight: '600',
                            color: '#1f2937',
                            marginBottom: '16px',
                        }}
                    >
                        Oops! Payment Information Missing
                    </h1>
                    <p
                        style={{
                            color: '#6b7280',
                            marginBottom: '24px',
                            fontSize: '16px',
                        }}
                    >
                        Something went wrong. Please try again later.
                    </p>
                    <button
                        onClick={() => navigate('/captain-home')}
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontSize: '16px',
                            border: 'none',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563eb')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#3b82f6')}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f3f4f6',
                padding: '16px',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '24px',
                    width: '100%',
                    maxWidth: '400px',
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '16px',
                    }}
                >
                    Complete Your Payment
                </h1>
                <p
                    style={{
                        color: '#6b7280',
                        marginBottom: '24px',
                        fontSize: '16px',
                    }}
                >
                    Scan the QR Code below using any UPI-enabled app to make your payment.
                </p>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '24px',
                    }}
                >
                    <img
                        src={qrCode}
                        alt="UPI QR Code for payment"
                        style={{
                            width: '256px',
                            height: '256px',
                            objectFit: 'contain',
                            border: '2px solid #e5e7eb',
                            borderRadius: '8px',
                        }}
                    />
                </div>
                <button
                    onClick={() => navigate('/captain-home')}
                    style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        borderRadius: '8px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontSize: '16px',
                        border: 'none',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#2563eb')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#3b82f6')}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default PaymentForm;
