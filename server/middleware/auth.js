const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  models.Sessions.get({hash: req.cookies.shortlyid})
    .then((sessionRow) => {
      if (sessionRow === undefined) {
        throw new Error('session does not exist');
      }
      req.session = sessionRow;
      next();
    })
    .catch(err => {
      models.Sessions.create()
        .then(session => {
          return models.Sessions.get({id: session.insertId});
        })
        .then(sessionRow => {
          req.session = {hash: sessionRow.hash};
          res.cookie('shortlyid', sessionRow.hash);
          next();
        });
    });
      
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/
module.exports.updateSession = (userId, hash) => {
  models.Sessions.update({hash}, {userId});
};

module.exports.verifySession = (req, res, next) => {
  if (!req.session.user) {
    res.redirect('/login');
  } else {
    next();
  }
};
