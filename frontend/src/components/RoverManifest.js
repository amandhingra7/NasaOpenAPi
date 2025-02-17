import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from '../App';

const RoverManifest = () => {
  const [rover, setRover] = useState('Curiosity'); // Default rover
  const [manifest, setManifest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch rover manifest whenever rover selection changes
  useEffect(() => {
    const fetchManifest = async () => {
      setLoading(true);
      setError(null);
      try {
        const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
        const response = await axios.get(`${API_BASE_URL}/rover-manifest?rover=${rover}`);
        setManifest(response.data.photo_manifest);
      } catch (err) {
        setError('Failed to fetch rover manifest');
      } finally {
        setLoading(false);
      }
    };

    fetchManifest();
  }, [rover]);

  return (
    <div className="app-container">
      <h2>Mars Rover Mission Manifest</h2>

      {/* Rover Selection Dropdown */}
      <select value={rover} onChange={(e) => setRover(e.target.value)}>
        <option value="Curiosity">Curiosity</option>
        <option value="Opportunity">Opportunity</option>
        <option value="Spirit">Spirit</option>
      </select>

      {loading && <p>Loading manifest data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {manifest && (
        <div className="content-section">
          <p><strong>Rover Name:</strong> {manifest.name}</p>
          <p><strong>Launch Date:</strong> {manifest.launch_date}</p>
          <p><strong>Landing Date:</strong> {manifest.landing_date}</p>
          <p><strong>Status:</strong> {manifest.status}</p>
          <p><strong>Total Photos:</strong> {manifest.total_photos}</p>
          <p><strong>Latest Photos Taken On:</strong> {manifest.max_date}</p>
        </div>
      )}
    </div>
  );
};

export default RoverManifest;
