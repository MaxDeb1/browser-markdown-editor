import "./App.css";
import Header from "./components/Header/Header";
import Markdown from "./components/Markdown/Markdown";
import Preview from "./components/Preview/Preview";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAppStore } from "./lib/store";

function App() {
  const isMenuOpen = useAppStore((state) => state.isOpen);
  const isPreviewFullscreen = useAppStore((state) => state.isFullscreen);

  return (
    <>
      <Sidebar />
      <section className={`container ${isMenuOpen ? "menuOpen" : ""}`}>
        <Header />
        <main className={`${isPreviewFullscreen ? "fullscreenPreview" : ""}`}>
          <Markdown />
          <div className="divider"></div>
          <Preview />
        </main>
      </section>
    </>
  );
}

export default App;
