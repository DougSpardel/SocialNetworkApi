const mongoose = require('mongoose');

// Import individual models
const User = require('./Users');
const Thought = require('./Thought');
//const Reaction = require('./Reaction'); 

// If you have other models, import them above

// Connect to MongoDB
mongoose.connect('mongodb://localhost/socialnetworkdb')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Export the models
module.exports = { User, Thought };

