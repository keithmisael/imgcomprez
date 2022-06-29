const express = require('express');
const router = express.Router();

// Signup

router.get('/signup', (req,res) => res.render('signup', {title: 'Sign Up'}));

module.exports = router;