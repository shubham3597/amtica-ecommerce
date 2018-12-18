const mongoose = require('mongoose');

// const { User, Workspace } = require('./');

const { Schema } = mongoose;

const CategorySchema = new Schema({
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  categoryName: {
    type: String,
    required: true
  },
  type:{
    type:String,
    enum:['root', 'sub'],
    required: true
  },
  categoryDescription: {
    type: String,
    required: true
  },
  subCategories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  parentCategories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  products:[{
    type: Schema.Types.ObjectId,
    ref: 'Product'}
  ],
  createdDate: {
    type: Date,
    default: Date.now()
  },
  otherDetails : [Schema.Types.Mixed]
}, {strict: false});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
