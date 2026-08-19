import { usePageReveal } from '../hooks/useRevealOnScroll';

function LegalPageLayout({ eyebrow, title, updated, children }) {
  usePageReveal('.legal-page .reveal');

  return (
    <div className="legal-page w-full">
      <div className="legal-banner">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>Last updated: {updated}</p>
      </div>

      <div className="legal-content reveal">
        <div className="legal-disclaimer">
          <strong>Template notice:</strong> this is a general, plain-language
          policy provided as a starting point for Klique Software Solutions.
          It is not legal advice. Please have it reviewed by a qualified
          legal professional in your jurisdiction before relying on it as
          your official policy.
        </div>

        {children}
      </div>
    </div>
  );
}

export default LegalPageLayout;
