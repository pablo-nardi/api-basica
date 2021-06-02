const {sequelize, DataTypes} = require('../controllers/db-conexion');


const Actor = sequelize.define("actor",{
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT
},{
    tableName: 'actor'
});

module.exports = {
    Actor
}