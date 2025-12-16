import React from 'react';
import '../pages/ProductPage.css';

function ProductPage({ product }) {
  if (!product) {
    return <div>Product data not found.</div>;
  }

  const { hero, brands, products, services, whyChoose, cta } = product;

  return (
    <div className="product-page">
      {hero && (
        <div className="product-hero">
          <img 
            src={hero.image} 
            alt={`${hero.title} Hero`}
            className="hero-bg-image"
          />
          <div className="container">
            <h1 className="page-title">{hero.title}</h1>
            <p className="page-subtitle">{hero.subtitle}</p>
          </div>
        </div>
      )}

      <div className="container">
        {brands && (
          <section className="brands-section">
            <h2>Authorized Brands</h2>
            <div className="brands-grid">
              {brands.map((brand, index) => (
                <div key={index} className="brand-card">
                  <div className="brand-logo">
                    <img src={brand.logo} alt={brand.name} />
                  </div>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="products-services-row">
          {products && (
            <div className="products-column">
              <h2>Products We Offer</h2>
              <div className="list-grid">
                {products.map((product, index) => (
                  <div key={index} className="list-item">
                    <span className="check-icon">✓</span>
                    <span>{product}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {services && (
            <div className="services-column">
              <h2>Our Services</h2>
              <div className="list-grid">
                {services.map((service, index) => (
                  <div key={index} className="list-item">
                    <span className="check-icon">✓</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {whyChoose && (
          <section className="why-choose">
            <h2>{whyChoose.title}</h2>
            <div className="features-grid">
              {whyChoose.features.map((feature, index) => (
                <div key={index} className="feature">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {cta && (
          <section className="cta-section">
            <h2>{cta.title}</h2>
            <p>{cta.subtitle}</p>
            <div className="cta-buttons">
              {cta.primaryAction && <a href={cta.primaryAction.href} className="btn-primary">{cta.primaryAction.text}</a>}
              {cta.secondaryAction && <a href={cta.secondaryAction.href} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">{cta.secondaryAction.text}</a>}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
