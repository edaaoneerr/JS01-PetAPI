const { Router } = require('express');
const router = Router();
const CampaignController = require('./campaignController');

router.get('/', CampaignController.getCampaigns);
router.get('/:id', CampaignController.getCampaignById);
router.post('/', CampaignController.addCampaign);
router.delete('/:id', CampaignController.deleteCampaign);
router.patch('/:id', CampaignController.updateCampaign);

module.exports = router;