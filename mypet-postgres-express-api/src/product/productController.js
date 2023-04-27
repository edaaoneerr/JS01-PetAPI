const pool = require('../../db');
const queries = require('./productQueries');


const getProducts = (req, res) => {
 
    pool.query(queries.getProducts, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getProductById = (req, res) => {
    const  product_id = req.params.id;
    pool.query(queries.getProductById, [product_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteProduct = (req, res) => {
    
    const id = req.params.id;
    pool.query(queries.deleteProduct, [id], (err, result) => {
           if (err) throw (err);
           res.json(`Product with Product_id ${id} deleted successfully.`);
       })
   
  };

  const updateProduct = (req, res) => {
    const id = req.params.id;
    const {product_name, product_price, product_brand} = req.body;
    pool.query(queries.updateProduct, [id, product_name, product_price, product_brand], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint Products_Productname_key") {
           res.json(`Productname already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`Product with Product_id ${id} updated successfully.`);
      
    }}
    );
  }


  const addProduct = (req, res) => {
    const {product_name, product_price, product_brand} = req.body;
    pool.query(queries.addProduct, [product_name, product_price, product_brand], (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getProducts, getProductById, deleteProduct, updateProduct, addProduct};