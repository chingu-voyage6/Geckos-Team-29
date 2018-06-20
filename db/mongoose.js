var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sahilgreen:Sahil12345@ds261440.mlab.com:61440/studentresources');

module.exports=mongoose

