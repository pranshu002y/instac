const Post =require('../models/Post');
const User=require('../models/userModel')

const createPost= async(req,res)=>{
    
        const { caption, image, postedBy } = req.body;

        try {
            const newPost = await Post.create({
                caption,
                image,
                postedBy,
            });
             const user = await User.findById(postedBy);
             user.posts.push(newPost._id);
             await user.save();

        res.status(201).json(newPost);


        
        
    } catch (error) {
       res.status(500).json({message:error.message}) ;
    }
}


// const postData = {
//     caption: req.body.caption,
//     image: req.file.location,
//     postedBy: req.user._id
// }

// const post = await Post.create(postData);

// const user = await User.findById(req.user._id);
// user.posts.push(post._id);
// await user.save();

// res.status(201).json({
//     success: true,
//     post,
// });
const getAllPost= async(req,res)=>{

try {
    const allpost = await Post.find();
    res.status(200).json(allpost);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

const getPostById= async(req,res)=>{
    try {
        const postByid = await Post.findById(req.params.id);
        if (!postByid) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.status(200).json(postByid);
    
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = {getAllPost,getPostById,createPost
}
