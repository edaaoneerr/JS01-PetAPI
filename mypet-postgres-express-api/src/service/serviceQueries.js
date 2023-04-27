const getServices = "SELECT * FROM service;";
const getServiceById = "SELECT * FROM service WHERE service_id = $1;";
const deleteServiceWithId = "DELETE FROM service WHERE service_id = $1;";
const updateService = "UPDATE service SET service_name = $1"
const addService = "INSERT INTO service (service_name) VALUES ($1);";

module.exports = {getServices, getServiceById, deleteServiceWithId, updateService, addService};