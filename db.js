const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
  dialect: 'sqlite',
  storage: __dirname + '/data/drugebook-api-sqlite'
});

const db = {};

db.drug = sequelize.import(__dirname + '/models/drug.js');

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
