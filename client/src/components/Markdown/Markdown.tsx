import { useEffect } from "react";
import { useAppStore } from "../../lib/store";
import "./Markdown.css";

const MarkdownPanel = () => {
  const { activeDoc } = useAppStore();
  const { markdownContent, updateMarkdownContent } = useAppStore();

  useEffect(() => {
/*     if(Object.keys(activeDoc).length === 0) {
      return console.log("empty");
    } */
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
      {Object.keys(activeDoc).length === 0 ?
        <p>Loading...</p> :
        <textarea
          id="mardown"
          className="content"
          name="content"
          spellCheck="false"
          value={markdownContent}
          onChange={handleChange}
        />
      }
    </div>
  );
};

export default MarkdownPanel;
