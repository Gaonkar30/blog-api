const express = require("express");
const {
  getAllArticles,
  getArticlebyId,
  createArticle,
  deleteArticle,
  updateArticle,
} = require("../controllers/articleController");
const router = express.Router();
router.get("/articles", getAllArticles);
router.get("/articles/:id", getArticlebyId);
router.post("/articles", createArticle);
router.delete("/articles/:id", deleteArticle);
router.put("/articles/:id", updateArticle);

module.exports = router;
