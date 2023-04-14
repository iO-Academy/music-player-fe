import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid h-100 text-light">
              <div className="row h-100">
                  <Nav />
                  <main className="dark-blue col-11 h-100">
                      <Routes>
                          <Route path="/" element={<Home />} />
                      </Routes>
                  </main>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
