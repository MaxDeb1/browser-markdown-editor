import { useState } from "react";
import datas from "../../../data.json";
import document from "../../assets/icon-document.svg";
import "./Document.css";

const Document = ({ all }: { all: boolean }) => {
  const [activeDoc, setActiveDoc] = useState(datas[0].name);
  const [documentName, setDocumentName] = useState(activeDoc);

/*   const handleChange = (event) => {
    setDocumentName(event.target.value);
  } */

  return (
    <>
      {all
        ? datas.map((data) => (
            <div
              key={data.id}
              className="document"
              onClick={() => setActiveDoc(data.name)}
            >
              <img src={document} alt="" />
              <div>
                <p className="document__date">{data.createdAt}</p>
                <p className="document__name">{data.name}</p>
              </div>
            </div>
          ))
        : (
          <div className="document">
          <img src={document} alt="" />
          <div>
            <p className="document__legend">Document Name</p>
            <input
              type="text"
              className="document__name"
              value={activeDoc}
              spellCheck="false"
              // onChange={handleChange}
            />
          </div>
        </div>
        )}
    </>
  );
};

export default Document;
