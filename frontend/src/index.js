import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { marked } from "marked";

const App = () => {
  const [markdownText, setMarkdownText] = useState("");
  const [htmlText, setHtmlText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleMarkdownChange = (event) => {
    const markdownValue = event.target.value;
    setMarkdownText(markdownValue);
    setHtmlText(marked(markdownValue));
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);

    // Add or remove dark mode class to the body for full-page effect
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button className="mode-toggle" onClick={toggleMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <h1>Live Markdown & HTML Editor</h1>
      <div className="editor-container">
        {/* Markdown Editor */}
        <div className="editor-section markdown-section">
          <textarea
            className="editor"
            value={markdownText}
            onChange={handleMarkdownChange}
            placeholder="Start typing markdown here"
          />
        </div>
        {/* Preview Section */}
        <div className="preview-section">
          <div
            className="output"
            dangerouslySetInnerHTML={{ __html: htmlText }}
          />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
