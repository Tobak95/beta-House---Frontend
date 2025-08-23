
import React, { useState } from 'react';
import './App.css'; // Assuming you have some basic CSS for styling

const App = () => {
  // State to manage user login status and user information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Mock user data for login (in a real app, this would come from an API)
  const mockUser = {
    email: 'test@example.com',
    password: 'password123',
    name: 'John Doe',
    id: 1,
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation (in a real app, validate against an API)
    if (email === mockUser.email && password === mockUser.password) {
      setIsLoggedIn(true);
      setUser({
        name: mockUser.name,
        email: mockUser.email,
        id: mockUser.id,
      });
      setEmail('');
      setPassword('');
    } else {
      alert('Invalid credentials. Try again.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div className="App">
      <h1>Login System</h1>

      {isLoggedIn ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p><strong>User Information:</strong></p>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={isLoggedIn}>
              Sign In
            </button>
            <button type="button" disabled={isLoggedIn}>
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
fdu-bsjd-hxq