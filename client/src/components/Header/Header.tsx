// import { useState } from "react";
import close from "../../assets/icon-close.svg";
import trash from "../../assets/icon-delete.svg";
// import document from "../../assets/icon-document.svg";
import menu from "../../assets/icon-menu.svg";
import save from "../../assets/icon-save.svg";
import logo from "../../assets/logo.svg";
import useMenuStore from "../../lib/store";
import "./Header.css";
import Document from "../Document/Document";

const Header = () => {
  const isMenuOpen = useMenuStore((state) => state.isOpen)
  const toggleMenu = useMenuStore((state) => state.toggleIsOpen)
  // const [documentName, setDocumentName] = useState("welcome.md")

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
{/*         <div className="document">
          <img src={document} alt="" />
          <div>
            <p className="document__legend">Document Name</p>
            <input
              type="text"
              className="document__name"
              value={documentName}
              spellCheck="false"
              onChange={(e) => setDocumentName(e.target.value)}
            />
          </div>
        </div> */}
        <Document />
        <div className="handleDocument">
          <img src={trash} alt="delete" />
          <button className="button save">
            <img src={save} alt="" />
            Save Changes
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
