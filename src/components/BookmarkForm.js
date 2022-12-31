import React, { useState } from 'react';

function BookmarkForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAdd({ title, url });
    setTitle('');
    setUrl('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <br />
      <label>
        URL:
        <input type="text" value={url} onChange={(event) => setUrl(event.target.value)} />
      </label>
      <br />
      <button type="submit">Add Bookmark</button>
		</form>
	);
}

export default BookmarkForm;
