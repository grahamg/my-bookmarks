const Bookmark = require('../models/bookmark');

module.exports = {
  async getBookmarks() {
    return await Bookmark.find();
  },
  async addBookmark(bookmark) {
    return await bookmark.save();
  },
  async deleteBookmark(id) {
    return await Bookmark.findByIdAndDelete(id);
  },
};

