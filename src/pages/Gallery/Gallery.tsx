import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery: React.FC = () => {
  // Sample gallery items - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Classical Performance',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Bharatanatyam'
    },
    {
      id: 2,
      title: 'Traditional Dance',
      image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d808?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Kathak'
    },
    {
      id: 3,
      title: 'Dance Workshop',
      image: 'https://images.unsplash.com/photo-1533856493583-30c19163a352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Workshop'
    },
    {
      id: 4,
      title: 'Group Performance',
      image: 'https://images.unsplash.com/photo-1514525252781-2f9bcd159c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Group'
    },
    {
      id: 5,
      title: 'Solo Performance',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c6de333e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Solo'
    },
    {
      id: 6,
      title: 'Cultural Event',
      image: 'https://images.unsplash.com/photo-1514525252781-2f9bcd159c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Event'
    },
  ];

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="hero-content">
          <h1>Our Gallery</h1>
          <p>Capturing the beauty of classical dance</p>
        </div>
      </section>

      <section className="gallery-container">
        <div className="container">
          <div className="gallery-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Bharatanatyam</button>
            <button className="filter-btn">Kathak</button>
            <button className="filter-btn">Workshops</button>
            <button className="filter-btn">Events</button>
          </div>
          
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{item.title}</h3>
                      <p>{item.category}</p>
                      <button className="view-btn">View</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="gallery-cta">
            <h2>Want to See More?</h2>
            <p>Follow us on social media for the latest updates and performances</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
