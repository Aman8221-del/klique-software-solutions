import { useEffect, useRef } from 'react';
import './ServicesPage.css';
import serviceSpecialty from '../assets/salesforce/service2.jpg';

function ServicesPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    window.history.pushState(null, null, path);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <div className="services-page" ref={scrollRef}>
      
      {/* Premium Hero Section */}
      <div className="services-hero">
        <div className="hero-bg-glow"></div>
        <div className="services-hero-content">
          <span className="eyebrow reveal">Our Expertise</span>
          <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>Transforming Visions into Digital Reality</h1>
          <p className="reveal" style={{ transitionDelay: '0.2s' }}>
            From intelligent cloud solutions to data-driven insights, we deliver world-class technology services that accelerate your business growth.
          </p>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="specialties-section">
        <div className="specialties-grid">
          
          {/* Left Image Area */}
          <div className="specialties-img-wrap reveal-l">
            <div className="img-accent-blur"></div>
            <img src={serviceSpecialty} alt="Our Specialties" />
          </div>

          {/* Right Text Area */}
          <div className="specialties-text-wrap reveal-r">
            <span className="eyebrow">Work With Us</span>
            <h2>Mastering the Digital Landscape</h2>
            <p>
              Klique is your premier destination for enterprise-grade solutions. Whether it's end-to-end Salesforce Implementation, robust Development, Strategic Consulting, or comprehensive Managed Services, we have the expertise to elevate your operations.
            </p>
            
            <div className="specialties-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                Tailored Enterprise Solutions
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                Seamless Cloud Integration
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                Data-Driven Strategies
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="services-grid-section">
        <div className="section-header reveal">
          <span className="eyebrow">Capabilities</span>
          <h2>Explore Our Services</h2>
        </div>

        <div className="services-grid-layout">
          
          {/* 1. Salesforce */}
          <div className="premium-card reveal" style={{ transitionDelay: '0s' }}>
            <div className="premium-icon-box">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </div>
            <h3>Salesforce Solutions</h3>
            <p>Unlock the full potential of your CRM with our custom Salesforce implementation, optimization, and development strategies.</p>
            <a href="/service/salesforce" onClick={(e) => handleLinkClick(e, '/service/salesforce')} className="read-more-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 2. Data Analytics */}
          <div className="premium-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="premium-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h3>Data Analytics</h3>
            <p>Transform raw data into actionable intelligence. We build powerful analytics dashboards that drive informed decision-making.</p>
            <a href="/service/data-analytics" onClick={(e) => handleLinkClick(e, '/service/data-analytics')} className="read-more-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 3. Website and app dev */}
          <div className="premium-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="premium-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
            </div>
            <h3>Web & App Development</h3>
            <p>Crafting stunning, high-performance websites and intuitive mobile applications tailored to captivate your audience.</p>
            <a href="/service/website-app-development" onClick={(e) => handleLinkClick(e, '/service/website-app-development')} className="read-more-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 4. SEO */}
          <div className="premium-card reveal" style={{ transitionDelay: '0s' }}>
            <div className="premium-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Search Engine Optimization</h3>
            <p>Dominate search rankings. Our cutting-edge SEO strategies ensure your brand is always found by the right people.</p>
            <a href="/service/seo" onClick={(e) => handleLinkClick(e, '/service/seo')} className="read-more-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 5. Social Media */}
          <div className="premium-card reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="premium-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </div>
            <h3>Social Media Management</h3>
            <p>Engage, grow, and convert. We manage your online presence with compelling content and strategic community building.</p>
            <a href="/service/social-media-management" onClick={(e) => handleLinkClick(e, '/service/social-media-management')} className="read-more-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* 6. PDF Remediation */}
          <div className="premium-card reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="premium-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>PDF Remediation</h3>
            <p>Ensure universal digital accessibility. We specialize in making your documents fully compliant with modern accessibility standards.</p>
            <a href="/service/pdf-remediation" onClick={(e) => handleLinkClick(e, '/service/pdf-remediation')} className="read-more-btn">
              Discover More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
