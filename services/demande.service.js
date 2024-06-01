const { models } = require('../config/sequelize');
const sendToUser = require('../index');
class DemandeService {

  constructor() { }

  async find() {
    const res = await models.Demande.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Demande.findByPk(id);
    return res;
  }

  async create(data) {
    const res = await models.Demande.create(data);
    return res;
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }


  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }
  async findByUserID(userID) {

    

    const res = await models.Demande.findAll({ where: { userID } });
    
    return res;
  }
  async updatePriorite(id, priority) {


    
    const demande = await models.Demande.findByPk(id);
    if (demande) {

      demande.dataValues.priorite = priority.preiority
      
      let notification={
        title:"Update Priorite",
       
        date:new Date(),
        
    }
    console.log(demande.dataValues.userID);
    sendToUser.sendToUser(notification, demande.dataValues.userID+'User');

      const res = await models.Demande.update({ priorite: priority.preiority }, {
        where: {
          id: demande.dataValues.id
        }
      })
      

    }
    return demande;
  }






}
module.exports = DemandeService;