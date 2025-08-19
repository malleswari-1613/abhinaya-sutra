import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Abhinaya Sutra</h1>
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
          <p>Learn authentic classical dance forms under the guidance of an expert instructor</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-user"></i>
          <h3>Personalized Instruction</h3>
          <p>Benefit from one-on-one attention in a focused, nurturing environment</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-calendar-alt"></i>
          <h3>Regular Events</h3>
          <p>Participate in performances and cultural events to showcase your progress</p>
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