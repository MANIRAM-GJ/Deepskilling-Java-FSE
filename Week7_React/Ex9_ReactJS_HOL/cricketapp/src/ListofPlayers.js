import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 85 },
    { name: "Dhoni", score: 65 },
    { name: "Jadeja", score: 45 },
    { name: "Bumrah", score: 75 },
    { name: "Gill", score: 95 },
    { name: "Rahul", score: 60 },
    { name: "Pandya", score: 72 },
    { name: "Shami", score: 80 },
    { name: "Surya", score: 55 },
    { name: "Ashwin", score: 78 },
  ];

  const filteredPlayers = players.filter(player => player.score >= 70); // Arrow function + filter

  return (
    <div>
      <h2>Players with Score ≥ 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
