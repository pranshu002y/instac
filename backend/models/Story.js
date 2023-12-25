const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    caption: {
        type: String,
        trim: true
    },
    
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    storyUrl: {
        type: String,
        default:"welcome Sher"
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            comment: {
                type: String,
                required: true,
                trim: true,
            }
        }
    ],
    savedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Story", storySchema);