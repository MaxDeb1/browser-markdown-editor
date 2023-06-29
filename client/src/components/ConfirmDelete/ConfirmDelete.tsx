import axios from "axios";
import toast from "react-hot-toast";
import { useAppStore } from "../../lib/store";
import "./ConfirmDelete.css";

const ConfirmDelete = () => {
  const { activeDoc, isModalOpen, setIsModalOpen, updateDocuments, updateActiveDoc } = useAppStore();

  async function fetchData() {
    axios
      .get("/api/documents")
      .then((res) => (
        updateDocuments(res.data),
        updateActiveDoc(res.data[0])
      ));
  }

  const deleteDocument = () => {
    axios.delete(`/api/documents/${activeDoc.id}`).then((response) => {
      console.log(response);
      console.log(response.data);
    });
    setIsModalOpen()
    fetchData()
    toast.success("Document deleted");
  };

  return (
    <div
      className={`modal ${!isModalOpen ? "hidden" : ""}`}
      // onClick={() => setIsModalOpen()}
    >
      <div className="modal__box">
        <span className="modal__title">Delete this document?</span>
        <p className="modal__text">
          Are you sure you want to delete the ’{activeDoc.name}’ document and
          its contents? This action cannot be reversed.
        </p>
        <button className="button" onClick={deleteDocument}>
          <span>Confirm & Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
