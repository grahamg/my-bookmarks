const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
