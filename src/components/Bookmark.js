import React from 'react';

function Bookmark({ bookmark, onDelete }) {
  return (
    <div>
      <a href={bookmark.url}>{bookmark.title}</a>
      <button onClick={() => onDelete(bookmark.id)}>Delete</button>
    </div>
  );
}

export default Bookmark;
