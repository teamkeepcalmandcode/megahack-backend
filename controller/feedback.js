const Feedback = require('../models/Feedback');

module.exports = {
    async index(req, res) {
        const { idCampaign } = req.query;
        const feedbakcs = await Feedback.find({ idCampaign });
        return res.json(feedbakcs);
    },

    async store(req, res) {
        const { idCampaign, idItemCampaign, city = 'Não Informado' } = req.body;

        let feedback = await Feedback.create({
            idCampaign,
            idItemCampaign,
            city
        });

        return res.json(feedback);
    }
};