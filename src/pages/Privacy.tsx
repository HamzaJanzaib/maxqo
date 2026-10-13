import React from 'react';
import { Link } from 'react-router-dom';
import { PolicyLayout, PolicyH2 } from '../components/PolicyLayout';

export const Privacy: React.FC = () => (
  <PolicyLayout title="Privacy Policy" updated="13 October 2026">
    <p>
      Maxqo (“we”, “us”, “our”) respects your privacy. This policy explains how we collect, use, and
      protect personal information when you visit maxqo.co.uk or contact us about our digital agency
      services.
    </p>

    <PolicyH2>Who we are</PolicyH2>
    <p>
      Maxqo is a digital agency based in the United Kingdom. For privacy questions, email{' '}
      <a href="mailto:hello@maxqo.co.uk" className="text-teal-dark hover:underline">
        hello@maxqo.co.uk
      </a>
      .
    </p>

    <PolicyH2>Information we collect</PolicyH2>
    <p>We may collect:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Contact details you submit (name, email, phone, company)</li>
      <li>Project information you share in enquiry forms</li>
      <li>Technical data such as IP address, browser type, and pages visited (via analytics or hosting logs)</li>
      <li>Communication content if you email or message us</li>
    </ul>

    <PolicyH2>How we use your information</PolicyH2>
    <p>We use personal data to:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Respond to enquiries and provide proposals</li>
      <li>Deliver contracted services</li>
      <li>Improve our website and understand demand for services</li>
      <li>Comply with legal obligations</li>
    </ul>
    <p>
      We do not sell your personal data. We process enquiry data on the basis of legitimate interests
      and/or steps taken at your request before entering a contract.
    </p>

    <PolicyH2>Sharing</PolicyH2>
    <p>
      We may share data with trusted processors (for example hosting, email, or analytics providers)
      who act on our instructions. We may disclose information if required by law or to protect our
      rights.
    </p>

    <PolicyH2>Retention</PolicyH2>
    <p>
      Enquiry data is kept only as long as needed to handle your request and for reasonable business
      records (typically up to 24 months unless a longer period is required for an active project or
      legal reason).
    </p>

    <PolicyH2>Your rights</PolicyH2>
    <p>
      Under UK GDPR you may have rights to access, correct, delete, restrict, or object to certain
      processing, and to data portability. Contact us at hello@maxqo.co.uk to exercise these rights.
      You may also complain to the Information Commissioner’s Office (ICO).
    </p>

    <PolicyH2>Cookies</PolicyH2>
    <p>
      Our use of cookies is described in our{' '}
      <Link to="/cookies" className="text-teal-dark hover:underline">
        Cookie Policy
      </Link>
      .
    </p>

    <PolicyH2>Changes</PolicyH2>
    <p>
      We may update this policy from time to time. The “Last updated” date at the top will change when
      we do. Continued use of the site after changes constitutes acceptance of the revised policy.
    </p>
  </PolicyLayout>
);
