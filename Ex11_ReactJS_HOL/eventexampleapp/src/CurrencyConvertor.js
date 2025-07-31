import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    const euroRate = 0.011; // Example conversion rate: ₹1 = €0.011
    const converted = (parseFloat(rupees) * euroRate).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Currency Convertor (INR ➝ EUR)</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in ₹"
      />
      <button onClick={handleSubmit}>Convert</button>
      <p>Euro (€): {euro}</p>
    </div>
  );
}

export default CurrencyConvertor;
