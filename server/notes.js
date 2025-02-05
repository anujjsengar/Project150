const express = require('express');
const router = express.Router();
const Note = require('./Note');

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

router.post('/', async (req, res) => {
  const newNote = new Note({
    content: req.body.content,
  });
  await newNote.save();
  res.status(201).json(newNote);
});

router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;