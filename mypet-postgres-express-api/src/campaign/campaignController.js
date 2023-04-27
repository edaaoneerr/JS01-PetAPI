const pool = require('../../db');
const queries = require('./campaignQueries');


const getCampaigns = (req, res) => {
 
    pool.query(queries.getCampaigns, (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const getCampaignById = (req, res) => {
    const  campaign_id = req.params.id;
    pool.query(queries.getCampaignById, [campaign_id], (err, result) => {
      if (err) throw (err);
        res.json(result.rows);
      
    });
  };
  const deleteCampaign = (req, res) => {
    
    const id = req.params.id;
    pool.query(queries.deleteCampaign, [id], (err, result) => {
           if (err) throw (err);
           res.json(`Campaign with Campaign_id ${id} deleted successfully.`);
       })
   
  };

  const updateCampaign = (req, res) => {
    const id = req.params.id;
    const {campaign_name, campaign_image_url, campaign_description, campaign_discount_rate, campaign_start_date, campaign_end_date, campaign_vet_id} = req.body;
    pool.query(queries.updateCampaign, [campaign_name, campaign_image_url, campaign_description, campaign_discount_rate, campaign_start_date, campaign_end_date, campaign_vet_id], (err, result) => {
      if (err) {
         if (err = "duplicate key value violates unique constraint Campaigns_Campaignname_key") {
           res.json(`Campaignname already exists : ${err}`);
         }
         else{
          throw(err);
         }      
      }
      else{
         res.json(`Campaign with Campaign_id ${id} updated successfully.`);
      
    }}
    );
  }


  const addCampaign = (req, res) => {
    const {campaign_name, campaign_image_url, campaign_description, campaign_discount_rate, campaign_start_date, campaign_end_date, campaign_vet_id} = req.body;
    pool.query(queries.addCampaign, [campaign_name, campaign_image_url, campaign_description, campaign_discount_rate, campaign_start_date, campaign_end_date, campaign_vet_id], (err, result) => {
       if (err) throw (err);
        res.json(result.rows);
      
    });
  };

  module.exports = {getCampaigns, getCampaignById, deleteCampaign, updateCampaign, addCampaign};