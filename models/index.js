const { Demande, DemandeSchema } = require('./demande.model');

function setupModels(sequelize) {
    Demande.init(DemandeSchema, Demande.config(sequelize));
}

module.exports = setupModels;