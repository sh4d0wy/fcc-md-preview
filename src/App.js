import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css'; // You can add your own styles here

function App() {
  const [markdownText, setMarkdownText] = useState('');

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <div className="editor">
        <h2>Markdown Input</h2>
        <textarea
          value={markdownText}
          onChange={handleChange}
          placeholder="Enter Markdown here..."
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div className="markdown-output">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
