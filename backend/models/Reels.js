const mongoose = require('mongoose');

const reelSchema = new mongoose.Schema({
    caption: {
        type: String,
        trim: true
    },
    
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    videoUrl: {
        type: String,
        default:"dfh"
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

module.exports = mongoose.model("Reel", reelSchema);