// server/auth.js
const bcrypt = require('bcrypt');

// Υποθετικός admin χρήστης
// bcrypt.hashSync('admin123', 10) -> βγάζει αυτό το hash
const mockUser = {
  username: 'admin123',
  password: '$2b$10$x5WlbZUaP26tfXK/.JJIuOWfHlNVNCq13Wr9OsLld3ZpUZT558rwm' // hash for 'adminpassword123'
};

function checkUserPassword(username, password) {
  // Ελέγχουμε αν το username αντιστοιχεί στον mockUser
  if (username !== mockUser.username) return false;
  // Έλεγχος password
  const match = bcrypt.compareSync(password, mockUser.password);
  return match; // true ή false
}

module.exports = { mockUser, checkUserPassword };
