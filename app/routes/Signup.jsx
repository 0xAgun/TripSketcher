import React from 'react';

const Signup = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>Signup</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required style={{ marginBottom: '10px', padding: '8px' }} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required style={{ marginBottom: '10px', padding: '8px' }} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required style={{ marginBottom: '10px', padding: '8px' }} />

        <button type="submit" style={{ padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
