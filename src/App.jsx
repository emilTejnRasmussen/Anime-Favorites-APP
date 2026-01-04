import Favorite from "./pages/favorites";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import AnimeProvider from "./contexts/AnimeContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AnimeProvider>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <NavBar />

        <main className="mx-auto max-w-7xl px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </div>
    </AnimeProvider>
  );
}

export default App;
