import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PhotoGallery } from "./components/PhotoGallery";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main>
        <PhotoGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
