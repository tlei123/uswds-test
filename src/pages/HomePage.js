// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

import githubImage from '../assets/images/github.svg';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to USWDS Test!</h1>
      <p>
        Example image (github.svg):
        <br />
        <img src={githubImage} alt="GitHub" />
      </p>
      <p>
        Go to <Link to="/about">About page</Link>.
      </p>
    </div>
  );
};

export default HomePage;
