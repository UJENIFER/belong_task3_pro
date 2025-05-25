const db = require('../db');

// CREATE
exports.createArticle = async (req, res) => {
  const { title, description, author, status, rating } = req.body;
  db.query(
    'INSERT INTO articles (title, description, author, status, rating) VALUES (?, ?, ?, ?, ?)',
    [title, description, author, status, rating],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId, message: 'Article created' });
    }
  );
};

// READ (by ID)
exports.getArticleById = async (req, res) => {
  db.query('SELECT * FROM articles WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Article not found' });
    res.json(results[0]);
  });
};

// READ (all)
exports.getAllArticles = async (req, res) => {
  db.query('SELECT * FROM articles', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// UPDATE (rating/status)
exports.updateArticle = async (req, res) => {
  const { status, rating } = req.body;
  db.query(
    'UPDATE articles SET status = ?, rating = ? WHERE id = ?',
    [status, rating, req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Article updated' });
    }
  );
};

// DELETE
exports.deleteArticle = async (req, res) => {
  db.query('DELETE FROM articles WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Article deleted' });
  });
};
