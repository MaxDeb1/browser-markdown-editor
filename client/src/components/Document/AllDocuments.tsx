import document from "../../assets/icon-document.svg";
import datas from "../../../data.json";
import { useAppStore } from "../../lib/store";

const AllDocuments = () => {
  const { updateActiveDoc } = useAppStore()

  return (
    <div>
      {datas.map((data) => (
        <div
          key={data.id}
          className="document"
          onClick={() => updateActiveDoc(data.name)}
        >
          <img src={document} alt="" />
          <div>
            <p className="document__date">{data.createdAt}</p>
            <p className="document__name">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllDocuments;
