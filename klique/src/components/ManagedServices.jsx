import { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import salesforceImg from '../assets/Managed Services/salesforce.jpg';
import dataAnalyticsImg from '../assets/Managed Services/data-analytics.jpg';
import webAppDevImg from '../assets/Managed Services/website-app-development.jpg';
import seoImg from '../assets/Managed Services/seo.jpg';
import socialMediaImg from '../assets/Managed Services/social-media-management.jpg';
import pdfRemediationImg from '../assets/Managed Services/pdf-remediation.jpg';

const MAIN_SERVICES_DATA = [
  {
    title: 'Salesforce',
    desc: 'Custom CRM workflows, system integrations, and automation pipelines across Sales Cloud, Service Cloud, CPQ, and more.',
    href: '/service/salesforce',
    img: salesforceImg,
  },
  {
    title: 'Data Analytics',
    desc: 'Insightful KPI dashboards, business intelligence, and database automation that turn raw data into decisions.',
    href: '/service/data-analytics',
    img: dataAnalyticsImg,
  },
  {
    title: 'Website and App Development',
    desc: 'High-performance responsive web platforms and dynamic mobile apps, built around your business.',
    href: '/service/website-app-development',
    img: webAppDevImg,
  },
  {
    title: 'SEO',
    desc: 'Search optimization, keyword rankings, audit compliance, and organic growth strategies that compound over time.',
    href: '/service/seo',
    img: seoImg,
  },
  {
    title: 'Social Media Management',
    desc: 'Strategic content campaigns, growth analytics, and brand positioning across every platform that matters.',
    href: '/service/social-media-management',
    img: socialMediaImg,
  },
  {
    title: 'PDF Remediation',
    desc: 'Document accessibility, compliance fixes, and structured metadata so every document works for every reader.',
    href: '/service/pdf-remediation',
    img: pdfRemediationImg,
  },
];

function ManagedServices({ onLinkClick }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = MAIN_SERVICES_DATA[activeIdx];

  const [servicesRef, servicesVisible] = useRevealOnScroll();

  return (
    <section id="services" ref={servicesRef} className="services-section w-full">
      {/* Heading Block */}
      <div className={`heading-block ${servicesVisible ? 'animate-in' : ''}`}>
        <div className="eyebrow">Klique platform</div>
        <h2>What we do</h2>
      </div>

      {/* Services Grid wrapped in animated card-frame */}
      <div className={`card-frame ${servicesVisible ? 'animate-in' : ''}`}>
        <div className="services-grid">
          <div className="tabs">
            {MAIN_SERVICES_DATA.map((service, idx) => (
              <button
                key={service.title}
                className={`tab ${activeIdx === idx ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="arrow">→</span> {service.title}
              </button>
            ))}
          </div>

          <div className="panel">
            {/* Setting key={activeIdx} automatically triggers remounting and runs panelFade CSS entry keyframe */}
            <div className="panel-content" key={activeIdx}>
              <div className="img-frame">
                <img src={activeService.img} alt={activeService.title} loading="lazy" />
              </div>
              <div className="panel-text">
                <div className="tag">Klique service</div>
                <h3>{activeService.title}</h3>
                <p>{activeService.desc}</p>
                <a
                  href={activeService.href}
                  onClick={(e) => onLinkClick && onLinkClick(e, activeService.href)}
                  className="panel-link"
                >
                  Explore {activeService.title} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className={`stats-row ${servicesVisible ? 'animate-in' : ''}`}>
        <div className="stat" style={{ transitionDelay: '0.2s' }}>
          <div className="num">100</div>
          <div className="label">Successful projects</div>
        </div>
        <div className="stat" style={{ transitionDelay: '0.35s' }}>
          <div className="num">500+</div>
          <div className="label">Satisfied customers</div>
        </div>
        <div className="stat" style={{ transitionDelay: '0.5s' }}>
          <div className="num">20+</div>
          <div className="label">Connected cities</div>
        </div>
        <div className="stat" style={{ transitionDelay: '0.65s' }}>
          <div className="num">25</div>
          <div className="label">Awards achieved</div>
        </div>
      </div>
    </section>
  );
}

export default ManagedServices;
