import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
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

  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/documents")
      .then((res) => setDocuments(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddDocument = () => {
    axios
      .post(`http://localhost:3000/documents`, {
        id: documents.length + 1,
        name: "untitled-document.md",
        createdAt: format(new Date(), "d LLLL yyyy"),
        content: "# Create your new markdown here!",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
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
