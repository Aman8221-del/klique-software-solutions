import bannerImg from '../assets/Managed Services/salesforce.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';
import ServiceIcon from './ServiceIcon';

const CATEGORIES = [
  { icon: 'trending-up', title: 'Sales Cloud', desc: 'Drive sales productivity and pipeline growth.' },
  { icon: 'headphones', title: 'Service Cloud', desc: 'Deliver connected, intelligent customer service.' },
  { icon: 'globe', title: 'Experience Cloud', desc: 'Build secure customer and partner experiences.' },
  { icon: 'file-text', title: 'Revenue Cloud & CPQ', desc: 'Streamline product configuration, pricing, quoting and revenue.' },
  { icon: 'truck', title: 'Field Service', desc: 'Optimize field operations, scheduling and workforce management.' },
  { icon: 'shield', title: 'Financial Services Cloud', desc: 'Deliver connected experiences for financial services organizations.' },
  { icon: 'heart', title: 'Health Cloud', desc: 'Connect patients, providers and healthcare journeys.' },
  { icon: 'shopping-cart', title: 'Commerce Cloud', desc: 'Build scalable B2B and B2C commerce experiences.' },
];

function SalesforceServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${bannerImg})` }}
      >
        <h1>Salesforce</h1>
      </div>

      <div className="service-layout">
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">Salesforce</h2>

          <p className="service-lede reveal">
            Salesforce is the world's leading CRM platform — built to manage your sales pipeline, customer service, and marketing in one connected system. We implement and customize it around how your team actually works.
          </p>

          <div className="service-divider reveal"></div>

          <h3 className="service-subhead reveal">Salesforce solutions we work with</h3>
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
            Every engagement includes contact and pipeline management, reporting and analytics, and integration with the systems you already use — so Salesforce fits your business, not the other way around.
          </p>

          <a href="/contact-us" className="service-cta-btn reveal">
            Get in touch &rarr;
          </a>
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
