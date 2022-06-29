const express = require('express');
const router = express.Router();

// Signup
router.get('/signup', (req,res) => res.render('signup', {title: 'Sign Up'}));

// Login
router.get('/login', (req, res) => res.render('login', {title: 'Log In'}))

module.exports = router;