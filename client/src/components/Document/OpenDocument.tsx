import document from "../../assets/icon-document.svg";
import { useAppStore } from "../../lib/store";
import "./Document.css";

const OpenDocument = () => {
  const { activeDoc } = useAppStore();

  return (
    <div className="document">
      <img src={document} alt="" />
      <div>
        <p className="document__legend">Document Name</p>
        <input
          type="text"
          className="document__name"
          value={activeDoc}
          spellCheck="false"
          onChange={(e) => e.target.value}
        />
      </div>
    </div>
  );
};

export default OpenDocument;
