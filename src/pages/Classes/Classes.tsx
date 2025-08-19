import React from 'react';
import { Link } from 'react-router-dom';
import './Classes.css';

const Classes: React.FC = () => {
  // Sample class data - replace with actual class information
  const danceClasses = [
    {
      id: 1,
      title: 'Bharatanatyam for Beginners',
      description: 'Learn the fundamentals of Bharatanatyam, including basic adavus, hand gestures, and expressions.',
      level: 'Beginner',
      ageGroup: '6+ years',
      duration: '1 hour',
      schedule: 'Mon, Wed, Fri - 4 PM to 5 PM',
      instructor: 'Guru Priya Sharma',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Intermediate Kathak',
      description: 'Advance your Kathak skills with complex footwork, spins, and abhinaya (expressions).',
      level: 'Intermediate',
      ageGroup: '12+ years',
      duration: '1.5 hours',
      schedule: 'Tue, Thu - 5 PM to 6:30 PM',
      instructor: 'Guru Rajesh Mehta',
      image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d808?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Advanced Bharatanatyam',
      description: 'Master complex jathis, varnams, and thillanas in this advanced level class.',
      level: 'Advanced',
      ageGroup: '16+ years',
      duration: '2 hours',
      schedule: 'Mon, Wed, Fri - 6 PM to 8 PM',
      instructor: 'Guru Meenakshi Iyer',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c6de333e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Kids Dance Workshop',
      description: 'Fun introduction to classical dance for young children with basic movements and rhythm exercises.',
      level: 'Beginner',
      ageGroup: '4-6 years',
      duration: '45 minutes',
      schedule: 'Sat, Sun - 10 AM to 10:45 AM',
      instructor: 'Guru Ananya Kapoor',
      image: 'https://images.unsplash.com/photo-1533856493583-30c19163a352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Therapeutic Dance',
      description: 'Gentle dance movements combined with yoga for health and wellness.',
      level: 'All Levels',
      ageGroup: '18+ years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 7 AM to 8 AM',
      instructor: 'Guru Neha Verma',
      image: 'https://images.unsplash.com/photo-1514525252781-2f9bcd159c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Natyashastra & Theory',
      description: 'In-depth study of dance theory, history, and the Natyashastra text.',
      level: 'Intermediate/Advanced',
      ageGroup: '16+ years',
      duration: '1.5 hours',
      schedule: 'Sat - 11 AM to 12:30 PM',
      instructor: 'Dr. Arvind Joshi',
      image: 'https://images.unsplash.com/photo-1514525252781-2f9bcd159c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="classes-page">
      {/* Hero Section */}
      <section className="classes-hero">
        <div className="hero-content">
          <h1>Our Classes</h1>
          <p>Discover the art of classical dance with our expert instructors</p>
        </div>
      </section>

      {/* Class Listings */}
      <section className="classes-container">
        <div className="container">
          <div className="section-intro">
            <h2>Find Your Perfect Class</h2>
            <p>We offer a variety of classes for all ages and skill levels. Whether you're a beginner or an experienced dancer, we have something for everyone.</p>
          </div>
          
          <div className="class-filters">
            <div className="filter-group">
              <label htmlFor="level-filter">Level:</label>
              <select id="level-filter" className="filter-select">
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="age-filter">Age Group:</label>
              <select id="age-filter" className="filter-select">
                <option value="all">All Ages</option>
                <option value="kids">Kids (4-12)</option>
                <option value="teens">Teens (13-19)</option>
                <option value="adults">Adults (20+)</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="style-filter">Dance Style:</label>
              <select id="style-filter" className="filter-select">
                <option value="all">All Styles</option>
                <option value="bharatanatyam">Bharatanatyam</option>
                <option value="kathak">Kathak</option>
                <option value="theory">Theory</option>
              </select>
            </div>
            
            <button className="filter-btn">Apply Filters</button>
          </div>
          
          <div className="class-grid">
            {danceClasses.map((danceClass) => (
              <div key={danceClass.id} className="class-card">
                <div className="class-image">
                  <img src={danceClass.image} alt={danceClass.title} />
                  <span className={`level-badge ${danceClass.level.toLowerCase()}`}>
                    {danceClass.level}
                  </span>
                </div>
                <div className="class-details">
                  <h3>{danceClass.title}</h3>
                  <p className="class-description">{danceClass.description}</p>
                  
                  <div className="class-info">
                    <div className="info-item">
                      <i className="fas fa-user-graduate"></i>
                      <span>{danceClass.instructor}</span>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-users"></i>
                      <span>{danceClass.ageGroup}</span>
                    </div>
                    <div className="info-item">
                      <i className="far fa-clock"></i>
                      <span>{danceClass.duration}</span>
                    </div>
                    <div className="info-item">
                      <i className="far fa-calendar-alt"></i>
                      <span>{danceClass.schedule}</span>
                    </div>
                  </div>
                  
                  <div className="class-actions">
                    <button className="enroll-btn">Enroll Now</button>
                    <button className="learn-more">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="class-cta">
            <h2>Not Sure Which Class is Right For You?</h2>
            <p>Schedule a free trial class or consultation with one of our instructors.</p>
            <button className="cta-button">Book a Free Trial</button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The instructors at Abhinaya Sutra are incredibly knowledgeable and patient. My daughter has grown so much as a dancer here!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Parent of Student</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As an adult beginner, I was nervous to start learning classical dance, but the welcoming environment made all the difference."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="author-info">
                  <h4>Rahul Sharma</h4>
                  <p>Adult Student</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The attention to technique and detail is exceptional. I've seen tremendous improvement in my daughter's dance and confidence."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="author-info">
                  <h4>Ananya Desai</h4>
                  <p>Parent of Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classes;
