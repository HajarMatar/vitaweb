// authService.js

// Simulated user data for demo purposes
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
  ];
  
  // Simulated JWT secret key (should be kept secret in a real app)
  const JWT_SECRET = 'your_secret_key_here';
  
  export function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      // Generate and return a JWT token
      const token = generateToken(user);
      return token;
    }
    return null;
  }
  
  function generateToken(user) {
    // In a real app, use a JWT library to generate a token
    // For demo purposes, we'll create a simple token here
    const payload = { userId: user.id, username: user.username };
    return `Bearer ${btoa(JSON.stringify(payload))}`;
  }
  
  export function decodeToken(token) {
    // Decode and verify the token here
    // In a real app, use a JWT library for decoding
    try {
      const payload = JSON.parse(atob(token.split(' ')[1]));
      return payload;
    } catch (error) {
      return null;
    }
  }
  