const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetworkdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use apiRoutes
app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
