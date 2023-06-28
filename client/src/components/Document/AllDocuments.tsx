import iconDocument from "../../assets/icon-document.svg";
import { useAppStore } from "../../lib/store";
import { Document } from "../Sidebar/Sidebar";
import { format } from "date-fns";

const AllDocuments = ({ documents }: { documents: Document[] }) => {
  const { updateActiveDoc } = useAppStore();

  return (
    <div>
      {documents.map((document) => (
        <div
          key={document.id}
          className="document"
          onClick={() => updateActiveDoc(document)}
        >
          <img src={iconDocument} alt="" />
          <div>
            <p className="document__date">{format(new Date(document.createdAt), "d LLLL yyyy")}</p>
            <p className="document__name">{document.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDocuments;
