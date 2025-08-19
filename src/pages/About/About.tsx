import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Our Story</h1>
          <p>Preserving the ancient art of Panandallur Thanjavur Bharatanatyam</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Welcome to Abhinaya Sutra</h2>
              <p>
                Founded in 2010, Abhinaya Sutra has been dedicated to preserving and promoting the rich heritage of Bharatanatyam. 
                Our mission is to nurture talent and spread awareness about the beauty and depth of Bharatanatyam.
              </p>
              <p>
                Under the guidance of our esteemed gurus, we provide comprehensive training in Pandanallur and Thanjavur banis of Bharatanatyam, 
                helping students connect with the spiritual and artistic dimensions of this ancient art form.
              </p>
              <Link to="/classes" className="btn btn-primary">
                Explore Our Classes
              </Link>
            </div>
            <div className="about-image">
              <img 
                src="https://i.ytimg.com/vi/eLEmj-nrsV0/maxresdefault.jpg" 
                alt="Classical Dance Performance"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <i className="fas fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>To preserve and promote the rich heritage of Bharatanatyam through quality education, performances, and cultural exchange.</p>
            </div>
            <div className="mission-card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>To create a global community of Bharatanatyam enthusiasts who appreciate and contribute to this timeless art form.</p>
            </div>
            <div className="mission-card">
              <i className="fas fa-hands-helping"></i>
              <h3>Our Values</h3>
              <p>Dedication, Tradition, Excellence, and Respect for the art form and its rich cultural heritage.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="guru-section">
        <div className="container">
          <h2>Meet Our Guru</h2>
          <div className="guru-profile">
            <div className="guru-image">
              <img 
                src="https://th-i.thgim.com/public/incoming/qebdpn/article68660700.ece/alternates/FREE_1200/MEENAKSHISUNDARAM%20PILLAI%201.jpg" 
                alt="Dance Guru"
              />
            </div>
            <div className="guru-details">
              <h3>Meenakshisundaram Pillai</h3>
              <p className="title">Founder & Principal Instructor</p>
              <p>
                  Meenakshisundaram Pillai is a classical dance guru considered as the prominent founder of Pandanallur style of Bharatanatyam, Indian dance. He lived in the village of Pandanallur, in the Thanjavur district in the south Indian state of Tamil Nadu
              </p>
              {/* <div className="guru-qualifications">
                <div className="qualification">
                  <i className="fas fa-award"></i>
                  <span>Sangeet Natak Akademi Awardee</span>
                </div>
                <div className="qualification">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Master's in Dance</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;