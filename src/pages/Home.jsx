import { useState, useEffect } from "react";
import { searchForAnime, getPopularAnimes } from "../services/api";
import Anime from "../components/DisplayAnime";

function Home() {
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    loadPopularAnimes();
  }, []);

  const loadPopularAnimes = async () => {
      try {
        const popularAnimes = await getPopularAnimes();
        console.log(popularAnimes);
        setAnimes(popularAnimes);
      } catch (err) {
        console.log(err);
        setError("Failed to load animes...");
      } finally {
        setLoading(false);
      }
    };

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!search.trim()) {
      loadPopularAnimes();
      return
    }
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await searchForAnime(search)
      setAnimes(searchResults)
      setError(null)
    } catch (error) {
      console.log(error)
      setError("Failed to search movies..")
    } finally {
      setLoading(false)
    }

  };

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-6">
      <header className="space-y-1 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Browse Animes
        </h2>
        <p className="text-sm text-zinc-400">
          Search and add your favorites ❤️
        </p>
      </header>

      <form
        onSubmit={handleSearch}
        className="mx-auto flex w-full max-w-xl items-center gap-3"
      >
        <input
          type="text"
          placeholder="Enter search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-white placeholder:text-zinc-500 shadow-sm outline-none transition focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/30"
        />

        <button
          type="submit"
          className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400 active:scale-95"
        >
          Search
        </button>
      </form>

      {error && <div className="text-red-400 text-2xl">{error}</div>}

      {loading ? (
        <div className="flex justify-center text-2xl">Loading... </div>
      ) : (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] place-items-center">
          {animes.map((anime) => (
            <Anime
              key={anime.mal_id}
              anime={anime}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
