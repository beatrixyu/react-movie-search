import React from "react";
import "./App.css";
import MovieSearch from "./movieSearch";
import TVshowsSearch from "./tvShowSearch";
import Header from "./header";
import "./index.css";

function App() {
  return (
    <div>
      <div id="backGround">
        <h1>POP TV</h1>
      </div>
      {/* <Header></Header> */}
      <MovieSearch />
      <TVshowsSearch />
    </div>
  );
}

export default App;
