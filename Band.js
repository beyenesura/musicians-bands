const { Sequelize, sequelize } = require('./db');

const Musician = sequelize.define('Musician', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  instrument: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Band = sequelize.define('Band', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = {
  Musician,
  Band
};
