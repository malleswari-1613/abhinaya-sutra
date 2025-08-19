import React from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  // Sample gallery items - replace with your actual images
  const galleryItems = [
    {
      id: 1,
      title: 'Group Performance',
      image: 'https://ih1.redbubble.net/image.4777969594.4311/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    },
    {
      id: 2,
      title: 'Solo Performance',
      image: 'https://img.freepik.com/free-vector/indian-woman-dancing_1196-451.jpg',
    },
    {
      id: 3,
      title: 'Dance Workshop',
      image: 'https://thumbs.dreamstime.com/b/captivating-digital-artwork-showcases-bharatanatyam-dancer-dynamic-pose-rendered-intricate-stippling-technique-379817324.jpg',
    },
    {
      id: 4,
      title: 'Cultural Event',
      image: 'https://i.pinimg.com/736x/fa/79/2e/fa792e7837849c4b91038e69078f6644.jpg',
    },
    {
      id: 5,
      title: 'Solo Performance',
      image: 'https://i.pinimg.com/736x/a5/93/1a/a5931aea328810b69ab6611734e0fd69.jpg',
    },
    {
      id: 6,
      title: 'Solo Performance',
      image: 'https://static.vecteezy.com/system/resources/previews/023/864/282/non_2x/woman-dancer-performing-bharatnatyam-on-white-background-free-vector.jpg',
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
          {/* <div className="gallery-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Bharatanatyam</button>
            <button className="filter-btn">Kathak</button>
            <button className="filter-btn">Workshops</button>
            <button className="filter-btn">Events</button>
          </div> */}
          
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <div className="overlay-content">
                      <h3>{item.title}</h3>
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
