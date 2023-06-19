import "./Sidebar.css";
import useMenuStore from "../../lib/store";
import Document from "../Document/Document";


const Sidebar = () => {
  const isMenuOpen = useMenuStore((state) => state.isOpen)

  return (
    <section className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <h4>My Documents</h4>
      <button className="button newDoc">+ New Document</button>
        <Document />
    </section>
  );
};

export default Sidebar;
