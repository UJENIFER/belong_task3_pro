const express = require('express');
const router = express.Router();
const {
  createArticle,
  getArticleById,
  getAllArticles,
  updateArticle,
  deleteArticle
} = require('../controllers/articleController');

router.post('/articles', createArticle);
router.get('/articles/:id', getArticleById);
router.get('/articles', getAllArticles);
router.put('/articles/:id', updateArticle);
router.delete('/articles/:id', deleteArticle);

module.exports = router;
