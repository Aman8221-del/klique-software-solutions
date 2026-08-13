import { useEffect } from 'react';
import service1 from '../assets/salesforce/sevices1.jpg';
import service2 from '../assets/salesforce/service2.jpg';

function PDFRemediationPage() {
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
        <h1>PDF Remediation</h1>
      </div>

      <div className="service-layout">
        {/* Main content */}
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#0b0c10', marginBottom: '36px' }} className="reveal">PDF Remediation</h2>

          {/* Intro row */}
          <div className="intro-row">
            <div className="intro-img-wrap reveal-l">
              <img src={service2} alt="PDF Remediation" />
            </div>
            <div className="intro-text reveal-r">
              <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#565a66' }}>
                Klique provides a PDF remediation service that specialises in fixing accessibility issues in PDF documents to make them usable for people with disabilities.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '40px', marginBottom: '40px' }}>
            <h3 style={{ color: '#0d5fd4', fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Our Services:</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280', marginBottom: '16px' }}>
              At Klique, we offer a wide range of products and services to cater to all your needs. Our services include:
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280' }}>
              Klique uses a combination of software tools and manual processes to identify and fix any accessibility issues, such as missing alt text, incorrect heading structures, and more.
            </p>
          </div>

          <div className="reveal" style={{ marginBottom: '40px' }}>
            <h3 style={{ color: '#0d5fd4', fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Quality And Customer Satisfaction:</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#6b7280' }}>
              The best PDF remediation service providers have a deep understanding of accessibility standards, such as the Web Content Accessibility Guidelines (WCAG), and use this knowledge to ensure that every document they work on is fully accessible. They also provide clear, concise reporting and documentation to help their clients understand the changes that were made and why they were made. Whether you are a large corporation, a government agency, or an individual, a PDF remediation service provider can help you ensure that your PDF documents are accessible to everyone, regardless of ability. So if you have PDF documents that need to be made accessible, consider partnering with a Klique PDF remediation service to get the job done right.
            </p>
          </div>

          {/* Image pair */}
          <div className="img-pair">
            <div className="img-pair-item reveal-l">
              <img src={service2} alt="PDF Remediation 1" />
            </div>
            <div className="img-pair-item reveal-r">
              <img src={service1} alt="PDF Remediation 2" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="service-sidebar reveal-r">
          <div className="sidebar-label">All services</div>
          <a href="/service/salesforce" className="sidebar-link">Salesforce <span className="arrow">→</span></a>
          <a href="/service/data-analytics" className="sidebar-link">Data analytics <span className="arrow">→</span></a>
          <a href="/service/website-app-development" className="sidebar-link">Website & app development <span className="arrow">→</span></a>
          <a href="/service/seo" className="sidebar-link">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link active">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default PDFRemediationPage;
