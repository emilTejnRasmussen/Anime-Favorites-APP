import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo / App name */}
        <Link
          to="/"
          className="text-lg font-bold tracking-wide text-white hover:text-indigo-400 transition"
        >
          Anime App
        </Link>

        {/* Navigation links */}
        <div className="flex gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-white"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-white"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
