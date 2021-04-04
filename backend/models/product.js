const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
    trim: true,
    maxLength: [100, "Procut Name is Too lengthy"],
  },
  shortDescription: {
    type: String,
    required: [true, "please enter the Short Description"],
    maxLength: [400, "this is a long one"],
  },
  description: {
    type: String,
    required: [true, "please enter the Description"],
  },
  weight: {
    type: Number,
  },
  dimension: {
    type: Number,
  },
  price: {
    type: Number,
    required: [true, "please enter the price"],
  },
  treatment: {
    type: String,
  },
  origin: {
    type: String,
  },
  certification: {
    type: String,
  },
  shot: {
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter the category of product"],
    enum: {
      values: ["Gemstone", "Jewelry", "Specimens"],
      message: "please select the correct category",
    },
  },

  stock: {
    type: Number,
    required: [true, "please enter the stock"],
    maxLength: [5, "stock cannot exceed 5 charactors"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        res: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    res: "User",
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
