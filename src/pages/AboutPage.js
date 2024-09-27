// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About USWDS Test</h1>
      <p>
        This application is for testing United States Web Design System (USWDS)
        with React.
      </p>
      <p>
        Go back <Link to="/">Home</Link>.
      </p>
    </div>
  );
};

export default AboutPage;
