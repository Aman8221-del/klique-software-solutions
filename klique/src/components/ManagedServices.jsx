import { useState } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import salesCloudImg from '../assets/Managed Services/sales-cloud.jpg';
import serviceCloudImg from '../assets/Managed Services/service-cloud.jpg';
import fieldServiceImg from '../assets/Managed Services/field-service.jpg';
import financialForceImg from '../assets/Managed Services/financial-force.jpg';
import cpqImg from '../assets/Managed Services/cpq.jpg';
import industrialCloudImg from '../assets/Managed Services/industrial-cloud.jpg';
import marketingCloudImg from '../assets/Managed Services/marketing-cloud.jpg';

const SERVICES_DATA = [
  {
    title: "Sales cloud",
    desc: "With Sales cloud, you can streamline processes reduce duplication, set priorities, access information, and improve communication on the go. Here you can get a consolidated view of history and status, generate workflows and increase efficiency. With the use of the sales cloud, you can make speedier and high-quality business decisions to boost sales with the use of dashboards analytics, and forecasting tools.",
    img: salesCloudImg
  },
  {
    title: "Service cloud",
    desc: "It aids in responding to customer queries more intelligently and quickly. With Service cloud, you can achieve increased customer engagements, organize and prioritize issues and reply to client tickets more quickly. Thus accelerating the case resolution.",
    img: serviceCloudImg
  },
  {
    title: "Field service lightning",
    desc: "It is now known as Salesforce field service, which provides services that extend beyond your workplace. Field service is part of an organization that employs a worker to perform services for a customer. Field service often becomes the only way for direct communication between customers and the company. Basically, Field service lightning management coordinates resources between an organization and the customer to provide in-person service.",
    img: fieldServiceImg
  },
  {
    title: "Financial force",
    desc: "known as Financial Cloud, customize your services to be perfectly tailored to your customer’s financial needs and goals. With financial force, you can reach your potential by delivering quality insurance, wealth management, and banking services. You can connect with customers in an improved way by integrating the sales service and marketing units.",
    img: financialForceImg
  },
  {
    title: "CPQ",
    desc: "CPQ Salesforce, or Configure, Price, Quote Software by Salesforce is a sales tool for companies to provide accurate pricing with any given product configuration scenario. CPQ applications take into account optional features, customizations, quantities, and discounts, allowing sales reps to quote prices quickly and accurately. Salesforce CPQ gives your sales team easy to use software, available on any device due to it’s cloud based platform. Hosted within the Sales Cloud platform giving you a direct link with your CRM to make the most impactful sales decisions.",
    img: cpqImg
  },
  {
    title: "Industrial cloud",
    desc: "An Industrial cloud is an application designed for connecting machines, and systems by integrating industrial components. It provides solutions for analyzing various industries’ unique needs and provides solutions and applications designed for any specific industry.",
    img: industrialCloudImg
  },
  {
    title: "Marketing cloud",
    desc: "With this, you can store and collect data from different marketing channels for a consolidated view. Here you can optimize data, and engage with relevant information to establish a strong client relationship. With marketing cloud, you can collect useable, reliable, and insightful data,",
    img: marketingCloudImg
  }
];

function ManagedServices() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = SERVICES_DATA[activeIdx];

  const [servicesRef, servicesVisible] = useRevealOnScroll();

  return (
    <section id="services" ref={servicesRef} className="services-section w-full">
      {/* Heading Block */}
      <div className={`heading-block ${servicesVisible ? 'animate-in' : ''}`}>
        <div className="eyebrow">Klique platform</div>
        <h2>Managed services</h2>
      </div>

      {/* Services Grid wrapped in animated card-frame */}
      <div className={`card-frame ${servicesVisible ? 'animate-in' : ''}`}>
        <div className="services-grid">
          <div className="tabs">
            {SERVICES_DATA.map((service, idx) => (
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
                <div className="tag">Klique platform</div>
                <h3>{activeService.title}</h3>
                <p>{activeService.desc}</p>
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
