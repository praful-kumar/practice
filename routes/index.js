const express = require('express');
const router = express.Router();
const userModal = require('./users')
const passport = require('passport');
const localStratagy = require('passport-local')


passport.use(new localStratagy(userModal.authenticate()))
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/allusers', function(req, res) {
  userModal.find()
  .then((u)=>{
    res.render('allusers',{userdata:u});
  }) 
});


router.post('/reg',(req, res)=>{
  var newUser = new userModal({
    name: req.body.name,
    username: req.body. username,
    email: req. body.email
  })
  userModal.register(newUser, req.body.password)
  .then((u)=>{
    passport.authenticate('local')(req, res,()=>{
      res.redirect('/allusers')
    })
  })
})

router.post('/login',passport.authenticate('local',{
  successRedirect: '/allusers',
  failureRedirect: '/'
}),(req, res)=>{})
router.get('/logout',(req, res)=>{
  req.logOut,

  res.redirect('/')
})

module.exports = router;
