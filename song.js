const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
const Song = sequelize.define('Song', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  instrument: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

let Song;

module.exports = {
    Song
};
