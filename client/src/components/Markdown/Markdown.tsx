import { useAppStore } from "../../lib/store";
import "./Markdown.css";

const MarkdownScreen = () => {
  const { activeDoc } = useAppStore();

  return (
    <div className="markdown">
      <label htmlFor="markdown" className="title">
        Markdown
      </label>
      <textarea
        id="mardown"
        className="content"
        name="content"
        value={activeDoc.content}
      />
    </div>
  );
};

export default MarkdownScreen;
