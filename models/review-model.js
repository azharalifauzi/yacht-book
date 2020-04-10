const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Review cannot be empty!']
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    required: [true, 'Review must have a rating!']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  yacht: {
    type: mongoose.Schema.ObjectId,
    ref: 'Yacht',
    required: [true, 'Review must belong to a yacht!']
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user!']
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
