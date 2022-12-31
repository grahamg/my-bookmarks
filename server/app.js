const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const bookmarksController = require('./controllers/bookmarks');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.use(bodyParser.json());

app.get('/api/bookmarks', bookmarksController.getBookmarks);
app.post('/api/bookmarks', bookmarksController.addBookmark);
app.delete('/api/bookmarks/:id', bookmarksController.deleteBookmark);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
