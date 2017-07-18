const
  mongoose = require('mongoose')
  bcrypt   = require('bcrypt-nodejs');
  passport = require('passport'),



 userSchema = new mongoose.Schema({
  local: {
    name: String,
    password: String,
    email: String,
  },
  profile_pic: {type: String},
  location: {type: String},
  bio: {type:String},
  favorite: {type:String},
  comments: [{type:mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('User', userSchema)

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
