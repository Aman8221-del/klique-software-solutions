import LegalPageLayout from './LegalPageLayout';

function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      updated="August 2026"
    >
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how Klique Software Solutions
        ("Klique," "we," "us," or "our") collects, uses, and protects
        information when you visit our website or interact with us through
        our contact form, careers pages, or other services described here.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect information in the following ways:</p>
      <ul>
        <li>
          <strong>Contact form:</strong> when you submit our contact form, we
          collect your name, email address, subject, and message.
        </li>
        <li>
          <strong>Job applications:</strong> when you apply for a role
          through our Careers pages, we collect your name, email, phone
          number, the position you're applying for, your resume/CV file, and
          any message you include.
        </li>
        <li>
          <strong>Automatically collected data:</strong> like most websites,
          our hosting and infrastructure providers may log standard
          technical information such as IP address, browser type, device
          type, and pages visited, for security and diagnostic purposes.
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To respond to inquiries submitted through our contact form</li>
        <li>To review and process job applications</li>
        <li>To operate, maintain, and improve our website</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>4. Third-Party Services</h2>
      <p>
        Our Contact page embeds a Google Maps view to show our office
        location. When that page loads, Google may set its own cookies or
        collect data according to its own privacy policy, independent of
        this one. We also use third-party hosting and infrastructure
        providers to run this website and store submitted data securely.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain contact and application data for as long as reasonably
        necessary to respond to your inquiry or process your application,
        or as required by applicable law, after which it is deleted or
        anonymized.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        Depending on where you're located, you may have the right to
        request access to, correction of, or deletion of your personal
        data, or to object to certain processing. To make such a request,
        contact us using the details below.
      </p>

      <h2>7. Cookies</h2>
      <p>
        For details on how cookies are used on this site, see our{' '}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect
        the information you share with us. No method of transmission or
        storage over the internet is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our website is not directed at children, and we do not knowingly
        collect personal information from anyone under the age of 16.
      </p>

      <h2>10. International Visitors</h2>
      <p>
        Klique Software Solutions is based in Ajmer, Rajasthan, India.
        If you contact us from outside India, your information will be
        processed and stored in India, and you consent to that transfer by
        using our website and services.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will
        be posted on this page with an updated "Last updated" date.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For any questions about this Privacy Policy or your data, reach us
        at{' '}
        <a href="mailto:hr@kliquesoftwaresolutions.com">
          hr@kliquesoftwaresolutions.com
        </a>{' '}
        or through our <a href="/contact-us">contact page</a>. Our
        registered address is 202, Pragati Nagar, Kotra, 305004, Ajmer,
        Rajasthan, India.
      </p>
    </LegalPageLayout>
  );
}

export default PrivacyPolicyPage;
