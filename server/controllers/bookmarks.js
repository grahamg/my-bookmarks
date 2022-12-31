const Bookmark = require('../models/bookmark');
const BookmarksService = require('../services/bookmarks');

module.exports = {
  async getBookmarks(req, res) {
    const bookmarks = await BookmarksService.getBookmarks();
    res.send(bookmarks);
  },
  async addBookmark(req, res) {
    const bookmark = new Bookmark(req.body);
    const savedBookmark = await BookmarksService.addBookmark(bookmark);
    res.send(savedBookmark);
  },
  async deleteBookmark(req, res) {
    await BookmarksService.deleteBookmark(req.params.id);
    res.send();
  },
};
