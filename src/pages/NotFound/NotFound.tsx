import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-text">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
          <p>Here are some helpful links instead:</p>
          <div className="not-found-links">
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="not-found-image">
          <img 
            src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Dancer in silhouette"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
