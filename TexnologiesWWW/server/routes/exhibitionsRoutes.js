// server/routes/exhibitionsRoutes.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateToken } = require('./authRoutes'); // <-- import

const router = express.Router();
const EXHIBITIONS_FILE = path.join(__dirname, '../data/exhibitions.json');

// [GET] Ανάγνωση όλων των εκθέσεων
router.get('/', (req, res) => {
  fs.readFile(EXHIBITIONS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading exhibitions file' });
    }
    const exhibitions = JSON.parse(data);
    res.json(exhibitions);
  });
});

// [POST] Δημιουργία νέας έκθεσης (ΜΟΝΟ για authenticated)
router.post('/', authenticateToken, (req, res) => {
  const newExhibition = req.body;
  fs.readFile(EXHIBITIONS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading file' });
    let exhibitions = JSON.parse(data);

    newExhibition.id = exhibitions.length > 0 
      ? exhibitions[exhibitions.length - 1].id + 1 
      : 1;

    exhibitions.push(newExhibition);

    fs.writeFile(EXHIBITIONS_FILE, JSON.stringify(exhibitions, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error writing file' });
      res.status(201).json(newExhibition);
    });
  });
});

// [PUT] Ενημέρωση έκθεσης
router.put('/:id', authenticateToken, (req, res) => {
  const exhibitionId = parseInt(req.params.id, 10);
  const updatedData = req.body;

  fs.readFile(EXHIBITIONS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading file' });
    let exhibitions = JSON.parse(data);

    const index = exhibitions.findIndex(ex => ex.id === exhibitionId);
    if (index === -1) {
      return res.status(404).json({ message: 'Exhibition not found' });
    }

    exhibitions[index] = { ...exhibitions[index], ...updatedData };

    fs.writeFile(EXHIBITIONS_FILE, JSON.stringify(exhibitions, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error writing file' });
      res.json(exhibitions[index]);
    });
  });
});

// [DELETE] Διαγραφή έκθεσης
router.delete('/:id', authenticateToken, (req, res) => {
  const exhibitionId = parseInt(req.params.id, 10);

  fs.readFile(EXHIBITIONS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading file' });
    let exhibitions = JSON.parse(data);

    const index = exhibitions.findIndex(ex => ex.id === exhibitionId);
    if (index === -1) {
      return res.status(404).json({ message: 'Exhibition not found' });
    }

    const deletedExhibition = exhibitions.splice(index, 1);

    fs.writeFile(EXHIBITIONS_FILE, JSON.stringify(exhibitions, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error writing file' });
      res.json(deletedExhibition[0]);
    });
  });
});

module.exports = router;
