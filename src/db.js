//
import Sequelize from 'sequelize';
import fs from 'fs'; //modulo para recorrer archivos
import path from 'path' //modulo para unir directorios tanto en windows y linux

let db = null;

module.exports = app =>{

    const config = app.libs.config;

    if(!db){
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );
        db = {
            sequelize,
            Sequelize,
            models:{}
        };
 
        const dir = path.join(__dirname,'models');
        fs.readdirSync(dir).forEach(filename =>{
            /*const modelDir = path.join(dir, filename);
            const model = sequelize.import(modelDir);*/
            const model = require(path.join(dir,filename))(sequelize,Sequelize.DataTypes);
            db.models[model.name] = model;
        });
 

        Object.keys(db.models).forEach(key=>{
            db.models[key].associate(db.models);
        });

    }

    return db;


}