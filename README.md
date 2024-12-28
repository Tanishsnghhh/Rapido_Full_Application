Rapido Full Stack Application

Overview

This project is a full-stack application for a ride-hailing service. It features separate interfaces for captains and drivers, built with a modern tech stack. The backend handles API endpoints, database operations, and authentication, while the frontend delivers a seamless user experience.

Features

User and captain interfaces

Secure login and signup functionality

Booking and ride management

Loyalty programs for frequent riders

Integrated payment gateway

Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)

MongoDB (configured locally or on the cloud)

Package manager (npm or yarn)

Project Setup

Backend

Run the backend with:

npx nodemon

Frontend

Run the frontend with:

npm run dev

Environment Variables

Backend

Create a .env file in the backend directory with the following structure:

# Server Port
PORT=4000

# MongoDB Connection URI
DB_CONNECT=<your_database_uri>

# JWT Secret Key for Authentication
JWT_SECRET=<your_jwt_secret>

# Google Maps API Key
MAPS_API_KEY=<your_maps_api_key>

Frontend

Create a .env file in the frontend directory with the following structure:

# Frontend Environment Configuration

# Base URL of the backend API
VITE_BASE_URL=http://localhost:4000

# Socket.IO server URL
VITE_SOCKET_SERVER_URL=http://localhost:4000

# API URL
VITE_API_URL=http://localhost:4000/api

# Socket.IO URL
VITE_SOCKET_URL=http://localhost:4000

# Mapbox API Key
VITE_MAPBOX_API_KEY=<your_mapbox_api_key>

Note: Replace placeholder values with your actual keys and secrets. Do not share sensitive information publicly.

Images

Add visual elements for both captain and driver interfaces to enhance the README. Use the columns below to showcase images:

Captain Interface

Feature

Screenshot

Dashboard



Ride History



Loyalty Program



Driver Interface

Feature

Screenshot

Dashboard



Earnings Report



Ride Alerts



Tech Stack

Backend: Node.js, Express.js, MongoDB

Frontend: React.js, Tailwind CSS

Others: Razorpay, Firebase (for notifications)

Usage

Clone the repository:

git clone https://github.com/Tanishsnghhh/Rapido_Full_Application.git

Navigate to the backend directory, install dependencies, and run the server:

cd backend
npm install
npx nodemon

Navigate to the frontend directory, install dependencies, and start the development server:

cd frontend
npm install
npm run dev

Contributing

Contributions are welcome! Please follow the contribution guidelines.

License

This project is licensed under the MIT License.

Copyright © 2024 Rapido App. All rights reserved.


