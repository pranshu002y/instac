const express = require("express");
const {createStory, getStory, createPost, getAllPost, getPostById ,createReel,getReel} = require("../controllers/postController");
const router = express.Router();

router.post("/createpost",createPost)
router.get("/getpost",getAllPost)
router.get("/getpost/:id",getPostById)

router.post("/createReel",createReel)
router.get("/getReel",getReel)

router.post("/createstory",createStory)
router.get("/getstory",getStory)

module.exports = router