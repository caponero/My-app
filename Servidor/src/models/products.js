const mysql = require('mysql');

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Paola_2310',
  database: 'testproducts'
});

let userModel = {};

userModel.getProducts = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM products ORDER BY name',
      (err, rows) => {
        if (err) {
          throw err
        }
        else {
          callback(null, rows);
        }
      }
    )
  }
};

userModel.updateProduct = (userData, callback) => {
  if (connection) {
    const sql = `
      UPDATE products SET
        name = ${connection.escape(userData.name)},
        price = ${connection.escape(userData.price)},
        stock = ${connection.escape(userData.stock)}
      WHERE id = ${userData.id}`;
console.log(userData);
    connection.query(sql, function (err, result) {
      if (err) {
        throw err;
      } else {
        callback(null, {
          "msg": "success"
        })
      }
    });
  }
};



module.exports = userModel;
