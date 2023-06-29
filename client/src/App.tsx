import { Toaster } from "react-hot-toast";
import "./App.css";
import ConfirmDelete from "./components/ConfirmDelete/ConfirmDelete";
import Header from "./components/Header/Header";
import Markdown from "./components/Markdown/Markdown";
import Preview from "./components/Preview/Preview";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAppStore } from "./lib/store";

function App() {
  const isMenuOpen = useAppStore((state) => state.isOpen);
  const isPreviewFullscreen = useAppStore((state) => state.isFullscreen);
  const isModalOpen = useAppStore((state) => state.isModalOpen);

  return (
    <>
      <Sidebar />
      <section className={`container ${isMenuOpen ? "menuOpen" : ""}`}>
        <Toaster position="top-center" />
        <Header />
        <main className={`${isPreviewFullscreen ? "fullscreenPreview" : ""}`}>
          <Markdown />
          <div className="divider"></div>
          <Preview />
        </main>
      </section>
      {isModalOpen ? <ConfirmDelete /> : ""}
    </>
  );
}

export default App;
