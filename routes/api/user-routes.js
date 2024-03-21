const router = require('express').Router();
const { User } = require('../../models');

// Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.find({})
      .populate('thoughts')
      .populate('friends');
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findById(req.params.id)
      .populate('thoughts')
      .populate('friends');
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.findByIdAndDelete(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }
    res.json({ message: 'User successfully deleted!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
