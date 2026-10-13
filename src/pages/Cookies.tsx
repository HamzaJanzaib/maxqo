import React from 'react';
import { Link } from 'react-router-dom';
import { PolicyLayout, PolicyH2 } from '../components/PolicyLayout';
import { company } from '../data/company';

export const Cookies: React.FC = () => (
  <PolicyLayout title="Cookie Policy" updated="13 October 2026">
    <p>
      This Cookie Policy explains how {company.legalName} uses cookies and similar technologies on maxqo.co.uk. For
      broader privacy practices, see our{' '}
      <Link to="/privacy" className="text-teal-dark hover:underline">
        Privacy Policy
      </Link>
      .
    </p>

    <PolicyH2>What are cookies?</PolicyH2>
    <p>
      Cookies are small text files stored on your device when you visit a website. They help sites
      function, remember preferences, and understand how visitors use the service.
    </p>

    <PolicyH2>How we use cookies</PolicyH2>
    <p>We may use:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>
        <strong className="text-ink">Essential cookies</strong> — required for basic site operation,
        security, and load balancing. These cannot be switched off in our systems.
      </li>
      <li>
        <strong className="text-ink">Analytics cookies</strong> — help us understand traffic and page
        performance (for example aggregated visit counts). Where used, we aim to configure them to
        minimise personal data.
      </li>
      <li>
        <strong className="text-ink">Preference cookies</strong> — remember choices such as dismissed
        banners, if we introduce them.
      </li>
    </ul>

    <PolicyH2>Third parties</PolicyH2>
    <p>
      Hosting and tooling providers (for example CDN or analytics vendors) may set their own cookies
      subject to their policies. We only enable non-essential cookies where appropriate for operating
      and improving the site.
    </p>

    <PolicyH2>Managing cookies</PolicyH2>
    <p>
      You can control cookies through your browser settings (block, delete, or alert you when cookies
      are set). Blocking essential cookies may affect site functionality. Guidance is available from
      your browser’s help pages and from{' '}
      <a
        href="https://www.allaboutcookies.org/"
        className="text-teal-dark hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        allaboutcookies.org
      </a>
      .
    </p>

    <PolicyH2>Contact</PolicyH2>
    <p>
      Questions about cookies? Email{' '}
      <a href={`mailto:${company.email}`} className="text-teal-dark hover:underline">
        {company.email}
      </a>{' '}
      or call{' '}
      <a href={company.phoneHref} className="text-teal-dark hover:underline">
        {company.phoneDisplay}
      </a>
      . Address: {company.addressFull}.
    </p>
  </PolicyLayout>
);
