import React from "react";

const flights = [
  { id: 1, name: "Air India", from: "Chennai", to: "Delhi", price: 5000 },
  { id: 2, name: "IndiGo", from: "Mumbai", to: "Bangalore", price: 4000 },
];

function FlightList() {
  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.name} - {flight.from} to {flight.to} - ₹{flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
