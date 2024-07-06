const Article = require("../models/article.model");
const getAllArticles = async (req, res) => {
  const articles = await Article.find();
  res.json(articles);
  return articles;
};
const getArticlebyId = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findOne({ id: id });
  return res.json(article);
};
const createArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, tags, publishedDate } = req.body;
  const article = await new Article({
    id: id,
    title: title,
    content: content,
    tags: tags,
    publishedDate: publishedDate,
  });
  await article.save();
  return res.json({ data: article });
};
const deleteArticle = async (req, res) => {
  const { id } = req.params;
  await Article.deleteOne({ productId: id });
  return res.json("deletion done");
};
const updateArticle = async (req, res) => {
  const { title, content, tags } = req.body;
  const { id } = req.params;
  const article = await Article.findOne({ id: id });
  if (article) {
    article.updateOne(
      {
        $set: {
          title: title,
          content: content,
          tags: tags,
        },
      },
      {},
      { new: true }
    );
    return res.json(article);
  } else {
    return res.json("article not found");
  }
};

module.exports = {
  getAllArticles,
  getArticlebyId,
  createArticle,
  deleteArticle,
  updateArticle,
};
