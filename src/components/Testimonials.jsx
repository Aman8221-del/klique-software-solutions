import { useState, useEffect, useRef } from 'react';

const TESTIMONIALS_DATA = [
  { text: "Klique completely transformed how we manage our sales pipeline. Their Salesforce implementation was smooth and precise.", name: "Ritika Sharma", role: "Operations Head, NexusSync", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop" },
  { text: "From custom web development to ongoing support, Klique has been a reliable partner. They deliver on time, every time.", name: "Arjun Mehta", role: "Founder, CloudPeak", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" },
  { text: "The team's expertise in CRM automation saved us countless hours every week. Highly recommend Klique for scaling businesses.", name: "Sara Khan", role: "Marketing Lead, AgileSphere", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" },
  { text: "Professional, responsive, and technically strong. Klique built our entire customer portal ahead of schedule.", name: "Rohan Verma", role: "CTO, TechVista", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" },
  { text: "Their data analytics dashboards gave us visibility we never had before. Genuinely impressed by the attention to detail.", name: "Priya Nair", role: "Product Manager, DataFlow", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" }
];

// Duplicate the array for a seamless loop
const MULTIPLIED_DATA = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const requestRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
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

  useEffect(() => {
    const frame = () => {
      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (halfWidth > 0) {
          if (!pausedRef.current) {
            posRef.current += 0.6;
            if (posRef.current >= halfWidth) {
              posRef.current -= halfWidth;
            }
            if (posRef.current < 0) {
              posRef.current += halfWidth;
            }
            trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
          }
        }
      }
      requestRef.current = requestAnimationFrame(frame);
    };

    requestRef.current = requestAnimationFrame(frame);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const handleNext = () => {
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / 2;
      const cardWidth = 384; // card width (360px) + gap (24px)
      posRef.current += cardWidth;
      if (posRef.current >= halfWidth) {
        posRef.current -= halfWidth;
      }
      trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      const halfWidth = trackRef.current.scrollWidth / 2;
      const cardWidth = 384; // card width (360px) + gap (24px)
      posRef.current -= cardWidth;
      if (posRef.current < 0) {
        posRef.current += halfWidth;
      }
      trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
    }
  };

  return (
    <section ref={sectionRef} id="testimonials" className="testi-section w-full">
      <div className="testi-glow" />

      <div className="max-w-7xl mx-auto w-full">
        <div className={`heading-block ${isVisible ? 'animate-in' : ''}`}>
          <div className="eyebrow">Testimonials</div>
          <h2>What our clients say</h2>
          <p>Real feedback from businesses we've helped grow with smarter software and Salesforce solutions.</p>
        </div>

        <div 
          className="marquee-wrap"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          <button className="nav-btn nav-prev" onClick={handlePrev} aria-label="Previous testimonial">
            ←
          </button>
          <button className="nav-btn nav-next" onClick={handleNext} aria-label="Next testimonial">
            →
          </button>

          <div className="marquee-track" ref={trackRef}>
            {MULTIPLIED_DATA.map((testi, idx) => (
              <div key={idx} className="testi-card">
                <div className="stars">★★★★★</div>
                <p className="testi-text">{testi.text}</p>
                <div className="testi-person">
                  <img src={testi.img} alt={testi.name} />
                  <div>
                    <div className="name">{testi.name}</div>
                    <div className="role">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
