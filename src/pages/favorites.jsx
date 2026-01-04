import { useAnimeContext } from "../contexts/AnimeContext";
import Anime from "../components/DisplayAnime";

function Favorite() {
  const { favorites } = useAnimeContext();

  if (favorites) {
    return (
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Your favorites!
        </h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] place-items-center">
          {favorites.map((anime) => (
            <Anime key={anime.mal_id} anime={anime} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>No favorite animes yet</h2>
      <p>Start adding movies to your favorites and they will appear here</p>
    </div>
  );
}

export default Favorite;
