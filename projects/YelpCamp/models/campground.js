const mongoose = require('mongoose');

var campground = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model('Campground', campground);