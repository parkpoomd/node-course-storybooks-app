const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', 
{scope: ['profile', 'email']}));

router.get('/google/callback',
  passport.authenticate('google', {
    failureRedirest: '/'
  }), function(req, res) {
    // Successful authentication, redirect dashboard.
    res.redirect('/dashboard');
  });

router.get('/verify', (req, res) => {
  if (req.user) {
    console.log(req.user);
  } else {
    console.log('Not Auth');
  }
})

module.exports = router;
