import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

const markdownContent = `
# Hello World

This is a sample markdown content.

- Item 1
- Item 2
- Item 3
`;

const SomeComponent: React.FC = () => {
  return (
    <div>
      <MarkdownRenderer content={markdownContent} />
    </div>
  );
};

export default SomeComponent;
