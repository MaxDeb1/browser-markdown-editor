import "./Sidebar.css";
import { useAppStore } from "../../lib/store";
import AllDocuments from "../Document/AllDocuments";


const Sidebar = () => {
  const isMenuOpen = useAppStore((state) => state.isOpen)

  return (
    <section className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <h4>My Documents</h4>
      <button className="button newDoc">+ New Document</button>
      <AllDocuments />
    </section>
  );
};

export default Sidebar;
