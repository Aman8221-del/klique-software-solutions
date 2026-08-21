import aboutImg1 from '../assets/aboutklique1.jpg';
import aboutImg2 from '../assets/aboutklique2.jpg';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function AboutSection({ onLinkClick }) {
  const [sectionRef, isVisible] = useRevealOnScroll();

  return (
    <section id="about" ref={sectionRef} className="about-section w-full">
      <div className="about-wrapper">
        {/* Animated Image Stack - Triggered on Scroll */}
        <div className="about-img-stack">
          <img
            className={`about-img-1 ${isVisible ? 'animate-in' : ''}`}
            src={aboutImg1}
            alt="Klique team"
            loading="lazy"
          />
          <img
            className={`about-img-2 ${isVisible ? 'animate-in' : ''}`}
            src={aboutImg2}
            alt="Klique office"
            loading="lazy"
          />
          <div className={`about-float-card ${isVisible ? 'animate-in' : ''}`}>
            <div className="icon">✓</div>
            <div>
              <div className="num">100+</div>
              <div className="lbl">Projects delivered</div>
            </div>
          </div>
        </div>

        {/* Text and Features Section - Triggered on Scroll */}
        <div className={`about-text-side ${isVisible ? 'animate-in' : ''}`}>
          <div className="about-eyebrow">About Klique</div>
          <h2 className="about-title">We are fully dedicated to support</h2>

          <div className="about-feature">
            <div className="about-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#ec4899' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <div>
              <h3>Our mission</h3>
              <p>
                Too many software fixes solve the ticket but ignore the person using the product.
                We build our Salesforce solutions the other way around, starting with the end-user
                and working back to the technical fix.
              </p>
            </div>
          </div>

          <div className="about-feature">
            <div className="about-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px', color: '#8b5cf6' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h3>Our story</h3>
              <p>
                From day one, our focus has stayed on solving the business problem in front of us rather
                than chasing whatever's trending in software. That practical approach is what has helped
                our clients grow steadily, project after project.
              </p>
            </div>
          </div>

          <a href="/about-us" onClick={(e) => onLinkClick && onLinkClick(e, '/about-us')} className="about-cta-btn">
            About us &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
