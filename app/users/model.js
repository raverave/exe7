const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be included"],
    },
    age: {
        type: Number,
        required: [true, "Age must be included"],
    },
    status: {
        type: String,
        enum: ["alive", "not alive"],
        default: "not alive",
    },
});

const users = mongoose.model('users', userSchema);

module.exports = users;
