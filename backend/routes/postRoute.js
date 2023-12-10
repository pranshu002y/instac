const express = require("express");
const { createPost, getAllPost, getPostById } = require("../controllers/postController");
const router = express.Router();
router.post("/createpost",createPost)
router.get("/getpost",getAllPost)
router.get("/getpost/:id",getPostById)

module.exports = router