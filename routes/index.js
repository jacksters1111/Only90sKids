var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index', { title: '90s Kids', user: req.user });
});

function jon(req, res, next) {
  console.log('fuck');
  next();
};

app.use('jon');

router.get('/auth/google', jon(), passport.authenticate(
  'google',
  {scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

module.exports = router;
