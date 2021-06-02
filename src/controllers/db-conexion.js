const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:gn0s1da@localhost:5432/dvdrental');

//const { Pool } = require('pg');
/*
const pool = new Pool ({
  host:'localhost',
  user:'postgres',
  password:'gn0s1da',
  database:'dvdrental'  
})*/

module.exports = {
  sequelize,
  DataTypes
}