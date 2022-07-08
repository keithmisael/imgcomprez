const express = require('express');
const router = express.Router();

// Signup
router.get('/signup', (req,res) => res.render('signup', {title: 'Sign Up'}));

router.get('/result', (req, res) => res.render('result'))

router.post('/signup', (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    const f = {
        email,
        pass
    }
    res.redirect('/result')
    res.end()
});

// Login
router.get('/login', (req, res) => res.render('login', {title: 'Log In'}))

module.exports = router;