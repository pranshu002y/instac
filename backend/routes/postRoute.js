const express = require("express");
const { createPost, getAllPost, getPostById ,createReel,getReel} = require("../controllers/postController");
const router = express.Router();

router.post("/createpost",createPost)
router.get("/getpost",getAllPost)
router.get("/getpost/:id",getPostById)

router.post("/createReel",createReel)
router.get("/getReel",getReel)

module.exports = router