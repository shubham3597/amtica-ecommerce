const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  itemPicture:{
      type: String,
      required:true
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }],
  createdDate: {
    type: Date,
    default: Date.now()
  },
  otherDetails : [Schema.Types.Mixed]
}, {strict: false});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
