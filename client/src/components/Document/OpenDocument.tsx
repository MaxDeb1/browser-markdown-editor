import { useEffect, useState } from "react";
import document from "../../assets/icon-document.svg";
import { useAppStore } from "../../lib/store";
import "./Document.css";

const OpenDocument = () => {
  const { activeDoc } = useAppStore();
  const [ documentName, setDocumentName ] = useState("")

  useEffect(() => {
    setDocumentName(activeDoc.name)
  }, [activeDoc])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentName(event.target.value);
  }

  return (
    <div className="document">
      <img src={document} alt="" />
      <div>
        <p className="document__legend">Document Name</p>
        <input
          type="text"
          className="document__name"
          value={documentName}
          spellCheck="false"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default OpenDocument;
