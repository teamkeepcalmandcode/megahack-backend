var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    idItemCampaign: {
        type: Number,
        required: true
    },
    idCampaign: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        default: 'Não Identificado'
    },
    created_at : { 
        type: Date, 
        required: true, 
        default: Date.now 
    }
});

var feedback = mongoose.model('Feedback', schema);

module.exports = feedback;