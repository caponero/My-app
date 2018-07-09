CREATE DATABASE testproducts;

USE testproducts;

CREATE TABLE IF NOT EXISTS `products` (
  `id` int (10) unsigned NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `price` float(5.2) COLLATE utf8_unicode_ci NOT NULL,
  `stock` int(10) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARACTER SET=utf8;

show tables;

describe products;

SELECT * FROM products;

INSERT INTO products (id, name, price, stock) VALUES (22, 'Termo', 12, 25);
INSERT INTO products (id, name, price, stock) VALUES (23, 'Carrito', 56.9, 25);
INSERT INTO products (id, name, price, stock) VALUES (24, 'Cava', 12.5 , 50);
INSERT INTO products (id, name, price, stock) VALUES (27, 'Cesta', 30.2, 20);
