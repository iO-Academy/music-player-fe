import React, {useState, useEffect} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";
import Nav from "./components/Nav";
import NowPlaying from "./components/NowPlaying";
import NothingPlaying from "./components/NothingPlaying";
import Error from "./components/Error";
import Search from "./components/Search";
function App() {

    const [playingSong, setPlayingSong] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [errorMsg, setError] = useState(false)

    const playSong = (name, artist, artwork) => {
        setPlayingSong({name: name, artist: artist, artwork: artwork})
    }

  return (
      <BrowserRouter>
          <div className="container-fluid h-100 text-light">
              <div className="row h-100">
                  <Nav showSearch={setShowSearch} />
                  <main className="dark-blue col-11 h-100">
                      <Routes>
                          <Route path="/" element={<Home playSong={playSong} setError={setError} />} />
                          <Route path="/artists" element={<Artists setError={setError} />} />
                          <Route path="/artists/:artistName" element={<Artist playSong={playSong} setError={setError} />} />
                      </Routes>

                      {showSearch && <Search showSearch={setShowSearch} playSong={playSong} setError={setError} />}

                      <Error msg={errorMsg} />

                      {playingSong ?
                          <NowPlaying setError={setError} playingSong={playingSong} /> :
                          <NothingPlaying />
                      }
                  </main>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
