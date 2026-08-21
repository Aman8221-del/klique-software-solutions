import about1 from '../assets/aboutus/about1.jpg';
import about2 from '../assets/aboutus/about2.jpg';
import about3 from '../assets/aboutus/about3.jpg';
import { usePageReveal } from '../hooks/useRevealOnScroll';

function AboutUsPage() {
  usePageReveal('.reveal, .reveal-scale, .reveal-left, .reveal-right', { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  return (
    <div className="w-full">
      {/* Intro Hero Section */}
      <section className="about-hero w-full">
        <div className="eyebrow reveal">About Klique</div>
        <h1 className="reveal">
          More than 20+ years, we build <span>IT solutions</span> that matter
        </h1>
        <p className="reveal">
          One of the best Salesforce development companies in India, Klique serves clients across the USA, UK, Australia, and APAC with scalable, high-quality solutions.
        </p>

        {/* Bento Grid */}
        <div className="bento">
          <div className="bento-main-img reveal-scale">
            <img src={about1} alt="Klique team" loading="lazy" />
            <div className="overlay"></div>
            <div className="badge-row">
              <div className="exp-num">20+</div>
              <div className="exp-label">Years of proven Salesforce & software expertise</div>
            </div>
          </div>

          <div className="bento-card reveal">
            <div className="card-eyebrow">Who we are</div>
            <h3>Founded by five driven people</h3>
            <p>Klique was built with one goal — a Salesforce consultation and development firm that finds simple solutions to challenging business problems.</p>
          </div>

          <div className="bento-card dark reveal">
            <div className="card-eyebrow">Our approach</div>
            <h3>Outcome-first, not trend-first</h3>
            <p>We build for the result our clients need, not just what's popular in software right now. That focus, backed by a genuine commitment to getting it right, is what our long-term client relationships are built on.</p>
          </div>
        </div>
      </section>

      {/* Story / Team strip */}
      <section className="story-section w-full">
        <div className="story-header reveal">
          <div className="eyebrow">Our story</div>
          <h2>What drives Klique forward</h2>
        </div>

        <div className="timeline">
          <div className="tl-card reveal" style={{ transitionDelay: '0s' }}>
            <div className="tl-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
            </div>
            <h4>Global reach</h4>
            <p>Serving clients across the USA, UK, Australia, and the APAC region with consistent quality and communication.</p>
          </div>
          <div className="tl-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="tl-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4>Lasting relationships</h4>
            <p>By giving clients more than they expect, we've built long-term connections that go beyond a single project.</p>
          </div>
          <div className="tl-card reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="tl-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2a7 7 0 0 0-7 7c0 2 1.5 3.5 2 5v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2c.5-1.5 2-3 2-5a7 7 0 0 0-7-7z"></path></svg>
            </div>
            <h4>Expert team</h4>
            <p>A group of seasoned, quick-thinking professionals whose combined expertise drives every result-oriented solution we deliver.</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section w-full">
        <div className="vm-grid">
          <div className="vm-card reveal-left">
            <img src={about2} alt="Our vision" loading="lazy" />
            <div className="vm-card-body">
              <div className="card-eyebrow">Our vision</div>
              <h3>Our future goals</h3>
              <p>At Klique, we cherish everyone connected to us — clients and workers alike. We've found a way to maintain work-life balance for our staff without sacrificing the quality of work we deliver. Through incredible cloud solutions, we aim to be recognised as a creative leader in the Salesforce community.</p>
            </div>
          </div>

          <div className="vm-card reveal-right">
            <img src={about3} alt="Our mission" loading="lazy" />
            <div className="vm-card-body">
              <div className="card-eyebrow">Our mission</div>
              <h3>Our mission statement</h3>
              <p>Software development can become mechanical: a fix that technically works but ignores the person on the other end. We built Klique to work the other way, so every Salesforce solution we deliver genuinely serves the people who use it, not just the spec it was written against.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
