import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from '../App';

const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [rover, setRover] = useState('curiosity'); // default rover
  const [camera, setCamera] = useState('navcam');  // default camera
  const [sol, setSol] = useState(1000);            // default sol

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/mars-rover-photos?rover=${rover}&camera=${camera}&sol=${sol}`);
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching Mars Rover photos:', error);
      }
    };

    fetchPhotos();
  }, [rover, camera, sol]); // re-fetch when filters change

  return (
    <div>
      <h1>Mars Rover Photos</h1>
      <div>
        <select onChange={(e) => setRover(e.target.value)} value={rover}>
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
          <option value="spirit">Spirit</option>
        </select>
        
        <select onChange={(e) => setCamera(e.target.value)} value={camera}>
          <option value="navcam">NavCam</option>
          <option value="f Hazcam">F Hazcam</option>
          {/* Add other camera options as needed */}
        </select>
        
        <input 
          type="number" 
          onChange={(e) => setSol(e.target.value)} 
          value={sol} 
          placeholder="Sol" 
        />
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} style={{ margin: '10px' }}>
              {photo.rover.name === 'Curiosity' ? (
                <img 
                  src={photo.img_src} 
                  alt={`Mars Rover ${photo.id}`} 
                  style={{ width: '200px', height: 'auto' }} 
                />
              ) : (
                <a 
                  href={photo.img_src} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {`Image from ${photo.rover.name}`}
                </a>
              )}
            </div>
          ))
        ) : (
          <p>No photos available for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MarsRoverPhotos;
