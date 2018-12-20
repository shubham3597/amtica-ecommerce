const express = require('express');

const {
  products
} = require('../controllers');

const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads');
  },
  filename: function(req, file, cb){
    cb(null, Date.now()+ file.originalname); 
    console.log(file);
    
  }
})
const upload = multer({storage: storage});


router.post('/',upload.single('itemPicture'), products.addProduct);
router.get('/', products.getAllProducts);
router.get('/:productId', products.getProduct);
router.put('/:productId', products.updateProduct);
router.delete('/:productId', products.removeProduct);

module.exports = router;