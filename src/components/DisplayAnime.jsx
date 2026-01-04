import { useAnimeContext } from "../contexts/AnimeContext";

function Anime({ anime }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useAnimeContext();
  const favorite = isFavorite(anime.mal_id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(anime.mal_id);
    else addToFavorites(anime);
  }

  return (
    <div className="w-52 overflow-hidden rounded-2xl bg-zinc-900 shadow-lg ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={anime.images.jpg.image_url}
          alt={anime.title}
          className="h-72 w-full object-cover"
          loading="lazy"
        />

        <button
          type="button"
          className={`absolute right-2 top-2 rounded-full bg-black/50 px-3 py-2 text-lg backdrop-blur transition hover:bg-black/70 active:scale-95
    ${favorite ? "text-red-400" : "text-white"}`}
          aria-label="Add to favorites"
          onClick={onFavoriteClick}
        >
          ❤︎
        </button>
      </div>

      <div className="space-y-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-white">
          {anime.title}
        </h3>

        <div className="flex items-center gap-2 text-xs text-zinc-300">
          <span className="rounded bg-zinc-800 px-2 py-0.5">
            {anime.episodes} eps
          </span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-400">{anime.year}</span>
        </div>
      </div>
    </div>
  );
}

export default Anime;
