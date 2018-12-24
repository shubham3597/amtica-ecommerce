const { Product } = require('../models');
const { Category } = require('../models');
const { sendErr } = require('../../utils');

/*  ======================
 *  -- Product CONTROLLERS --
 *  ======================
 */

// -| Product main controllers |-

const addProduct = async (req, res, next,) => {
  try {
    const productData = new Product({
        name:req.body.name,
        description:req.body.description,
        itemPicture:req.body.itemPicture,
        category:req.body.category,
        otherDetails:req.body.otherDetails
    });


    const product = await Product.create(productData);

    console.log(productData.category[0]);

    const category = await Category.findOneAndUpdate({
      _id:productData.category[0]
    },{
      $push:{products:[product._id]}
    })


    return res.status(200).json({
      message: 'New Product Added!',
      product,
      category
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products =  await Product.find()
    .sort('-created_date')
    .lean();

    return res.status(200).json({
      message: 'All Products found!',
      products
      
    });
  } catch (err) {
    return sendErr(res, err);
  }
};

const getProduct = async(req, res, next) =>{
  try {
    const { params:{productId} } = req;

    const product = await Product.findOne({
      _id: productId
    })
      .select('_id name active description category itemPicture otherDetails createdDate');

    // Category not found
    if (!product) {
      return sendErr(res, err, 'Error! Category not found, invalid id or unauthorized request', 404);
    }

    return res.status(200).json({
      message: `Product found!`,
      product
    });

  } catch (err) {
    return sendErr(res, err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;

    delete req.body.productId

    const product = await Product.findOneAndUpdate({
      _id: productId
    }, {
      $set: productData
    }, {
      new: true
    });

    return res.status(200).json({
      message: 'Product updated!',
      product
    });

  } catch (err) {
    return sendErr(res, err);
  }
};

const removeProduct = async (req, res, next) => {
    try {
      const productId  = req.params.productId;
  
      // Get category data
      const product = await Product.findOne({
        _id: productId
      }).lean();
  
      const productRemoved = await Category.findByIdAndRemove(product);
  
      return res.status(200).json({
        message: 'Product deleted!',
        productRemoved
      });
    } catch (err) {
      return sendErr(res, err);
    }
  };

  const updateImage = async (req, res, next) => {
    try {
      const productId = req.params.productId;
      const fileName = req;
  
      const product = await Product.findByIdAndUpdate({
        _id: productId
      }, {
        itemPicture: fileName
      }, {
        new: true
      });
  
      return res.status(200).json({
        message: 'Product profile picture updated!',
        product
      });
    } catch (err) {
      return sendErr(res, err);
    }
  };

/*  =============
 *  -- EXPORTS --
 *  =============
 */

module.exports = {
  // User Main controllers
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  removeProduct,
  updateImage
};
