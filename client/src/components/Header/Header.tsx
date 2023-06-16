import trash from "../../assets/icon-delete.svg";
import document from "../../assets/icon-document.svg";
import menu from "../../assets/icon-menu.svg";
import save from "../../assets/icon-save.svg";
import logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <button className="menu-toggle">
        <img src={menu} alt="menu" />
      </button>
      <div className="logo">
        <img src={logo} alt="markdown" />
      </div>
      <div className="divider"></div>
      <div className="document">
        <img src={document} alt="" />
        <div>
          <p className="document__legend">Document Name</p>
          <p className="document__name">welcome.md</p>
        </div>
      </div>
      <div className="handleDocument">
        <img src={trash} alt="delete" />
        <button className="save">
          <img src={save} alt="" />
          Save Changes
        </button>
      </div>
    </header>
  );
};

export default Header;
