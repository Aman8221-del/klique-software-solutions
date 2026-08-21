import bannerImg from '../assets/Managed Services/social-media-management.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';
import ServiceIcon from './ServiceIcon';

const CATEGORIES = [
  { icon: 'calendar', title: 'Content Creation & Scheduling', desc: 'A consistent posting calendar with content built for each platform.' },
  { icon: 'message-circle', title: 'Community Management', desc: 'Responding to comments and messages so your audience feels heard.' },
  { icon: 'target', title: 'Paid Social Campaigns', desc: 'Targeted ad campaigns designed to reach the right audience.' },
  { icon: 'users', title: 'Influencer Collaboration', desc: 'Partnering with creators to extend your brand\'s reach.' },
  { icon: 'bar-chart-2', title: 'Social Analytics & Reporting', desc: 'Clear reporting on what\'s working, and what to adjust.' },
  { icon: 'award', title: 'Brand Strategy', desc: 'A consistent voice and visual identity across every platform.' },
];

function SocialMediaManagementPage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${bannerImg})` }}
      >
        <h1>Social Media Management</h1>
      </div>

      <div className="service-layout">
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">Social Media Management</h2>

          <p className="service-lede reveal">
            We manage your social presence end-to-end — content, community, and campaigns — so you can focus on running your business.
          </p>

          <div className="service-divider reveal"></div>

          <h3 className="service-subhead reveal">What we manage</h3>
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
            From a content calendar to paid campaigns, we build a social strategy consistent with how your brand actually sounds.
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
          <a href="/service/seo" className="sidebar-link">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link active">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaManagementPage;
