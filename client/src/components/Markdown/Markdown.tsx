import { useEffect } from "react";
import { useAppStore } from "../../lib/store";
import "./Markdown.css";

const MarkdownScreen = () => {
  const { activeDoc } = useAppStore();
  const { markdownContent, updateMarkdownContent } = useAppStore();

  useEffect(() => {
    updateMarkdownContent(activeDoc.content);
  }, [activeDoc, updateMarkdownContent]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateMarkdownContent(event.target.value);
  };

  return (
    <div className="markdown">
      <label htmlFor="markdown" className="title">
        Markdown
      </label>
      <textarea
        id="mardown"
        className="content"
        name="content"
        spellCheck="false"
        value={markdownContent}
        onChange={handleChange}
      />
    </div>
  );
};

export default MarkdownScreen;
