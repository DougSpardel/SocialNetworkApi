const router = require('express').Router();
const { Thought, User } = require('../../models');

// Get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughtData = await Thought.find({});
    res.json(thoughtData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching thoughts', error: err });
  }
});

// Get a single thought by ID
router.get('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findById(req.params.id)
      .populate('reactions')
      .populate('username');
    if (!thoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thoughtData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new thought
router.post('/', async (req, res) => {
  try {
    const thoughtData = await Thought.create(req.body);
    const userUpdate = await User.findByIdAndUpdate(
      req.body.userId,
      { $push: { thoughts: thoughtData._id } },
      { new: true }
    );

    if (!userUpdate) {
      await Thought.findByIdAndRemove(thoughtData._id); // Rollback thought creation if user not found
      res.status(404).json({ message: 'User not found with this id!' });
      return;
    }

    res.status(200).json(thoughtData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Error creating thought', error: err });
  }
});

// Update a thought by ID
router.put('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!thoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }
    res.json(thoughtData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete a thought
router.delete('/:id', async (req, res) => {
  try {
    const thoughtData = await Thought.findByIdAndDelete(req.params.id);
    if (!thoughtData) {
      res.status(404).json({ message: 'No thought found with this id!' });
      return;
    }

    // Remove the deleted thought from the user's thoughts array
    await User.findByIdAndUpdate(
      thoughtData.userId,
      { $pull: { thoughts: req.params.id } },
      { new: true }
    );

    res.json({ message: 'Thought successfully deleted!' });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
