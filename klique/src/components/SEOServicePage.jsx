import bannerImg from '../assets/Managed Services/seo.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';
import ServiceIcon from './ServiceIcon';

const CATEGORIES = [
  { icon: 'settings', title: 'Technical SEO', desc: 'Site speed, crawlability, and indexing issues fixed at the source.' },
  { icon: 'file-text', title: 'On-Page SEO', desc: 'Content, titles, and structure optimized for the terms that matter.' },
  { icon: 'map-pin', title: 'Local SEO', desc: 'Get found in local search and maps results where your customers are.' },
  { icon: 'edit-3', title: 'Content & Keyword Strategy', desc: 'Research-backed keyword targeting and a content plan to match.' },
  { icon: 'link-2', title: 'Link Building & Authority', desc: 'Build domain authority through quality, relevant backlinks.' },
  { icon: 'clipboard', title: 'SEO Audits & Reporting', desc: 'Clear, regular reporting on rankings, traffic, and what to fix next.' },
];

function SEOServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${bannerImg})` }}
      >
        <h1>SEO</h1>
      </div>

      <div className="service-layout">
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">SEO</h2>

          <p className="service-lede reveal">
            We help your business get found — through technical fixes, content strategy, and link building that compound into lasting organic growth.
          </p>

          <div className="service-divider reveal"></div>

          <h3 className="service-subhead reveal">SEO categories we cover</h3>
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
            Our SEO work is measured in results, not vanity metrics — clear reporting on what's improving and what's next.
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
