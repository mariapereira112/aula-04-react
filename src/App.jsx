import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Lista from "./pages/Lista";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/lista" element={<Lista />} />

        <Route
          path="*"
          element={
            <main className="main">
              <h2>404 - Página não encontrada</h2>
              <p>A página que você tentou acessar não existe.</p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;