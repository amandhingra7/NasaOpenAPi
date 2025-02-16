import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MarsRoverPhotos from './components/MarsRoverPhotos'; // Mars Rover Photos Component
import Apod from './components/Apod'; // APOD (Astronomy Picture of the Day) Component
import RoverManifest from './components/RoverManifest'; // Rover Manifest Component

import './App.css'; // Importing CSS file

const App = () => {
  return (
    <Router>
      <div className="app-container">
        
        {/* Navbar for Navigation */}
        <nav className="navbar">
          <h1>NASA Explorer</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mars-rover">Mars Rover Photos</Link></li>
            <li><Link to="/apod">APOD</Link></li>
            <li><Link to="/rover-manifest">Rover Manifest</Link></li>
          </ul>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={
            <div>
              <header className="app-header">
                <h1>Explore Mars & The Universe</h1>
                <p>Your gateway to Mars Rover photos and the Astronomy Picture of the Day (APOD)!</p>
              </header>

              <section className="content-section">
                <div className="mars-rover-section">
                  <h2>Mars Rover Photos</h2>
                  <MarsRoverPhotos />
                </div>

                <div className="apod-section">
                  <h2>Astronomy Picture of the Day</h2>
                  <Apod />
                </div>
              </section>
            </div>
          } />

          <Route path="/mars-rover" element={<MarsRoverPhotos />} />
          <Route path="/apod" element={<Apod />} />
          <Route path="/rover-manifest" element={<RoverManifest />} />
        </Routes>

        {/* Footer */}
        <footer className="app-footer">
          <p>Powered by NASA APIs</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
