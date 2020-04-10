const mongoose = require('mongoose');

const yachtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Yacht must have a title'],
    unique: true
  },
  ratingsAverage: {
    type: Number,
    //Built-in Validator
    min: [1, 'Rating must be above 1.0'],
    max: [5, 'Rating must be below 5.0'],
    default: 0
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'Yacht must have a price']
  },
  summary: {
    type: String,
    required: [true, 'Yacht must have a summary']
  },
  description: {
    type: String,
    required: [true, 'Yacht must have a description']
  },
  amenities: [String],
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  images: [String],
  startLocation: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number],
    address: String,
    description: String
  },
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number],
    address: String,
    description: String
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

yachtSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'owner',
    select: '-__v -passwordChangedAt'
  });
  next();
});

const Yacht = mongoose.model('Yacht', yachtSchema);

module.exports = Yacht;
