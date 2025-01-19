// server/routes/linksRoutes.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const { authenticateToken } = require('./authRoutes');

const router = express.Router();
const LINKS_FILE = path.join(__dirname, '../data/links.json');

// [GET] Όλοι οι σύνδεσμοι
router.get('/', (req, res) => {
  fs.readFile(LINKS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading links file' });
    }
    const links = JSON.parse(data);
    res.json(links);
  });
});

// [POST] Νέος σύνδεσμος
router.post('/', authenticateToken, (req, res) => {
  const newLink = req.body;

  fs.readFile(LINKS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading links file' });
    let links = JSON.parse(data);

    newLink.id = links.length > 0
      ? links[links.length - 1].id + 1
      : 1;

    links.push(newLink);

    fs.writeFile(LINKS_FILE, JSON.stringify(links, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error writing links file' });
      res.status(201).json(newLink);
    });
  });
});

// [PUT] Ενημέρωση συνδέσμου
router.put('/:id', authenticateToken, (req, res) => {
  const linkId = parseInt(req.params.id, 10);
  const updatedData = req.body;

  fs.readFile(LINKS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading links file' });
    let links = JSON.parse(data);

    const index = links.findIndex(l => l.id === linkId);
    if (index === -1) {
      return res.status(404).json({ message: 'Link not found' });
    }

    links[index] = { ...links[index], ...updatedData };

    fs.writeFile(LINKS_FILE, JSON.stringify(links, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error writing links file' });
      res.json(links[index]);
    });
  });
});

// [DELETE] Διαγραφή συνδέσμου
router.delete('/:id', authenticateToken, (req, res) => {
  const linkId = parseInt(req.params.id, 10);

  fs.readFile(LINKS_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading links file' });
    let links = JSON.parse(data);

    const index = links.findIndex(l => l.id === linkId);
    if (index === -1) {
      return res.status(404).json({ message: 'Link not found' });
    }

    const deletedLink = links.splice(index, 1);

    fs.writeFile(LINKS_FILE, JSON.stringify(links, null, 2), err => {
      if (err) return res.status(500).json({ message: 'Error writing links file' });
      res.json(deletedLink[0]);
    });
  });
});

module.exports = router;
