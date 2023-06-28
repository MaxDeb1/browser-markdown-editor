import axios from "axios";
import close from "../../assets/icon-close.svg";
import trash from "../../assets/icon-delete.svg";
import menu from "../../assets/icon-menu.svg";
import save from "../../assets/icon-save.svg";
import logo from "../../assets/logo.svg";
import { useAppStore } from "../../lib/store";
import OpenDocument from "../Document/OpenDocument";
import "./Header.css";

const Header = () => {
  const isMenuOpen = useAppStore((state) => state.isOpen);
  const toggleMenu = useAppStore((state) => state.toggleIsOpen);
  const { activeDoc, documentName, markdownContent } = useAppStore();

  const handleDelete = () => {
    axios
      .delete(`/api/documents/${activeDoc.id}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };
  const handleSave = () => {
    axios
      .put(`/api/documents/${activeDoc.id}`, {
        ...activeDoc,
        name: documentName,
        content: markdownContent,
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      });
  };

  return (
    <header>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src={close} alt="close" />
        ) : (
          <img src={menu} alt="menu" />
        )}
      </button>
      <div className="logo">
        <img src={logo} alt="markdown" />
      </div>
      <div className="divider"></div>
      <div className="activeDocument">
        <OpenDocument />
        <div className="handleDocument">
          <div className="delete" onClick={handleDelete}>
            <img src={trash} alt="delete" />
          </div>
          <button className="button save" onClick={handleSave}>
            <img src={save} alt="" />
            Save Changes
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
