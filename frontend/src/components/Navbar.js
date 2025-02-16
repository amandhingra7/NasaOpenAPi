import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/">APOD</Link>
        </li>
        <li>
          <Link to="/mars-rover-photos">Mars Rover Photos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;