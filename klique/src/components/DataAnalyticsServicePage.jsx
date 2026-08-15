import service1 from '../assets/salesforce/sevices1.jpg';
import service2 from '../assets/salesforce/service2.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';

function DataAnalyticsServicePage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      {/* Banner */}
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${service1})` }}
      >
        <h1>Data Analytics</h1>
      </div>

      <div className="service-layout">
        {/* Main content */}
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">Data Analytics</h2>

          {/* Intro row */}
          <div className="intro-row">
            <div className="intro-img-wrap reveal-l">
              <img src={service2} alt="Data Analytics" loading="lazy" />
            </div>
            <div className="intro-text reveal-r">
              <p className="service-lede">
                Welcome to our website dedicated to Data Analytics! We are dedicated to providing comprehensive and in-depth information about the world of data analysis and how it can help businesses and organizations of all sizes make better decisions and drive success.
              </p>
            </div>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">What Is Data Analytics?</h3>
            <p className="service-body">
              Data analytics refers to the process of analyzing, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. The goal of data analytics is to provide organizations with actionable insights into their operations and help them make informed decisions that can improve their overall performance and bottom line.
            </p>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">The Benefits Of Data Analytics</h3>
            <p className="service-body" style={{ marginBottom: 'var(--space-4)' }}>
              There are numerous benefits to using data analytics, including:
            </p>
            <ol className="service-list">
              <li><strong>Improved Decision-Making:</strong> By analyzing data, organizations can gain a deeper understanding of their operations and make better-informed decisions that can improve their overall performance.</li>
              <li><strong>Increased Efficiency:</strong> Data analytics can help organizations identify areas where they can improve their processes and increase efficiency, leading to a reduction in waste and a boost in productivity.</li>
              <li><strong>Improved Customer Satisfaction:</strong> Data analytics can help organizations understand the needs and preferences of their customers, allowing them to tailor their offerings and improve customer satisfaction.</li>
              <li><strong>Better Customer Insights:</strong> Data analytics can help organizations gain a deeper understanding of their customers and gain valuable insights into their behaviors, preferences, and buying habits.</li>
              <li><strong>Competitive Advantage:</strong> By leveraging data analytics, organizations can stay ahead of the competition and gain a competitive advantage in their respective industries.</li>
            </ol>
          </div>

          {/* Image pair */}
          <div className="img-pair">
            <div className="img-pair-item reveal-l">
              <img src={service2} alt="Analytics 1" loading="lazy" />
            </div>
            <div className="img-pair-item reveal-r">
              <img src={service1} alt="Analytics 2" loading="lazy" />
            </div>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">Data Analytics Techniques</h3>
            <p className="service-body" style={{ marginBottom: 'var(--space-4)' }}>
              There are a wide variety of data analytics techniques that organizations can use to analyze and make sense of their data. Some of the most popular techniques include:
            </p>
            <ol className="service-list">
              <li><strong>Descriptive Analytics:</strong> This type of analytics focuses on describing and summarizing data to understand its characteristics and patterns.</li>
              <li><strong>Predictive Analytics:</strong> Predictive analytics uses historical data to make predictions about future events or trends.</li>
              <li><strong>Prescriptive Analytics:</strong> Prescriptive analytics combines descriptive and predictive analytics to provide recommendations on how organizations can improve their operations and achieve specific goals.</li>
              <li><strong>Machine Learning:</strong> Machine learning is a type of artificial intelligence that uses algorithms and statistical models to analyze and make predictions about data.</li>
            </ol>
          </div>

          <div className="service-block reveal">
            <h3 className="service-subhead">Conclusion</h3>
            <p className="service-body">
              Data analytics has become increasingly important for businesses and organizations of all sizes, as it provides valuable insights into their operations and helps them make better-informed decisions. We hope this website provides you with a comprehensive understanding of data analytics and how it can benefit your organization.
            </p>
          </div>
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
