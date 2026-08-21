import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

function WhyChooseUs() {
  const [sectionRef, isVisible] = useRevealOnScroll();

  return (
    <section ref={sectionRef} id="why-choose-us" className="why-section w-full">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className={`why-header-row ${isVisible ? 'animate-in' : ''}`}>
          <div className="why-header-left">
            <div className="why-eyebrow">Why choose us</div>
            <h2>Why we're the software partner you're looking for</h2>
          </div>
          <div className="why-header-right">
            We follow the same disciplined process on every engagement, from the first conversation through to final delivery.
          </div>
        </div>

        <div className="why-cards-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="why-step-num">01</div>
            <h3>Hear it</h3>
            <p>We start by listening, understanding your goals, constraints, and what success needs to look like.</p>
          </div>
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="why-step-num">02</div>
            <h3>Ask</h3>
            <p>We work through the details together in structured stand-ups, scoping calls, and planning sessions.</p>
          </div>
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.45s' }}>
            <div className="why-step-num">03</div>
            <h3>Build</h3>
            <p>We build each component against a clear specification, so it does what it's meant to and holds up in production.</p>
          </div>
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <div className="why-step-num">04</div>
            <h3>Deliver</h3>
            <p>We manage timelines and resources carefully, so what we deliver lands on schedule and within budget.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
