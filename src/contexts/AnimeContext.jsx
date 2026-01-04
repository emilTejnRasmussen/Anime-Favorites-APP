import { createContext, useState, useContext, useEffect } from "react";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (anime) => {
    setFavorites((prev) =>
      prev.some((a) => a.mal_id === anime.mal_id) ? prev : [...prev, anime]
    );
  };

  const removeFromFavorites = (animeId) => {
    setFavorites((prev) => prev.filter((a) => a.mal_id !== animeId));
  };

  const isFavorite = (animeId) => favorites.some((a) => a.mal_id === animeId);

  return (
    <AnimeContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeProvider;
