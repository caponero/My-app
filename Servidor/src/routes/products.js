const UserModel = require('../models/products');

module.exports = app => {

  app.get('/products', (req, res) => {
    UserModel.getProducts((err, data) => {
      res.status(200).json(data);
    });
  });

  
  app.put('/prducts/:id', (req, res) => {
    const userData = {
      id: req.params.id,
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock
    };
    console.log(userData);
    UserModel.updateProduct(userData, function (err, data) {
      if (data && data.msg) {
        res.status(200).json({data});
      } else {
        res.status(500).json({
          success: false,
          msg: 'Error'
        });
      }
    });
  });

  };
