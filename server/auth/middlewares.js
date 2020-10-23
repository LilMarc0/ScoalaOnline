const jwt = require('jsonwebtoken');
const { User } = require('../models');

function checkTokenSetUser(req, res, next) {
  const authHeader = req.get('authorization');
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    if (token && token !== 'null') {
      jwt.verify(token, process.env.TOKEN_SECRET, { algorithms: ['RS256'] }, (error, user) => {
        if (error) {
          console.log('AUTH HEAD THAT CREATES ERROR ', authHeader, token);
          console.log(error);
        }
        req.user = user;
        next();
      });
    } else {
      console.log('Nu verifica');
      next();
    }
  } else {
    next();
  }
}

function isLoggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    const error = new Error('🚫 Un-Authorized 🚫');
    res.status(401);
    next(error);
  }
}

module.exports = {
  checkTokenSetUser,
  isLoggedIn
};