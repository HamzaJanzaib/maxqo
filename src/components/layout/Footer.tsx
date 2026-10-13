import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Logo } from '../Logo';
import { services } from '../../data/services';
import { company } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white/70 pt-10 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10"
        >
          <div className="col-span-2 md:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              {company.legalName} — digital agency for web, software, marketing, and design.
            </p>
            <div className="mt-4 space-y-1.5 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="block text-teal hover:text-white transition-colors"
              >
                {company.email}
              </a>
              <a
                href={company.phoneHref}
                className="block text-teal hover:text-white transition-colors"
              >
                {company.phoneDisplay}
              </a>
              <p className="text-white/55 leading-relaxed pt-1">
                {company.address.line1}
                <br />
                {company.address.line2}, {company.address.postcode}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved. Director:{' '}
            {company.director}.
          </p>
          <p>Bridgend, UK · Web · Software · Marketing · Design</p>
        </div>
      </div>
    </footer>
  );
};
