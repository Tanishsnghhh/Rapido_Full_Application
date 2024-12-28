<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rapido Full Stack Application</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            color: #e74c3c;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>Rapido Full Stack Application</h1>
    <h2>Overview</h2>
    <p>
        This project is a full-stack application for a ride-hailing service. 
        It features separate interfaces for captains and drivers, built with a modern tech stack. 
        The backend handles API endpoints, database operations, and authentication, 
        while the frontend delivers a seamless user experience.
    </p>
    <h2>Features</h2>
    <ul>
        <li>User and captain interfaces</li>
        <li>Secure login and signup functionality</li>
        <li>Booking and ride management</li>
        <li>Loyalty programs for frequent riders</li>
        <li>Integrated payment gateway</li>
    </ul>
    <h2>Project Setup</h2>
    <h3>Backend</h3>
    <pre><code>npx nodemon</code></pre>
    <h3>Frontend</h3>
    <pre><code>npm run dev</code></pre>
    <h2>Environment Variables</h2>
    <h3>Backend</h3>
    <pre><code># Server Port
PORT=4000

# MongoDB Connection URI
DB_CONNECT=<your_database_uri>

# JWT Secret Key for Authentication
JWT_SECRET=<your_jwt_secret>

# Google Maps API Key
MAPS_API_KEY=<your_maps_api_key>
</code></pre>
    <h3>Frontend</h3>
    <pre><code># Frontend Environment Configuration
VITE_BASE_URL=http://localhost:4000
VITE_SOCKET_SERVER_URL=http://localhost:4000
VITE_API_URL=http://localhost:4000/api
VITE_SOCKET_URL=http://localhost:4000
VITE_MAPBOX_API_KEY=<your_mapbox_api_key>
</code></pre>
    <h2>MongoDB Database</h2>
    <p>The application uses MongoDB as the database to store user and captain data. Below are screenshots of the database data:</p>
    <h3>Captain Database</h3>
    <ul>
        <li>Captain Data - <em><img width="1416" alt="Screenshot 2024-12-29 at 2 07 47 AM" src="https://github.com/user-attachments/assets/d3ed2f5e-c0fa-47c6-a149-ab8a38b4d66a" />![Uploading Screenshot 2024-12-29 at 2.18.38 AM.png…]()
</em></li>
    </ul>
    <h3>User Database</h3>
    <ul>
        <li>User Data - <em><img width="1410" alt="Screenshot 2024-12-29 at 2 18 38 AM" src="https://github.com/user-attachments/assets/158f345d-8b9c-4faa-ac1d-ca07ad700b82" /></em></li>
    </ul>
    <h2>Images</h2>
    <h3>Captain Interface</h3>
    <ul>
        <li>Dashboard - <em>Insert Image</em></li>
        <li>Ride History - <em>Insert Image</em></li>
        <li>Loyalty Program - <em>Insert Image</em></li>   
    </ul>
    <h3>Driver Interface</h3>
    <ul>
        <li>Dashboard - <em><img width="1710" alt="Screenshot 2024-12-28 at 1 43 51 AM" src="https://github.com/user-attachments/assets/1c680e31-9e67-480a-9bf6-9d4e146dfdc8" />

</em></li>
        <li>Earnings Report - <em>Insert Image</em></li>
        <li>Ride Alerts - <em>Insert Image</em></li>
    </ul>
    <h2>Usage</h2>
    <pre><code>git clone https://github.com/Tanishsnghhh/Rapido_Full_Application.git
cd backend
npm install
npx nodemon
cd ../frontend
npm install
npm run dev
</code></pre>
    <h2>License</h2>
    <p>MIT License</p>
    <p><strong>Copyright © 2024 Rapido App. All rights reserved.</strong></p>
</body>
</html>
