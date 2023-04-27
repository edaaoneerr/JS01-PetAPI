const getCampaigns = "SELECT * FROM campaign;";
const getCampaignById = "SELECT * FROM campaign WHERE campaign_id = $1;";
const deleteCampaignWithId = "DELETE FROM campaign WHERE campaign_id = $1;";
const updateCampaign = "UPDATE campaign SET campaign_name = $1, campaign_image_url = $2, campaign_description = $3, campaign_discount_rate = $4, campaign_start_date = $5, campaign_end_date= $6, campaign_vet_id = $7"
const addCampaign = "INSERT INTO campaign (campaign_name, campaign_image_url, campaign_description, campaign_discount_rate, campaign_start_date, campaign_end_date, campaign_vet_id) VALUES ($1, $2, $3, $4, $5, $6, $7);";

module.exports = {getCampaigns, getCampaignById, deleteCampaignWithId, updateCampaign, addCampaign};