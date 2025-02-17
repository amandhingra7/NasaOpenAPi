import React, { useEffect, useState } from 'react';
import axios from 'axios';
import App from '../App';



const Apod = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
        console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);
        const response = await axios.get(`${API_BASE_URL}/apod`); // 
        

        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };
    fetchApod();
  }, []);

  if (!apodData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{apodData.title}</h1>
      
      {/* Check if the media type is video or image */}
      {apodData.media_type === 'video' ? (
        <div>
          <p>Watch the video:</p>
          <iframe
            src={apodData.url}
            title={apodData.title}
            frameBorder="0"
            allowFullScreen
            style={{ width: '100%', height: '500px' }}
          />
        </div>
      ) : (
        apodData.url && apodData.url.match(/\.(jpeg|jpg|gif|png)$/) && (
          <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
        )
      )}

      <p>{apodData.explanation}</p>
    </div>
  );
};

export default Apod;
