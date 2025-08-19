import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  
  // Sample event data - replace with actual events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Dance Recital 2023',
      date: '2023-12-15',
      time: '6:00 PM',
      location: 'City Cultural Center',
      description: 'Join us for our annual dance recital featuring performances by all our students. A celebration of classical dance traditions and contemporary expressions.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c6de333e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      type: 'performance',
      featured: true
    },
    {
      id: 2,
      title: 'Bharatanatyam Workshop',
      date: '2023-11-28',
      time: '10:00 AM - 1:00 PM',
      location: 'Kala Sharadhi Studio',
      description: 'A special 3-hour intensive workshop focusing on advanced adavus and abhinaya in Bharatanatyam. Open to intermediate and advanced students.',
      image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d808?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      type: 'workshop',
      featured: false
    },
    {
      id: 3,
      title: 'Kathak Intensive',
      date: '2024-01-10',
      time: '4:00 PM - 6:00 PM',
      location: 'Kala Sharadhi Studio',
      description: 'Master the intricate footwork and spins of Kathak in this 6-week intensive program. Perfect for dancers looking to refine their technique.',
      image: 'https://images.unsplash.com/photo-1514525252781-2f9bcd159c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      type: 'workshop',
      featured: true
    },
    {
      id: 4,
      title: 'Rhythm & Expression',
      date: '2024-02-05',
      time: '11:00 AM - 2:00 PM',
      location: 'Dance Academy Hall',
      description: 'Explore the connection between rhythm and emotional expression in classical Indian dance. Open to all levels.',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      type: 'workshop',
      featured: false
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Navaratri Celebrations',
      date: '2023-10-20',
      location: 'Temple Grounds',
      description: 'Special performance celebrating the nine nights of Navaratri with traditional dances and music.',
      image: 'https://images.unsplash.com/photo-1603386324955-9a4b692d0309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      type: 'performance'
    },
    {
      id: 6,
      title: 'Summer Workshop Series',
      date: '2023-07-15',
      location: 'Kala Sharadhi Studio',
      description: 'A month-long workshop series covering various aspects of classical dance, from technique to theory.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c6de333e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      type: 'workshop'
    }
  ];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getEventTypeLabel = (type: string) => {
    return type === 'workshop' ? 'Workshop' : 'Performance';
  };

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-content">
          <h1>Events & Performances</h1>
          <p>Experience the beauty of classical dance through our events and workshops</p>
        </div>
      </section>

      {/* Events Container */}
      <section className="events-container">
        <div className="container">
          {/* Tabs */}
          <div className="events-tabs">
            <button 
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
              <span className="event-count">{upcomingEvents.length}</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
              <span className="event-count">{pastEvents.length}</span>
            </button>
          </div>

          {/* Events Grid */}
          <div className="events-grid">
            {activeTab === 'upcoming' ? (
              upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <div key={event.id} className={`event-card ${event.featured ? 'featured' : ''}`}>
                    {event.featured && <div className="featured-badge">Featured</div>}
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-type">{getEventTypeLabel(event.type)}</div>
                    </div>
                    <div className="event-details">
                      <div className="event-date">
                        <span className="day">{new Date(event.date).getDate()}</span>
                        <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                      </div>
                      <div className="event-info">
                        <h3>{event.title}</h3>
                        <div className="event-meta">
                          <span><i className="far fa-calendar-alt"></i> {formatDate(event.date)}</span>
                          <span><i className="far fa-clock"></i> {event.time}</span>
                          <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                        </div>
                        <p className="event-description">{event.description}</p>
                        <div className="event-actions">
                          <button className="btn btn-primary">Register Now</button>
                          <button className="btn btn-outline">Learn More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-events">
                  <i className="far fa-calendar-plus"></i>
                  <h3>No Upcoming Events</h3>
                  <p>Check back soon for our upcoming events and workshops!</p>
                </div>
              )
            ) : (
              pastEvents.length > 0 ? (
                pastEvents.map((event) => (
                  <div key={event.id} className="event-card past">
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                      <div className="event-type">{getEventTypeLabel(event.type)}</div>
                    </div>
                    <div className="event-details">
                      <div className="event-date past">
                        <span className="day">{new Date(event.date).getDate()}</span>
                        <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                      </div>
                      <div className="event-info">
                        <h3>{event.title}</h3>
                        <div className="event-meta">
                          <span><i className="far fa-calendar-alt"></i> {formatDate(event.date)}</span>
                          <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                        </div>
                        <p className="event-description">{event.description}</p>
                        <div className="event-actions">
                          <button className="btn btn-outline">View Gallery</button>
                          <button className="btn btn-outline">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-events">
                  <i className="far fa-calendar-check"></i>
                  <h3>No Past Events</h3>
                  <p>Our past events will appear here.</p>
                </div>
              )
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="newsletter-cta">
            <div className="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter to receive updates about upcoming events and workshops.</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
