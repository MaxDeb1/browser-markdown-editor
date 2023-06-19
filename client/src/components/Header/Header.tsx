import close from "../../assets/icon-close.svg";
import trash from "../../assets/icon-delete.svg";
import menu from "../../assets/icon-menu.svg";
import save from "../../assets/icon-save.svg";
import logo from "../../assets/logo.svg";
import useMenuStore from "../../lib/store";
import "./Header.css";
import Document from "../Document/Document";

const Header = () => {
  const isMenuOpen = useMenuStore((state) => state.isOpen)
  const toggleMenu = useMenuStore((state) => state.toggleIsOpen)

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
        <Document all={false} />
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
