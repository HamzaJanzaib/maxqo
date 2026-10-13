import React from 'react';
import { Link } from 'react-router-dom';
import { PolicyLayout, PolicyH2 } from '../components/PolicyLayout';

export const Terms: React.FC = () => (
  <PolicyLayout title="Terms of Service" updated="13 October 2026">
    <p>
      These Terms of Service (“Terms”) govern your use of the Maxqo website at maxqo.co.uk and general
      engagement with Maxqo for digital agency services. By using the site, you agree to these Terms.
    </p>

    <PolicyH2>About Maxqo</PolicyH2>
    <p>
      Maxqo provides web development, custom software, digital marketing, and brand &amp; UI design
      services. Contact:{' '}
      <a href="mailto:hello@maxqo.co.uk" className="text-teal-dark hover:underline">
        hello@maxqo.co.uk
      </a>
      . United Kingdom.
    </p>

    <PolicyH2>Website use</PolicyH2>
    <p>
      Content on this website is for general information. We aim to keep it accurate but do not
      warrant that it is complete or error-free. You must not misuse the site (including attempting
      unauthorised access, scraping at scale, or introducing malware).
    </p>

    <PolicyH2>Enquiries and proposals</PolicyH2>
    <p>
      Submitting a contact form does not create a binding contract. Project work is governed by a
      separate proposal, statement of work, or agreement that we issue and you accept. Until then,
      estimates are indicative only.
    </p>

    <PolicyH2>Intellectual property</PolicyH2>
    <p>
      Website design, copy, logos, and materials on maxqo.co.uk are owned by Maxqo or our licensors.
      You may not copy or reuse them without permission, except for fair personal viewing. Client
      project IP is handled in the relevant project agreement.
    </p>

    <PolicyH2>Third-party links</PolicyH2>
    <p>
      The site may link to third-party websites. We are not responsible for their content or
      practices.
    </p>

    <PolicyH2>Limitation of liability</PolicyH2>
    <p>
      To the fullest extent permitted by law, Maxqo is not liable for indirect or consequential loss
      arising from use of this website. Nothing in these Terms excludes liability that cannot be
      excluded under UK law (including for death or personal injury caused by negligence, or fraud).
    </p>

    <PolicyH2>Privacy</PolicyH2>
    <p>
      How we handle personal data is set out in our{' '}
      <Link to="/privacy" className="text-teal-dark hover:underline">
        Privacy Policy
      </Link>
      .
    </p>

    <PolicyH2>Governing law</PolicyH2>
    <p>
      These Terms are governed by the laws of England and Wales. Courts of England and Wales have
      exclusive jurisdiction, except where mandatory consumer protections require otherwise.
    </p>

    <PolicyH2>Changes</PolicyH2>
    <p>
      We may revise these Terms periodically. The updated version will be posted on this page with a
      new “Last updated” date.
    </p>
  </PolicyLayout>
);
