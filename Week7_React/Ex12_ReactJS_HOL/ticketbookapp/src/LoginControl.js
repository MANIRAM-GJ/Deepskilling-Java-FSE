import React from "react";

function LoginControl({ isLoggedIn, handleLogin, handleLogout }) {
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default LoginControl;
