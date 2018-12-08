const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if (req.cookies.hasOwnProperty('shortlyid')) {
    //console.log(req.body, 'checking on cookies');
    models.Sessions.get({hash: req.cookies.shortlyid})
      .then(sessionRow => {
        console.log(sessionRow, 'HEYY SESSION ROW');
        // req.session = {
        //   hash: req.cookies.shortlyid
        // };
        req.session = sessionRow;
        next();
        //return models.Users.get({id: sessionRow.userId});
      // })
      // .catch(err => {
      //   console.log('error getting session row');
      // })
      // .then(userRow => {
      //   console.log(userRow, 'get user row');
      //   console.log(req.session, 'TESTING');
      //   req.session['userId'] = userRow.id;
      //   req.session['user'] = {username: userRow.username};
      //   console.log(req.session, 'AFTER NEW ADDITIONS');
      //   res.cookies = req.cookies;
      //   console.log('set session and cookies');
      //   next();
      // })
      // .catch(err => {
      //   console.log('error getting user row');
      //   next();
      });
  } else {
    models.Sessions.create()
      .then(session => {
  
        //console.log(session);
        return models.Sessions.get({id: session.insertId});
      })
      .then(sessionRow => {
        //console.log(sessionRow, 'just got new session row');
        req.session = {hash: sessionRow.hash};
        res.cookie('shortlyid', sessionRow.hash);
        next();
      });
      
  }
  //next();
  //res.send();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

