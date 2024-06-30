import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import './CodeEditor.css';

const CodeEditor: React.FC = () => {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleInput = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText;
      codeRef.current.innerHTML = Prism.highlight(code, Prism.languages.javascript, 'javascript');
      setCaretToEnd(codeRef.current);
    }
  };

  const setCaretToEnd = (element: HTMLElement) => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div className="code-editor">
      <pre style={{ width: '89%', height: '100%', margin: 0 }}>
        <code
          ref={codeRef}
          className="language-javascript"
          contentEditable
          onInput={handleInput}
          suppressContentEditableWarning={true}
        >
            write code here. 
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
