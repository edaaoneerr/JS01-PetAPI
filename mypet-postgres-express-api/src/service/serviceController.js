const pool = require('../../db');
const queries = require('./serviceQueries');


const getServices = (req, res) => {
 
    pool.query(queries.getServices, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getServiceById = (req, res) => {
    const  service_id = req.params.id;
    pool.query(queries.getServiceById, [service_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteService = (req, res) => {
    
    const id = req.params.id;
    pool.query(queries.deleteService, [id], (err, result) => {
           if (err) throw (err);
           res.json(`Service with Service_id ${id} deleted successfully.`);
       })
   
  };

  const updateService = (req, res) => {
    const id = req.params.id;
    const {service_name} = req.body;
    pool.query(queries.updateService, [service_name], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint Services_Servicename_key") {
           res.json(`Servicename already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`Service with Service_id ${id} updated successfully.`);
      
    }}
    );
  }


  const addService = (req, res) => {
    const {service_name} = req.body;
    pool.query(queries.addService, [service_name], (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getServices, getServiceById, deleteService, updateService, addService};