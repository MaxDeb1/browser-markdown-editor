import iconDocument from "../../assets/icon-document.svg";
import { useAppStore } from "../../lib/store";
import axios from "axios";
import { useEffect, useState } from "react";

interface Documents {
  id: number,
  name: string,
  createdAt: string
}

const AllDocuments = () => {
  const { updateActiveDoc } = useAppStore()
  const [ documents, setDocuments ] = useState<Documents[]>([]);

  useEffect(() => {
    axios
      .get("../../../data.json")
      .then((res) => setDocuments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {documents.map((document) => (
        <div
          key={document.id}
          className="document"
          onClick={() => updateActiveDoc(document.id)}
        >
          <img src={iconDocument} alt="" />
          <div>
            <p className="document__date">{document.createdAt}</p>
            <p className="document__name">{document.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDocuments;
