import LegalPageLayout from './LegalPageLayout';

function CookiePolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Cookie Policy"
      updated="August 2026"
    >
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device by your browser
        when you visit a website. They're commonly used to remember
        preferences, keep you signed in, or gather analytics.
      </p>

      <h2>2. Cookies We Use</h2>
      <p>
        At this time, Klique Software Solutions does not set any first-party
        tracking, advertising, or analytics cookies on this website. We
        don't run analytics scripts or ad-tracking pixels here. If that
        changes in the future — for example, if we add analytics to better
        understand site usage — we'll update this policy to reflect it.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Our <a href="/contact-us">Contact page</a> embeds a Google Maps view
        to show our office location. When that specific page is loaded,
        Google may set its own cookies as part of running the map, governed
        by Google's own privacy and cookie policies — not by us.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings.
        Most browsers let you block cookies entirely, block third-party
        cookies only, or clear cookies already stored. Since we don't set
        first-party cookies ourselves, adjusting these settings mainly
        affects the embedded Google Map on our Contact page, not the rest
        of the site.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We'll update this page if the cookies used on this website change,
        with a revised "Last updated" date at the top.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        Questions about this Cookie Policy can be sent to{' '}
        <a href="mailto:hr@kliquesoftwaresolutions.com">
          hr@kliquesoftwaresolutions.com
        </a>{' '}
        or via our <a href="/contact-us">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}

export default CookiePolicyPage;
