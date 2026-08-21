import bannerImg from '../assets/Managed Services/data-analytics.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';
import ServiceIcon from './ServiceIcon';

const CATEGORIES = [
  { icon: 'layout', title: 'Business Intelligence Dashboards', desc: 'Live, decision-ready dashboards pulling together your key metrics.' },
  { icon: 'trending-up', title: 'Predictive Analytics', desc: 'Forecast trends and outcomes using historical data patterns.' },
  { icon: 'database', title: 'Data Warehousing & ETL', desc: 'Consolidate data from multiple sources into one reliable pipeline.' },
  { icon: 'activity', title: 'Real-Time Reporting', desc: 'Up-to-the-minute reporting instead of static, backward-looking reports.' },
  { icon: 'users', title: 'Customer & Sales Analytics', desc: 'Understand buying behavior and sales performance in depth.' },
  { icon: 'pie-chart', title: 'Data Visualization', desc: 'Turn complex datasets into charts and visuals anyone can read.' },
];

function DataAnalyticsServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${bannerImg})` }}
      >
        <h1>Data Analytics</h1>
      </div>

      <div className="service-layout">
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">Data Analytics</h2>

          <p className="service-lede reveal">
            We turn scattered data into dashboards and reports your team can actually act on — no more digging through spreadsheets for answers.
          </p>

          <div className="service-divider reveal"></div>

          <h3 className="service-subhead reveal">Data analytics categories we cover</h3>
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
            From forecasting to reporting, our analytics work is built to answer the questions that actually move your business forward.
          </p>

          <a href="/contact-us" className="service-cta-btn reveal">
            Get in touch &rarr;
          </a>
        </div>

        {/* Sidebar */}
        <div className="service-sidebar reveal-r">
          <div className="sidebar-label">All services</div>
          <a href="/service/salesforce" className="sidebar-link">Salesforce <span className="arrow">→</span></a>
          <a href="/service/data-analytics" className="sidebar-link active">Data analytics <span className="arrow">→</span></a>
          <a href="/service/website-app-development" className="sidebar-link">Website & app development <span className="arrow">→</span></a>
          <a href="/service/seo" className="sidebar-link">SEO <span className="arrow">→</span></a>
          <a href="/service/social-media-management" className="sidebar-link">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default DataAnalyticsServicePage;
