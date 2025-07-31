import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Dhoni", "Jadeja", "Rahul", "Shami"];
  const evenTeam = ["Rohit", "Gill", "Bumrah", "Pandya", "Surya", "Ashwin"];

  // Destructuring odd and even players
  const [odd1, odd2, ...oddRest] = oddTeam;
  const [even1, even2, ...evenRest] = evenTeam;

  // Merging arrays using spread operator
  const T20players = ["Virat", "Rohit", "Gill"];
  const RanjiTrophy = ["Pujara", "Karun", "Iyer"];
  const allPlayers = [...T20players, ...RanjiTrophy]; // Merge

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <p>{odd1}, {odd2}, {oddRest.join(', ')}</p>

      <h2>Even Team Players (Destructured)</h2>
      <p>{even1}, {even2}, {evenRest.join(', ')}</p>

      <h2>All Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
