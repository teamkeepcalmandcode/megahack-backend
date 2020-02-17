const Feedback = require('../models/Feedback');
const constants = require('../constants');
var HashMap = require('hashmap');

module.exports = {
    async index(req, res) {
        const { idCampaign } = req.query;
        const feedbakcs = await Feedback.find({ idCampaign });
        return res.json(feedbakcs);
    },

    async store(req, res) {
        const { idCampaign, idItemCampaign, city = 'Não Informado' } = req.body;

        if (!isNaN(idCampaign) && !isNaN(idItemCampaign)) return res.json({message: 'Campanha ou escolha inválida'});

        await Feedback.create({
            idCampaign,
            idItemCampaign,
            city
        }, function (error, result) {
            if (error) return result.end(error);
        });

        let result = {
            partner: constants.PARTNER_1,
            campaign: constants.CAMPAIGN_1,
            choice: constants.ITEM_1_CAMPAIGN_1
        };
        
        switch (idCampaign) {
            case 1: 
                result.choice = constants.ITEM_1_CAMPAIGN_1;
                if(idItemCampaign == 2) result.choice = constants.ITEM_2_CAMPAIGN_1;
                break;
            case 2: 
                result.partner = constants.PARTNER_2;
                result.campaign = constants.CAMPAIGN_2;
                result.choice = constants.ITEM_1_CAMPAIGN_2;
                if(idItemCampaign == 2) result.choice = constants.ITEM_2_CAMPAIGN_2;
                break;

        }

        return res.json(result);
    },

    async report(req, res) {
        const { idCampaign } = req.params;
        const feedbakcs = await Feedback.find({ idCampaign });
        let result = {
            partner: constants.PARTNER_1,
            campaign: constants.CAMPAIGN_1,
            total: feedbakcs.length,
        };
        if (idCampaign == 2) {
            result.partner = constants.PARTNER_2;
            result.campaign = constants.CAMPAIGN_2
        }
        var mapCity = new HashMap();
        var mapHour = new HashMap();
        let key;
        feedbakcs.map(item => {
            key = item.city;
            if (!mapCity.get(key)) {
                mapCity.set(key, 1);
            } else {
                mapCity.set(key, mapCity.get(key) + 1);
            }
            key = item.created_at.getHours() + 'H';
            if (!mapHour.get(key)) {
                mapHour.set(key, 1);
            } else {
                mapHour.set(key, mapHour.get(key) + 1);
            }
        })

        result.graphics = [{
            title: 'Grágico por Cidade',
            values: mapCity.entries()
        }, {
            title: 'Gráfico por Horário',
            values: mapHour.entries()
        }];

        return res.json(result);
    },
};