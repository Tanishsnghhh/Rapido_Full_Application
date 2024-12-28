
import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1572013343866-dfdb9b416810?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
       <div>
       <div
  style={{
    position: "absolute", // Position it anywhere on the page
    top: "20px", // Distance from the top edge
    left: "20px", // Distance from the left edge
    width: "150px", // Adjust container size
    height: "150px",
    borderRadius: "50%", // Make it circular
    overflow: "hidden", // Ensure the logo stays within the container
    border: "5px solid #f9c935", // Add a yellow border
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Add shadow
    zIndex: "999", // Ensure it stays above other elements
  }}
>
  <img
    src="https://logowik.com/content/uploads/images/rapido-bike-taxi8263.jpg"
    alt="Rapido Logo"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "contain", // Fit logo perfectly inside the circle
      backgroundColor: "#fff", // Optional: Add a white background
    }}
  />
</div>

        </div> 
        <div className='bg-white pb-8 py-4 px-4'>
          <h2 className='text-[30px] font-semibold'>Get Started with Rapido</h2>
          <Link 
  to='/login' 
  style={{
    backgroundColor: "#F9C935", // Yellow background
    color: "black",             // Text color
    padding: "12px 0",          // Vertical padding
    borderRadius: "8px",        // Rounded corners
    display: "flex",            // Flexbox for centering
    justifyContent: "center",   // Center horizontally
    alignItems: "center",       // Center vertically
    width: "100%",              // Full width
    marginTop: "20px"           // Top margin
  }}
>
  Continue
</Link>
        </div>
      </div>
    </div>
  )
}

export default Start