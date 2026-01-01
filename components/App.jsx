import React from "react";
import Swipe from "./Swipe";
import Search from "./Search";
import Watchlist from "./Watchlist";

export default function App() {
  const [view, setView] = React.useState("swipe");
  const [restricted, setRestricted] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch() {
    console.log("Search movie with api");
  }

  return (
    <main className="container">
      <div className={`menus-box ${restricted ? "restricted" : ""}`}>
        <ul>
          <li
            onClick={() => {
              setView("swipe");
            }}
          >
            <i className="fa-solid fa-film selected"></i>
          </li>
          <div className="search-container">
            <li
              onClick={() => {
                setView("search");
                setRestricted(false);
                setShowSearch(true);
              }}
            >
              <i className="fa-solid fa-magnifying-glass "></i>
            </li>
            {showSearch && (
              <input
                id="search-el"
                type="search"
                placeholder="Search for a movie"
                value={searchValue}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            )}
          </div>
          <li
            onClick={() => {
              setView("watchlist");
              setRestricted(true);
              setShowSearch(false);
            }}
          >
            <i className="fa-solid fa-heart-circle-check"></i>
          </li>
        </ul>
      </div>

      {(view === "swipe" && <Swipe />) ||
        (view === "search" && <Search value={searchValue} />) ||
        (view === "watchlist" && <Watchlist />)}
    </main>
  );
}
