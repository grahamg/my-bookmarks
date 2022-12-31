import React, { useState } from 'react';

function ImportExport({ bookmarks, onImport }) {
  const [json, setJson] = useState('');

  function handleChange(event) {
    setJson(event.target.value);
  }

  function handleImport() {
    const importedBookmarks = JSON.parse(json);
    onImport(importedBookmarks);
  }

  function handleExport() {
    const json = JSON.stringify(bookmarks);
    downloadFile(json, 'bookmarks.json');
  }

  function downloadFile(text, filename) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

  return (
    <div>
      <textarea value={json} onChange={handleChange} />
      <button onClick={handleImport}>Import</button>
      <button onClick={handleExport}>Export</button>
    </div>
  );
}

export default ImportExport;

