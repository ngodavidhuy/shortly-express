const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // if (req.cookies.hasOwnProperty('sessId')) {
  //   console.log(req.body, 'checking on cookies');
  //   models.Sessions.get({id: req.c});
  //   next();
  // } else {
  //   models.Sessions.create()
  //     .then(session => {
  
  //       //console.log(session);
  //       return models.Sessions.get({id: session.insertId});
  //     })
  //     .then(sessionRow => {
  //       console.log(sessionRow);
  //       res.cookie('sessId', sessionRow.hash);
  //       res.send();
  //     });
      
  //   }
  next();
  };

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

