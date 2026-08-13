import { useState, useEffect, useRef } from 'react';
import aboutImg1 from '../assets/aboutklique1.jpg';
import aboutImg2 from '../assets/aboutklique2.jpg';

function AboutSection({ onLinkClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer once it becomes visible so it doesn't trigger repeatedly
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the element is visible in the viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section w-full">
      <div className="about-glow-a"></div>
      <div className="about-glow-b"></div>

      <div className="about-wrapper">
        {/* Animated Image Stack - Triggered on Scroll */}
        <div className="about-img-stack">
          <img 
            className={`about-img-1 ${isVisible ? 'animate-in' : ''}`} 
            src={aboutImg1} 
            alt="Klique team" 
          />
          <img 
            className={`about-img-2 ${isVisible ? 'animate-in' : ''}`} 
            src={aboutImg2} 
            alt="Klique office" 
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
                We want to transform the current environment, where developers have a robotic tendency 
                to offer a simple fix without regard for the end-user. Along with our specialised 
                Salesforce solutions, we make a strong effort to restore that empathy and compassion.
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
                Our solutions, services, and products have assisted our clients in maximising their potential 
                for growth thanks to our cutting-edge, best-in-class industry solutions that are supported 
                by the most recent technology.
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
