import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Kala Sharadhi</h1>
          <p>Experience the divine art of classical dance</p>
          <div className="hero-btns">
            <Link to="/classes" className="btn btn-primary">
              Explore Classes
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <i className="fas fa-gem"></i>
          <h3>Traditional Techniques</h3>
          <p>Learn authentic classical dance forms from expert instructors</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-users"></i>
          <h3>Community</h3>
          <p>Join a vibrant community of dance enthusiasts</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-calendar-alt"></i>
          <h3>Regular Events</h3>
          <p>Participate in performances and cultural events</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your Dance Journey?</h2>
        <Link to="/contact" className="btn btn-primary">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
};

export default Home;