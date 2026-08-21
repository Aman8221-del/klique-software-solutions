import bannerImg from '../assets/Managed Services/website-app-development.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';
import ServiceIcon from './ServiceIcon';

const CATEGORIES = [
  { icon: 'monitor', title: 'Custom Website Development', desc: 'Fully custom-built websites designed around your business, not a template.' },
  { icon: 'shopping-cart', title: 'E-commerce Development', desc: 'Online stores built to convert, from catalog to checkout.' },
  { icon: 'smartphone', title: 'Mobile App Development', desc: 'Native and cross-platform apps for iOS and Android.' },
  { icon: 'code', title: 'Web Application Development', desc: 'Custom web apps and internal tools built around your workflows.' },
  { icon: 'pen-tool', title: 'UI/UX Design', desc: 'Interfaces designed for clarity, usability, and conversion.' },
  { icon: 'link-2', title: 'API & Backend Integration', desc: 'Connect your site or app to the systems and services it depends on.' },
];

function WebsiteAppDevServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${bannerImg})` }}
      >
        <h1>Website and App Development</h1>
      </div>

      <div className="service-layout">
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">Website and App Development</h2>

          <p className="service-lede reveal">
            We design and build custom websites and mobile apps — fast, secure, and built around how your customers actually use them.
          </p>

          <div className="service-divider reveal"></div>

          <h3 className="service-subhead reveal">What we build</h3>
          <div className="service-feature-list">
            {CATEGORIES.map((cat, idx) => (
              <div
                className="service-feature-item reveal"
                style={{ transitionDelay: `${idx * 0.08}s` }}
                key={cat.title}
              >
                <div className="f-icon"><ServiceIcon name={cat.icon} /></div>
                <div>
                  <h4>{cat.title}</h4>
                  <p>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="service-body reveal" style={{ marginTop: 'var(--space-8)' }}>
            Every build is tailored to your goals, not a template — from a single landing page to a full e-commerce platform.
          </p>

          <a href="/contact-us" className="service-cta-btn reveal">
            Get in touch &rarr;
          </a>
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
