const mongoose = require('mongoose');
const { use } = require('passport');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/prac',{useNewUrlParser:true })

const userSchema= mongoose.Schema({
  name:String,
  username: String,
  email: String,
  password: String
})

userSchema.plugin(plm);

module.exports= mongoose.model('user', userSchema);