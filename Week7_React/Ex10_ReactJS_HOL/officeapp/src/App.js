import React from "react";
import "./App.css"; // Optional CSS

function App() {
  const heading = <h1>Office Space Rental App</h1>;

  const office = {
    name: "Tech Hub",
    rent: 55000,
    address: "123 Main Street, Chennai"
  };

  const officeList = [
    { name: "Tech Park", rent: 45000, address: "Coimbatore" },
    { name: "SmartSpace", rent: 72000, address: "Bangalore" },
    { name: "Innovation Center", rent: 60000, address: "Hyderabad" },
    { name: "Elite Corp", rent: 80000, address: "Mumbai" },
  ];

  return (
    <div className="App">
      {heading}

      {/* Image under heading */}
      <img
        src="/office.jpg" // make sure office.jpg is in the public folder
        alt="Office Space"
        style={{ width: "300px", marginBottom: "20px" }}
      />

      {/* Single office details */}
      <h2>{office.name}</h2>
      <p>Rent:
        <span style={{ color: office.rent < 60000 ? "red" : "green" }}>
          ₹{office.rent}
        </span>
      </p>
      <p>Address: {office.address}</p>

      <hr />

      <h3>Available Office Spaces:</h3>
      {officeList.map((item, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
          <h4>{item.name}</h4>
          <p>Rent:
            <span style={{ color: item.rent < 60000 ? "red" : "green" }}>
              ₹{item.rent}
            </span>
          </p>
          <p>Address: {item.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
