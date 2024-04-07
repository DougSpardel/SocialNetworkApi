const mongoose = require('mongoose');
const { User, Thought } = require('../models'); // Update the path if needed

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkdb';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const users = [
  {
    username: 'user1',
    email: 'user1@test.com',
    thoughts: [],
    friends: [],
  },
  // ... other users
];

const thoughts = [
  {
    thoughtText: 'The MLB is the best sports organization in the US',
    
    username: 'user1',
    reactions: [],
  },
  // ... other thoughts
];

const seedDB = async () => {
    // Delete existing documents from the database
    await User.deleteMany({});
    await Thought.deleteMany({});
  
    // Add new seed data to the database
    await User.insertMany(users);
    console.log('Users seeded!');
  
    await Thought.insertMany(thoughts);
    console.log('Thoughts seeded!');
  
    // Close the database connection
    mongoose.connection.close();
  };
  
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    seedDB().then(() => {
      console.log('Seeding complete!');
    });
  });
