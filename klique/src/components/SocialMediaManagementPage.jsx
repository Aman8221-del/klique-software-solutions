import { useEffect } from 'react';
import service1 from '../assets/salesforce/sevices1.jpg';
import service2 from '../assets/salesforce/service2.jpg';

function SocialMediaManagementPage() {
  // Scroll reveal trigger
  useEffect(() => {
    window.scrollTo(0, 0);
    const revealEls = document.querySelectorAll('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealEls.forEach(el => observer.observe(el));
    return () => {
      revealEls.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      {/* Banner */}
      <div 
        className="page-banner" 
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${service1})` }}
      >
        <h1>Social Media Management</h1>
      </div>

      <div className="service-layout">
        {/* Main content */}
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0b0c10', marginBottom: '36px' }} className="reveal">Social Media Management</h2>

          {/* Intro row */}
          <div className="intro-row">
            <div className="intro-img-wrap reveal-l">
              <img src={service2} alt="Social Media" />
            </div>
            <div className="intro-text reveal-r">
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#565a66', marginBottom: '16px' }}>
                We understand that social media can be overwhelming and time-consuming, especially for businesses and individuals with a busy schedule. That's why we're here to help. Our team of experienced social media experts will manage your accounts for you, freeing up your time and allowing you to focus on other important tasks.
              </p>
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#565a66', marginBottom: '16px' }}>
                We'll handle everything from creating and scheduling posts, to engaging with your followers and monitoring your analytics. Our goal is to increase your social media presence, build brand awareness, and ultimately drive traffic to your website.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '20px', marginBottom: '40px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280' }}>
              We work with a variety of platforms, including Facebook, Twitter, Instagram, and LinkedIn, and will customize our strategy to meet the specific needs of your business. Whether you're looking to reach a new audience, build your following, or simply save time, our social media management service has got you covered.
            </p>
          </div>

          {/* Image pair */}
          <div className="img-pair">
            <div className="img-pair-item reveal-l">
              <img src={service2} alt="Social Media 1" />
            </div>
            <div className="img-pair-item reveal-r">
              <img src={service1} alt="Social Media 2" />
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280' }}>
              So why wait? Let us take the reins of your social media accounts and help you achieve your online goals. Contact us today to learn more about our services and how we can help your business succeed on social media!
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="service-sidebar reveal-r">
          <div className="sidebar-label">All services</div>
          <a href="/service/salesforce" className="sidebar-link">Salesforce <span className="arrow">→</span></a>
          <a href="/service/data-analytics" className="sidebar-link">Data analytics <span className="arrow">→</span></a>
          <a href="/service/website-app-development" className="sidebar-link">Website & app development <span className="arrow">→</span></a>
          <a href="/service/seo" className="sidebar-link">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link active">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaManagementPage;
