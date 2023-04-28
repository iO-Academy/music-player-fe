import React, {useState} from "react";
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
function App() {

    const [playingSong, setPlayingSong] = useState(false);
    const [errorMsg, setError] = useState(false)

    const playSong = (name, artist, artwork) => {
        setPlayingSong({name: name, artist: artist, artwork: artwork})
    }

  return (
      <BrowserRouter>
          <div className="container-fluid h-100 text-light">
              <div className="row h-100">
                  <Nav />
                  <main className="dark-blue col-11 h-100">
                      <Routes>
                          <Route path="/" element={<Home playSong={playSong} />} />
                          <Route path="/artists" element={<Artists />} />
                          <Route path="/artists/:artistName" element={<Artist playSong={playSong} />} />
                      </Routes>

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
