const { Model, DataTypes, Sequelize } = require('sequelize');

const DEMANDE_TABLE = 'demandes';

class Demande extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: DEMANDE_TABLE,
            modelName: 'Demande',
            timestamps: true
        }
    }
} 

const DemandeSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT,
        field:'description'
    },
    localisation:{ 
        allowNull:false,
        type: DataTypes.STRING,
        field: 'localisation'
    },
    userID:{ 
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'user'
    },
    picture:{ 
        allowNull:true,
        type: DataTypes.STRING,
        field: 'picture'
    },
    status:{ 
        allowNull:true,
        type: DataTypes.ENUM('Behind', 'In Progress','Ready'),
        field: 'status',
        defaultValue: 'Behind'
    },
    priorite:{ 
        allowNull:true,
        type: DataTypes.STRING,
        field: 'priorite',
        type: DataTypes.ENUM('Low','Medium', 'High','Critical'),
    }  
}
  
module.exports = { Demande, DemandeSchema };