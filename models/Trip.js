const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
    place: {
        type: String,
        required: true,
        trim: true
    },
    budget: {
        type : Number,
        required: true,
        min: 500,
        max: 500000,
    },
    mode: {
        type: String,
        required: true,
        enum:['bus', 'train', 'flight', 'bike']
    },
    booked: {
        type: Boolean,
        default: false,
    },
    tripDate: {
        type: Date,
        required: true,
    }
}, {
        timestamps: true
});

module.exports = mongoose.model("Trip", fieldSchema)