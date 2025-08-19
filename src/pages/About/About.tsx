import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Our Story</h1>
          <p>Preserving the ancient art of classical dance</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Welcome to Abhinaya Sutra</h2>
              <p>
                Founded in 2010, Abhinaya Sutra has been dedicated to preserving and promoting the rich heritage of classical dance forms. 
                Our mission is to nurture talent and spread awareness about the beauty and depth of Indian classical dance.
              </p>
              <p>
                Under the guidance of our esteemed gurus, we provide comprehensive training in various classical dance forms, 
                helping students connect with the spiritual and artistic dimensions of this ancient art form.
              </p>
              <Link to="/classes" className="btn btn-primary">
                Explore Our Classes
              </Link>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
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
              <p>To preserve and promote classical dance forms through quality education, performances, and cultural exchange.</p>
            </div>
            <div className="mission-card">
              <i className="fas fa-eye"></i>
              <h3>Our Vision</h3>
              <p>To create a global community of classical dance enthusiasts who appreciate and contribute to this timeless art form.</p>
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
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Dance Guru"
              />
            </div>
            <div className="guru-details">
              <h3>Guru [Name]</h3>
              <p className="title">Founder & Principal Instructor</p>
              <p>
                With over 25 years of experience in classical dance, Guru [Name] has dedicated their life to the art form. 
                Trained under renowned masters, they bring a wealth of knowledge and passion to every class.
              </p>
              <div className="guru-qualifications">
                <div className="qualification">
                  <i className="fas fa-award"></i>
                  <span>Sangeet Natak Akademi Awardee</span>
                </div>
                <div className="qualification">
                  <i className="fas fa-graduation-cap"></i>
                  <span>Master's in Dance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;