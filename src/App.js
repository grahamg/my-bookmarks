import React, { useState } from 'react';
import BookmarkList from './components/BookmarkList';
import ImportExport from './components/ImportExport';

function App() {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'Google', url: 'https://www.google.com' },
    { id: 2, title: 'Facebook', url: 'https://www.facebook.com' },
  ]);

  function handleImportBookmarks(importedBookmarks) {
    setBookmarks(importedBookmarks);
  }

  return (
    <div>
      <ImportExport bookmarks={bookmarks} onImport={handleImportBookmarks} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default App;

