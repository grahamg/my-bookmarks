import React, { useState, useEffect } from 'react';
import Bookmark from './Bookmark';

function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'Google', url: 'https://www.google.com' },
    { id: 2, title: 'Facebook', url: 'https://www.facebook.com' },
  ]);

	useEffect(() => {
		async function fetchBookmarks() {
      const response = await fetch('http://example.com/api/bookmarks');
      const data = await response.json();
      setBookmarks(data);
    }
    fetchBookmarks();
	}, []);

  function handleAddBookmark(bookmark) {
    setBookmarks([...bookmarks, bookmark]);
  }

  function handleDeleteBookmark(id) {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  }

  return (
    <div>
      {bookmarks.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          onDelete={handleDeleteBookmark}
        />
      ))}
    </div>
  );
}

export default BookmarkList;
