const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logout, getUser, loginStatus, getBasicInfo, searchUser, getallusers} = require("../controllers/userController")
const protect = require("../middleWares/authMiddleware");


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logout)
router.get("/getuser/:id",getUser)
router.get("/getalluser",getallusers)
router.get("/loggedin",loginStatus)
router.post("/getinfo",getBasicInfo)
router.post("/searchuser",searchUser)

module.exports = router