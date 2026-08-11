import { useEffect } from 'react';
import service1 from '../assets/salesforce/sevices1.jpg';
import service2 from '../assets/salesforce/service2.jpg';

function WebsiteAppDevServicePage() {
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
        <h1>Website and App Development</h1>
      </div>

      <div className="service-layout">
        {/* Main content */}
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0b0c10', marginBottom: '36px' }} className="reveal">Website and App Development</h2>

          {/* Intro row */}
          <div className="intro-row">
            <div className="intro-img-wrap reveal-l">
              <img src={service2} alt="Website and App Development" />
            </div>
            <div className="intro-text reveal-r">
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#565a66' }}>
                Welcome to our website and app development service! We are a team of experienced and highly skilled web developers, designers, and app developers who are dedicated to delivering cutting-edge digital solutions that meet your business needs and goals. Our goal is to help you succeed by creating a seamless and engaging online presence that provides your customers with the best possible experience.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '20px', marginBottom: '40px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280' }}>
              We specialize in developing custom websites and mobile apps that are tailored to your specific requirements and goals. Whether you're looking to build a new website from scratch, redesign your existing site or launch a new app, our team has the expertise and experience to make it happen. Our team has a passion for innovation and is dedicated to providing the latest and most advanced technologies, tools, and techniques to bring your vision to life. We use the latest development frameworks and platforms, including WordPress, React, Angular, Laravel, React Native, and Swift, to deliver world-class digital solutions that are fast, secure, and user-friendly.
            </p>
          </div>

          <div className="reveal" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#0d5fd4', fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Our Comprehensive Website And App Development Services Include:</h3>
            <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280', paddingLeft: '24px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Website Design and Development</li>
              <li>Custom Web Application Development</li>
              <li>Mobile App Development (iOS and Android)</li>
              <li>E-commerce Website Development</li>
              <li>Website Redesign and Rebranding</li>
              <li>Website Maintenance and Support</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Image pair */}
          <div className="img-pair">
            <div className="img-pair-item reveal-l">
              <img src={service2} alt="Development 1" />
            </div>
            <div className="img-pair-item reveal-r">
              <img src={service1} alt="Development 2" />
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '40px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280', marginBottom: '16px' }}>
              We understand that every business is unique and that's why we work closely with our clients to understand their specific needs and goals. Whether you're looking to improve your website's performance, launch a new app or start an e-commerce store, our team will work with you every step of the way to make sure that your vision becomes a reality.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280' }}>
              If you're looking for a partner that can help you succeed in the digital world, look no further. Get in touch with us today to learn more about our website and app development services and how we can help you take your business to the next level.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="service-sidebar reveal-r">
          <div className="sidebar-label">All services</div>
          <a href="/service/salesforce" className="sidebar-link">Salesforce <span className="arrow">→</span></a>
          <a href="/service/data-analytics" className="sidebar-link">Data analytics <span className="arrow">→</span></a>
          <a href="/service/website-app-development" className="sidebar-link active">Website & app development <span className="arrow">→</span></a>
          <a href="/service/seo" className="sidebar-link">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default WebsiteAppDevServicePage;
