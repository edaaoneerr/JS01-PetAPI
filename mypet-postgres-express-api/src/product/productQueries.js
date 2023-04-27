const getProducts = "SELECT * FROM product;";
const getProductById = "SELECT * FROM product WHERE product_id = $1;";
const deleteProduct = "DELETE FROM product WHERE product_id = $1;";
const updateProduct = "UPDATE product SET product_name = $2, product_price = $3, product_brand = $4 WHERE product_id = $1;";
const addProduct = "INSERT INTO product (product_name,  product_price, product_brand, st_id) VALUES ($1, $2, $3, (SELECT ST_ID FROM ST WHERE ST_NAME = 'IS_PROD'))";

module.exports = {getProducts, getProductById, deleteProduct, updateProduct, addProduct};