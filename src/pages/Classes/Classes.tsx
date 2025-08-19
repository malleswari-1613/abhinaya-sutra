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
      ageGroup: '4+ years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 4 PM to 9 PM',
      instructor: 'Suhasini BV',
      image: 'https://img.freepik.com/premium-vector/beautiful-cute-little-girl-dancing-indian-classical-dance_999766-3226.jpg'
    },
    {
      id: 2,
      title: 'Intermediate Bharatanatyam',
      description: 'Advance your skills with complex footwork, spins, and abhinaya (expressions).',
      level: 'Intermediate',
      ageGroup: '12+ years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 4 PM to 9 PM',
      instructor: 'Suhasini BV',
      image: 'https://www.natyasutraonline.com/uploads/category/share_img/bharathanatyam1.jpg'
    },
    {
      id: 3,
      title: 'Advanced Bharatanatyam',
      description: 'Master complex jathis, varnams, and thillanas in this advanced level class.',
      level: 'Advanced',
      ageGroup: '16+ years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 4 PM to 9 PM',
      instructor: 'Suhasini BV',
      image: 'https://t3.ftcdn.net/jpg/04/53/28/00/360_F_453280016_WXzo1YtlLTkhzjHMM2veJp7IBKIRNdlV.jpg'
    },
    {
      id: 4,
      title: 'Kids Dance Workshop',
      description: 'Fun introduction to classical dance for young children with basic movements and rhythm exercises.',
      level: 'Beginner',
      ageGroup: '4-6 years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 4 PM to 9 PM',
      instructor: 'Suhasini BV',
      image: 'https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/05/international-dance-day-activities.jpg'
    },
    {
      id: 5,
      title: 'Therapeutic Dance',
      description: 'Gentle dance movements combined with yoga for health and wellness.',
      level: 'All-levels',
      ageGroup: '4+ years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 4 PM to 9 PM',
      instructor: 'Suhasini BV',
      image: 'https://thumbs.dreamstime.com/b/as-dance-therapy-session-comes-to-end-participants-sit-circle-reflecting-emotions-memories-surfaced-319215748.jpg'
    },
    {
      id: 6,
      title: 'Natyashastra & Theory',
      description: 'In-depth study of dance theory, history, and the Natyashastra text.',
      level: 'intermediateadvanced',
      ageGroup: '10+ years',
      duration: '1 hour',
      schedule: 'Tue, Thu - 4 PM to 9 PM',
      instructor: 'Suhasini BV',
      image: 'https://caleidoscope.in/wp-content/uploads/2023/02/Bharat-Muni-Natyashastra-02.jpg'
    }
  ];

  return (
    <div className="classes-page">
      {/* Hero Section */}
      <section className="classes-hero">
        <div className="hero-content">
          <h1>Our Classes</h1>
          <p>Discover the art of Panandallur Thanjavur Bharatanatyam with our expert instructor</p>
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
                <option value="bharatanatyam">Panandallur Thanjavur Bharatanatyam</option>
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
                <p>"The instructor at Abhinaya Sutra is incredibly knowledgeable and patient. My daughter has grown so much as a dancer here!"</p>
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
                <p>"As an adult beginner, I was nervous to start learning Bharatanatyam, but the welcoming environment made all the difference."</p>
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
