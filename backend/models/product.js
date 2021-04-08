const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
    trim: true,
    maxLength: [100, "Procut Name is Too lengthy"],
  },
  shortDescription: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "please enter the price"],
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
        required: true,
      },
    },
  ],
  category: {
    name: {
      type: String,
      required: [true, "please enter the category of product"],
      enum: {
        values: ["Gemstone", "Jewelry", "Specimens"],
        message: "please select the correct category",
      },
    },
    sub1: {
      name: {
        type: String,
      },
      sub2: {
        name: {
          type: String,
        },
        sub3: {
          name: {
            type: String,
          },
        },
      },
    },
  },
  productInfo: [
    {
      title: {
        type: String,
        required: [true, "Please enter the title"],
      },
      desc: {
        type: String,
        required: [true, "please enter description"],
      },
    },
  ],
  tags: [{ type: String }],
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
