import React from 'react';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './Indian';

function App() {
  const flag = true; // Change this to false to test the other component

  return (
    <div className="App">
      <h1>Welcome to Cricket App 🏏</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
