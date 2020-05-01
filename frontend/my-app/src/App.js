import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import AnimeList from "./components/animeList";
import CreateAnimeList from "./components/createAnimeList";
import EditAnimeList from "./components/editAnimeList";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/anime" exact component={AnimeList} />
        <Route path="/anime/edit" component={EditAnimeList} />
        <Route path="/anime/create" component={CreateAnimeList} />
      </div>
    </Router>
  );
}

export default App;
