const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  models.Sessions.create()
    .then(session => {
      //console.log(session);
      return models.Sessions.get({id: session.insertId});
    })
    .then(sessionRow => {

    });
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

