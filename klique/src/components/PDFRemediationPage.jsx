import bannerImg from '../assets/Managed Services/pdf-remediation.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';
import ServiceIcon from './ServiceIcon';

const CATEGORIES = [
  { icon: 'check-square', title: 'Accessibility Audits (WCAG/508)', desc: 'A full review of your documents against WCAG and Section 508 standards.' },
  { icon: 'tag', title: 'Tagging & Structure Remediation', desc: 'Correct heading structure and semantic tags for screen readers.' },
  { icon: 'image', title: 'Alt Text & Image Descriptions', desc: 'Meaningful descriptions added to every image and graphic.' },
  { icon: 'edit-3', title: 'Form Field Accessibility', desc: 'Interactive PDF forms made fully usable with assistive technology.' },
  { icon: 'layers', title: 'Batch Document Remediation', desc: 'Remediate large document libraries efficiently, at scale.' },
  { icon: 'shield', title: 'Compliance Reporting', desc: 'Documentation showing exactly what was fixed and why.' },
];

function PDFRemediationPage() {
  usePageReveal('.service-page-wrapper .reveal, .service-page-wrapper .reveal-l, .service-page-wrapper .reveal-r');

  return (
    <div className="service-page-wrapper w-full bg-[#f6f8fb]">
      <div
        className="page-banner"
        style={{ backgroundImage: `linear-gradient(rgba(11,12,16,0.6), rgba(11,12,16,0.55)), url(${bannerImg})` }}
      >
        <h1>PDF Remediation</h1>
      </div>

      <div className="service-layout">
        <div className="main-content">
          <div className="section-eyebrow reveal">Our services</div>
          <h2 className="service-section-title reveal">PDF Remediation</h2>

          <p className="service-lede reveal">
            We make PDF documents accessible to everyone — fixing structure, tagging, and alt text so they work with screen readers and assistive technology.
          </p>

          <div className="service-divider reveal"></div>

          <h3 className="service-subhead reveal">Remediation categories we cover</h3>
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
            Whether it's a single document or a full library, our remediation work is built to meet WCAG and Section 508 standards.
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
          <a href="/service/social-media-management" className="sidebar-link">Social media management <span className="arrow">→</span></a>
          <a href="/service/pdf-remediation" className="sidebar-link active">PDF remediation <span className="arrow">→</span></a>
        </div>
      </div>
    </div>
  );
}

export default PDFRemediationPage;
