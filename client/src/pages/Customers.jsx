import React from "react";
import { useAuth } from "../context/AuthContext";

function Customer() {
  const { user } = useAuth();

  if (!user) {
    return <div>You must log in to view this page.</div>;
  }

  return (
    <div>
      {user.role === "shopkeeper" ? (
        <h1>Welcome, Shopkeeper!</h1>
      ) : (
        <h1>Welcome, Staff!</h1>
      )}
    </div>
  );
}

export default Customer;
