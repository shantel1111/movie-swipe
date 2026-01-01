import React from "react";
import Swipe from "./Swipe";
import Search from "./Search";
import Watchlist from "./Watchlist";

export default function App() {
  const [view, setView] = React.useState("swipe");
  return (
    <main class="container">
      <div class="menus-box">
        <ul>
          <li
            onClick={() => {
              setView("swipe");
            }}
          >
            <i class="fa-solid fa-film selected"></i>
          </li>
          {/* <div class="search-container"> */}
          <li
            onClick={() => {
              setView("search");
            }}
          >
            <i class="fa-solid fa-magnifying-glass "></i>
          </li>
          {/* <input
              id="search-el"
              type="search"
              placeholder="Search for a movie"
            /> */}
          {/* </div> */}
          <li
            onClick={() => {
              setView("watchlist");
            }}
          >
            <i class="fa-solid fa-heart-circle-check"></i>
          </li>
        </ul>
      </div>

      {(view === "swipe" && <Swipe />) ||
        (view === "search" && <Search />) ||
        (view === "watchlist" && <Watchlist />)}
    </main>
  );
}
