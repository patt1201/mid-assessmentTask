import { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      category: 'campus',
      title: 'Main Campus Building',
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      description: 'The iconic main building of PNC'
    },
    {
      id: 2,
      category: 'campus',
      title: 'University Library',
      url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      description: 'State-of-the-art library facilities'
    },
    {
      id: 3,
      category: 'campus',
      title: 'Campus Grounds',
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
      description: 'Beautiful landscaped campus grounds'
    },
    {
      id: 4,
      category: 'campus',
      title: 'Science Laboratory',
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      description: 'Modern science laboratory'
    },
    {
      id: 5,
      category: 'events',
      title: 'Graduation Ceremony 2024',
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
      description: 'Annual graduation ceremony'
    },
    {
      id: 6,
      category: 'events',
      title: 'Foundation Day Celebration',
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      description: 'Celebrating PNC Foundation Day'
    },
    {
      id: 7,
      category: 'events',
      title: 'Sports Fest',
      url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
      description: 'Annual intramural sports fest'
    },
    {
      id: 8,
      category: 'events',
      title: 'Cultural Festival',
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
      description: 'Showcasing diverse cultures'
    },
    {
      id: 9,
      category: 'academics',
      title: 'Computer Laboratory',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      description: 'Advanced computer lab facilities'
    },
    {
      id: 10,
      category: 'academics',
      title: 'Engineering Workshop',
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      description: 'Engineering students in workshop'
    },
    {
      id: 11,
      category: 'academics',
      title: 'Business Seminar',
      url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop',
      description: 'Business management seminar'
    },
    {
      id: 12,
      category: 'academics',
      title: 'Science Fair',
      url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&h=600&fit=crop',
      description: 'Annual science fair exhibition'
    },
    {
      id: 13,
      category: 'outreach',
      title: 'Community Service',
      url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
      description: 'Community outreach program'
    },
    {
      id: 14,
      category: 'outreach',
      title: 'Medical Mission',
      url: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop',
      description: 'Free medical mission for community'
    },
    {
      id: 15,
      category: 'outreach',
      title: 'Tree Planting Activity',
      url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
      description: 'Environmental conservation program'
    },
    {
      id: 16,
      category: 'outreach',
      title: 'Feeding Program',
      url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
      description: 'Feeding program for underprivileged children'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📷' },
    { id: 'campus', name: 'Campus Life', icon: '🏫' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'academics', name: 'Academics', icon: '📚' },
    { id: 'outreach', name: 'Outreach Programs', icon: '🤝' }
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>Capturing Moments, Creating Memories</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Photo Gallery</h2>
          <p className="section-subtitle">
            Explore the vibrant life at Pamantasan ng Cabuyao
          </p>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.url} alt={image.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>&times;</button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;

