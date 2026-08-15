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
            Great things cannot be achieved by impulse but through a series of actions executed in the best way.
          </div>
        </div>

        <div className="why-cards-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.15s' }}>
            <div className="why-step-num">01</div>
            <h3>Hear it</h3>
            <p>We are modeling the behaviors you are looking for.</p>
          </div>
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className="why-step-num">02</div>
            <h3>Ask</h3>
            <p>We gather information using an online tool during a scrum, stand-up, or meeting call.</p>
          </div>
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.45s' }}>
            <div className="why-step-num">03</div>
            <h3>Build</h3>
            <p>Our software component is built to provide certain functionality and give a specified level of service.</p>
          </div>
          <div className={`why-card ${isVisible ? 'animate-in' : ''}`} style={{ transitionDelay: '0.6s' }}>
            <div className="why-step-num">04</div>
            <h3>Deliver</h3>
            <p>The discipline of planning, executing, and managing resources to complete deliverables within budget and time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
