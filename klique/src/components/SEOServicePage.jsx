import service1 from '../assets/salesforce/sevices1.jpg';
import service2 from '../assets/salesforce/service2.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';

function SEOServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      {/* Banner */}
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${service1})` }}
      >
        <h1>SEO</h1>
      </div>

      <div className="service-layout">
        {/* Main content */}
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">SEO</h2>

          {/* Intro row */}
          <div className="intro-row">
            <div className="intro-img-wrap reveal-l">
              <img src={service2} alt="SEO" loading="lazy" />
            </div>
            <div className="intro-text reveal-r">
              <p className="service-lede">
                Welcome to Klique, your one-stop solution for all your needs. Our company specializes in providing top-notch products and services to our valued customers. With years of experience and a dedicated team of experts, we aim to deliver the best possible solutions to meet your requirements.
              </p>
            </div>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">Our Services:</h3>
            <p className="service-body" style={{ marginBottom: 'var(--space-4)' }}>
              At Klique, we offer a wide range of products and services to cater to all your needs. Our services include:
            </p>
            <ul className="service-list bulleted">
              <li><strong>Product A:</strong> Our top-quality product A is designed to meet the needs of businesses of all sizes. Whether you are a small startup or a large corporation, we have the solution for you.</li>
              <li><strong>Service B:</strong> Our team of experts provides professional service B, which is tailored to your specific needs. Our focus is on delivering the best possible results for our customers.</li>
              <li><strong>Service C:</strong> With our advanced technology and innovative solutions, we are able to offer Service C, which is designed to meet the needs of businesses in the modern world.</li>
            </ul>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">Quality And Customer Satisfaction:</h3>
            <p className="service-body">
              At <strong>Klique</strong>, we understand the importance of quality and customer satisfaction. Our commitment to providing top-notch products and services is reflected in our commitment to quality and customer satisfaction. We are dedicated to ensuring that every customer is completely satisfied with our products and services.
            </p>
          </div>

          {/* Image pair */}
          <div className="img-pair">
            <div className="img-pair-item reveal-l">
              <img src={service2} alt="SEO 1" loading="lazy" />
            </div>
            <div className="img-pair-item reveal-r">
              <img src={service1} alt="SEO 2" loading="lazy" />
            </div>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">Contact Us:</h3>
            <p className="service-body" style={{ marginBottom: 'var(--space-6)' }}>
              If you have any questions or need assistance with any of our products and services, please feel free to contact us. Our friendly and knowledgeable staff is always here to help.
            </p>

            <h3 className="service-subhead">Conclusion:</h3>
            <p className="service-body">
              At Klique, we are dedicated to providing our customers with the best possible products and services. With our commitment to quality and customer satisfaction, we are confident that you will be completely satisfied with our products and services. Contact us today to learn more about what we can do for you.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="service-sidebar reveal-r">
          <div className="sidebar-label">All services</div>
          <a href="/service/salesforce" className="sidebar-link">Salesforce <span className="arrow">→</span></a>
          <a href="/service/data-analytics" className="sidebar-link">Data analytics <span className="arrow">→</span></a>
          <a href="/service/website-app-development" className="sidebar-link">Website & app development <span className="arrow">→</span></a>
          <a href="/service/seo" className="sidebar-link active">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default SEOServicePage;
