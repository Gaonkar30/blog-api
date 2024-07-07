const Article = require('../models/article.model');

// Get all articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single article by ID
const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new article
const createArticle = async (req, res) => {
  try {
    const { title, content, tags, publishedDate } = req.body;
    const article = new Article({
      title,
      content,
      tags,
      publishedDate,
    });
    await article.save();
    res.status(201).json({ data: article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an article by ID
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Article.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an article by ID
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, tags } = req.body;
    const article = await Article.findByIdAndUpdate(
      id,
      { title, content, tags },
      { new: true, runValidators: true }
    );
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllArticles,
  getArticleById,
  createArticle,
  deleteArticle,
  updateArticle,
};
