import service1 from '../assets/salesforce/sevices1.jpg';
import service2 from '../assets/salesforce/service2.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';

function SalesforceServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${service1})` }}
      >
        <h1>Salesforce</h1>
      </div>

      <div className="service-layout">
        {/* Main content */}
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">Salesforce</h2>

          {/* Intro row */}
          <div className="intro-row">
            <div className="intro-img-wrap reveal-l">
              <img src={service2} alt="Salesforce" loading="lazy" />
              <div className="img-label">Salesforce is a cloud-based</div>
            </div>
            <div className="intro-text reveal-r">
              <p className="service-lede">Salesforce is a cloud-based customer relationship management (CRM) platform that offers a range of tools and applications to help businesses manage their sales, customer service, marketing, and more. Some key features of Salesforce include:</p>
            </div>
          </div>

          <div className="service-divider reveal"></div>

          {/* Feature grid */}
          <div className="service-feature-list">
            <div className="service-feature-item reveal" style={{ transitionDelay: '0s' }}>
              <div className="f-icon">📋</div>
              <div>
                <h4>Contact management</h4>
                <p>Store and manage all customer information in one central location.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="f-icon">🎯</div>
              <div>
                <h4>Lead and opportunity management</h4>
                <p>Track the entire sales process from lead to close.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="f-icon">📈</div>
              <div>
                <h4>Sales forecasting</h4>
                <p>Get a clear picture of future sales performance with sales forecasting.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="f-icon">⚙️</div>
              <div>
                <h4>Marketing automation</h4>
                <p>Automate and measure the effectiveness of marketing campaigns.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="f-icon">🎧</div>
              <div>
                <h4>Customer service</h4>
                <p>Streamline customer service with case management, knowledge base, and community tools.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.5s' }}>
              <div className="f-icon">💬</div>
              <div>
                <h4>Collaboration and productivity</h4>
                <p>Enhance team collaboration with Chatter, Salesforce mobile app, and more.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.6s' }}>
              <div className="f-icon">📊</div>
              <div>
                <h4>Analytics and reporting</h4>
                <p>Gain insights into your business with robust reporting and analytics capabilities.</p>
              </div>
            </div>
            <div className="service-feature-item reveal" style={{ transitionDelay: '0.7s' }}>
              <div className="f-icon">🔗</div>
              <div>
                <h4>Integration and customization</h4>
                <p>Easily integrate with other systems and customize the platform to meet your unique needs.</p>
              </div>
            </div>
          </div>

          {/* Image pair */}
          <div className="img-pair">
            <div className="img-pair-item reveal-l">
              <img src={service2} alt="Team working" loading="lazy" />
            </div>
            <div className="img-pair-item reveal-r">
              <img src={service1} alt="Office meeting" loading="lazy" />
            </div>
          </div>

          {/* Summary card */}
          <div className="service-summary-card reveal">
            <p>Overall, Salesforce is a comprehensive and flexible platform that can help businesses of all sizes grow and succeed by improving their customer relationships and streamlining their operations.</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="service-sidebar reveal-r">
          <div className="sidebar-label">All services</div>
          <a href="/service/salesforce" className="sidebar-link active">Salesforce <span className="arrow">→</span></a>
          <a href="/service/data-analytics" className="sidebar-link">Data analytics <span className="arrow">→</span></a>
          <a href="/service/website-app-development" className="sidebar-link">Website & app development <span className="arrow">→</span></a>
          <a href="/service/seo" className="sidebar-link">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default SalesforceServicePage;
