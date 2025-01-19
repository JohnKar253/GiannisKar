// server/index.js
const express = require('express');
const path = require('path');
const cors = require('cors');

// Φορτώνουμε τα routes
const exhibitionsRoutes = require('./routes/exhibitionsRoutes');
const linksRoutes = require('./routes/linksRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Χρήση CORS (προαιρετικά)
app.use(cors());

// Για να μπορούμε να διαβάζουμε JSON body σε POST/PUT
app.use(express.json());

// Εξυπηρέτηση στατικών αρχείων από το φάκελο public
// Αυτό επιτρέπει την πρόσβαση σε index.html, css, js, images κλπ.
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/exhibitions', exhibitionsRoutes);
app.use('/api/links', linksRoutes);
app.use('/api/auth', authRoutes);

// Οποιοδήποτε άλλο path να επιστρέφει το index.html (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Εκκίνηση Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
