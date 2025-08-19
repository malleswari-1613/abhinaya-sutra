import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{success: boolean; message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to us for any questions or inquiries.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-intro">Have questions about our classes or events? Fill out the form below and we'll get back to you as soon as possible.</p>
              
              {submitStatus && (
                <div className={`form-message ${submitStatus.success ? 'success' : 'error'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="class-inquiry">Class Inquiry</option>
                    <option value="private-lessons">Private Lessons</option>
                    <option value="event-booking">Event Booking</option>
                    <option value="general-question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <p>Feel free to reach out to us through any of these channels. We're here to help!</p>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="info-text">
                    <h4>Our Studio</h4>
                    <p><br />HSR Layout, Bangalore<br />India</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone />
                  </div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <p><a href="tel:+917013316050">+91 7013316050</a></p>
                    <p className="small-text">Mon-Sun, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <p><a href="mailto:smalleswari759@gmail.com">smalleswari759@gmail.com</a></p>
                    <p className="small-text">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaClock />
                  </div>
                  <div className="info-text">
                    <h4>Studio Hours</h4>
                    <p>Tuesday - Thursday: 4:00 PM - 9:00 PM</p>
                  </div>
                </div>
                
                {/* <div className="social-links">
                  <h4>Follow Us</h4>
                  <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <FaYoutube />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                  </div>
                </div> */}
              </div>
              
              <div className="map-container">
                <iframe 
                  title="Abhinaya Sutra Location"
                  src="https://www.google.com/maps?q=12.9087272,77.6510138&z=17&hl=en&output=embed" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What dance styles do you teach?</h3>
              <p>We specialize in various classical Indian dance forms including Bharatanatyam, Kathak, Kuchipudi, and Odissi. We also offer contemporary and fusion dance classes.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need prior dance experience?</h3>
              <p>No prior experience is necessary! We offer classes for all levels, from complete beginners to advanced dancers. Our instructors will help you progress at your own pace.</p>
            </div>
            <div className="faq-item">
              <h3>What should I wear to my first class?</h3>
              <p>For your first class, wear comfortable clothing that allows you to move freely. Once enrolled, we'll provide guidance on appropriate dance attire for your chosen style.</p>
            </div>
            <div className="faq-item">
              <h3>How do I book private lessons?</h3>
              <p>You can book private lessons by contacting us through the form, calling our studio, or speaking with our staff after class. We'll match you with an instructor based on your goals and schedule.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
