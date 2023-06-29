import axios from "axios";
import { format } from "date-fns";
import { useEffect } from "react";
import { useAppStore } from "../../lib/store";
import ColorSchemeToggle from "../ColorScheme/ColorSchemeToggle";
import AllDocuments from "../Document/AllDocuments";
import "./Sidebar.css";

export interface Document {
  id: number;
  name: string;
  createdAt: string;
  content: string;
}

const Sidebar = () => {
  const isMenuOpen = useAppStore((state) => state.isOpen);
  const { updateActiveDoc, documents, updateDocuments } = useAppStore();

  async function fetchData() {
    axios
      .get("/api/documents")
      .then((res) => (
        updateDocuments(res.data),
        updateActiveDoc(res.data[0])
      ));
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleAddDocument = () => {
    axios
      .post(`/api/documents`, {
        name: "untitled-document.md",
        createdAt: format(new Date(), "yyyy-MM-dd"),
        content: "# Create your new markdown here!",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    fetchData()
  };

  return (
    <section className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <h4>My Documents</h4>
      <button className="button newDoc" onClick={handleAddDocument}>
        + New Document
      </button>
      <AllDocuments documents={documents} />
      <ColorSchemeToggle />
    </section>
  );
};

export default Sidebar;
