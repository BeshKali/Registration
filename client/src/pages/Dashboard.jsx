import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user info exists in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      // If no user found in localStorage, redirect to login page
      navigate("/login");
    } else {
      // Set user data to state
      setUser(storedUser);
    }
  }, [navigate]);

  return (
    <div className="p-4">
      {user ? (
        <>
          <h1 className="text-2xl font-semibold">Welcome, {user.username}!</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          {/* Add other dashboard content here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
