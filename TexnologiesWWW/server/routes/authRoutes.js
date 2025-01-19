// server/routes/authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');

const { checkUserPassword } = require('../auth');

const router = express.Router();
const SECRET_KEY = '123'; // Βάλε κάποιο δικό σου μυστικό

// Login (POST /api/auth/login)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (checkUserPassword(username, password)) {
    // Αν είναι σωστό, δημιουργούμε JWT
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }
  // αλλιώς 401
  res.status(401).json({ message: 'Invalid credentials' });
});

// Middleware για προστασία σε endpoints
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const token = authHeader.split(' ')[1]; // π.χ. "Bearer <token>"

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
module.exports.authenticateToken = authenticateToken;
