const Feedback = require('../models/Feedback');
const constants = require('../constants');
var HashMap = require('hashmap');

generateMap = (feedbakcs, isCity) => {
    var map = new HashMap();
    let key;
    let hour;
    
    feedbakcs.map(item => {
        key = item.city;
        if(!isCity) {
            hour = item.created_at.getHours();
            if (hour < 10) {
                hour = '0'+ hour;
            } 
            key = hour + 'H'
        };
        if (!map.get(key)) {
            map.set(key, 1);
        } else {
            map.set(key, map.get(key) + 1);
        }
    })
    if (!isCity) {
        var mapOrder = new HashMap();
        map.keys().sort().map(key => {
            mapOrder.set(key, map.get(key));
        })
        return mapOrder.entries()
    }
    return map.entries();
}

module.exports = {
    async index(req, res) {
        const { idCampaign } = req.query;
        const feedbakcs = await Feedback.find({ idCampaign });
        return res.json(feedbakcs);
    },

    async store(req, res) {
        let { idCampaign, idItemCampaign, city = 'Não Informado' } = req.body;

        if (isNaN(idCampaign) || isNaN(idItemCampaign)) {
            res.statusCode = 400;
            return res.json({ message: 'Campanha ou escolha inválida' });
        }

        idItemCampaign = parseInt(idItemCampaign);
        idCampaign = parseInt(idCampaign);

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
                if (idItemCampaign == 2) result.choice = constants.ITEM_2_CAMPAIGN_1;
                break;
            case 2:
                result.partner = constants.PARTNER_2;
                result.campaign = constants.CAMPAIGN_2;
                result.choice = constants.ITEM_1_CAMPAIGN_2;
                if (idItemCampaign == 2) result.choice = constants.ITEM_2_CAMPAIGN_2;
                break;

        }

        return res.json(result);
    },

    async report(req, res) {
        let { idCampaign } = req.params;
        if (isNaN(idCampaign)) {
            res.statusCode = 400;
            return res.json({ message: "Campanha inválida" });
        }
        idCampaign = parseInt(idCampaign);
        const feedbakcs = await Feedback.find({ idCampaign });
        const feedbakcsItem1 = await Feedback.find({ idCampaign, idItemCampaign: 1 });
        const feedbakcsItem2 = await Feedback.find({ idCampaign, idItemCampaign: 2 });
        let result = {
            partner: constants.PARTNER_1,
            campaign: constants.CAMPAIGN_1,
            total: feedbakcs.length,
            graphics: [],
            choices: [{
                title: constants.ITEM_1_CAMPAIGN_1,
                total: feedbakcsItem1.length,
                graphics: []
            }, {
                title: constants.ITEM_2_CAMPAIGN_1,
                total: feedbakcsItem2.length,
                graphics: []
            }]
        };
        if (idCampaign == 2) {
            result.partner = constants.PARTNER_2;
            result.campaign = constants.CAMPAIGN_2;
            result.choices[0].title = constants.ITEM_1_CAMPAIGN_2;
            result.choices[1].title = constants.ITEM_2_CAMPAIGN_2;
        }

        result.graphics = [{
            title: constants.LABEL_GRAPHIC_1,
            values: generateMap(feedbakcs, true)
        }, {
            title: constants.LABEL_GRAPHIC_2,
            values: generateMap(feedbakcs, false)
        }];
        result.choices[0].graphics = [{
            title: constants.LABEL_GRAPHIC_1,
            values: generateMap(feedbakcsItem1, true)
        }, {
            title: constants.LABEL_GRAPHIC_2,
            values: generateMap(feedbakcsItem1, false)
        }];
        result.choices[1].graphics = [{
            title: constants.LABEL_GRAPHIC_1,
            values: generateMap(feedbakcsItem2, true)
        }, {
            title: constants.LABEL_GRAPHIC_2,
            values: generateMap(feedbakcsItem2, false)
        }];

        return res.json(result);
    },
};