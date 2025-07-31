import React from "react";
import FlightList from "./FlightList";

function UserPage() {
  return (
    <div>
      <h2>Welcome Back, User!</h2>
      <p>You can now book your tickets below.</p>
      <FlightList />
      <button onClick={() => alert("Ticket Booked Successfully!")}>
        Book Ticket
      </button>
    </div>
  );
}

export default UserPage;
