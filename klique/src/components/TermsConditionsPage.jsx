import LegalPageLayout from './LegalPageLayout';

function TermsConditionsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="August 2026"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this website, you agree to be bound by these
        Terms & Conditions. If you do not agree, please do not use this
        website.
      </p>

      <h2>2. About Klique Software Solutions</h2>
      <p>
        Klique Software Solutions is a software services company based in
        Ajmer, Rajasthan, India, offering Salesforce consulting, web and
        app development, data analytics, SEO, social media management, and
        PDF remediation services.
      </p>

      <h2>3. Use of This Website</h2>
      <p>You agree to use this website only for lawful purposes. You may not:</p>
      <ul>
        <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
        <li>Copy, scrape, or reproduce website content for commercial redistribution</li>
        <li>Reverse engineer, decompile, or interfere with the website's functionality</li>
        <li>Use the website to transmit harmful code or unlawful content</li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        All content on this website — including text, graphics, logos, and
        the Klique Software Solutions name and branding — is the property
        of Klique Software Solutions or its licensors, and is protected by
        applicable intellectual property laws. You may not use our name or
        logo without prior written permission.
      </p>

      <h2>5. Our Services</h2>
      <p>
        The information on this website about our services (Salesforce,
        web/app development, data analytics, SEO, social media management,
        PDF remediation) is provided for general informational purposes.
        It does not constitute a binding offer. Any actual engagement for
        services is governed by a separate, signed agreement or statement
        of work between Klique Software Solutions and the client.
      </p>

      <h2>6. Job Applications</h2>
      <p>
        By submitting an application through our Careers pages, you confirm
        that the information and documents you provide (including your
        resume) are accurate and truthful. Submitting an application does
        not guarantee an interview, offer, or response.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may link to third-party websites (for example, our
        social media profiles). We are not responsible for the content,
        accuracy, or practices of any third-party site.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        This website and its content are provided "as is" without
        warranties of any kind. To the fullest extent permitted by law,
        Klique Software Solutions is not liable for any indirect,
        incidental, or consequential damages arising from your use of this
        website.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may revise these Terms & Conditions at any time. Continued use
        of the website after changes are posted constitutes acceptance of
        the updated terms.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms & Conditions are governed by the laws of India, and any
        disputes will be subject to the exclusive jurisdiction of the
        courts in Ajmer, Rajasthan.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        Questions about these Terms & Conditions can be sent to{' '}
        <a href="mailto:hr@kliquesoftwaresolutions.com">
          hr@kliquesoftwaresolutions.com
        </a>{' '}
        or via our <a href="/contact-us">contact page</a>.
      </p>
    </LegalPageLayout>
  );
}

export default TermsConditionsPage;
