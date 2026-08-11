import { useState, useEffect, useRef } from 'react';
import newsOneImg from '../assets/latestnew/latestnewone.jpg';
import newsTwoImg from '../assets/latestnew/latestnewtwo.jpg';
import newsThreeImg from '../assets/latestnew/latestnewthree.jpg';
import newsFourImg from '../assets/latestnew/latestnewfour.jpg';

const ARTICLES_DATA = [
  {
    id: "cdp",
    title: "Customer Data Platform (formerly Salesforce CDP)",
    desc: "Customer Data Platform, formerly Salesforce CDP, unifies customer data across every touchpoint...",
    img: newsOneImg,
    category: "Salesforce"
  },
  {
    id: "einstein",
    title: "Einstein",
    desc: "Einstein makes it easier for service agents to find knowledge and resolve cases faster...",
    img: newsTwoImg,
    category: "AI"
  },
  {
    id: "commerce",
    title: "Commerce",
    desc: "Commerce Cloud enhancements include new and updated features for a seamless shopping experience...",
    img: newsThreeImg,
    category: "Commerce"
  },
  {
    id: "dev",
    title: "Development",
    desc: "Development, whether you're using Lightning components, Visualforce, Apex, or our latest tools...",
    img: newsFourImg,
    category: "Development"
  }
];

function LatestNews({ onLinkClick }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} id="news" className="news-section w-full">
      <div className="news-glow" />

      <div className="max-w-7xl mx-auto w-full px-6">
        <div className={`heading-block ${isVisible ? 'animate-in' : ''}`}>
          <div className="eyebrow">Latest news</div>
          <h2>Articles from resources and news</h2>
        </div>

        <div className="articles-grid">
          {ARTICLES_DATA.map((article, idx) => (
            <div
              key={article.title}
              className={`article-card ${isVisible ? 'animate-in' : ''}`}
              style={{ transitionDelay: `${0.1 + idx * 0.15}s` }}
            >
              <div className="article-img-wrap">
                <span className="category-badge">{article.category}</span>
                <img src={article.img} alt={article.title} />
              </div>
              <div className="article-body">
                <h3>{article.title}</h3>
                <p>{article.desc}</p>
                <a href={`/blog?post=${article.id}`} className="read-more" onClick={(e) => onLinkClick ? onLinkClick(e, `/blog?post=${article.id}`) : null}>
                  Read more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
