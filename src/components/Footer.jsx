import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const productLinks = [
  { name: 'Admin Dashboard', path: '/features/admin' },
  { name: 'Caseworker Portal', path: '/features/caseworker' },
  { name: 'Client Portal', path: '/features/client-portal' },
  { name: 'Sponsor/Business Portal', path: '/features/client' },
];

const companyLinks = [
  { name: 'About Us', path: '/resources' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Pricing', path: '/pricing' },
];

const email = 'support@imcamhub.com';
const phone = '+44 (0) 121 778 2400';
const address = 'Unit 2, 1204B Stratford Road, Hall Green, Birmingham. B28 8HN, England';

export default function Footer() {
  return (
    <footer className="bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />

      <div className="section-padding">
        <div className="container-app">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10 lg:mb-14">
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex mb-4 transition-opacity hover:opacity-80" aria-label="ImCam Hub home">
                <img
                  src="/assets/imcam%20hub%20logo%201%20transparent.png"
                  alt="ImCam Hub"
                  className="h-12 sm:h-14 w-auto"
                />
              </Link>
              <p className="text-white/80 text-sm tracking-wide leading-relaxed mb-5 max-w-[280px]">
                Structured case management. Powered by smart automation.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Product</h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${email}`} className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group">
                    <Mail size={20} className="shrink-0 mt-0.5 text-white/40 group-hover:text-blue transition-colors" />
                    <span>{email}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:${phone.replace(/[^+0-9]/g, '')}`} className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group">
                    <Phone size={20} className="shrink-0 mt-0.5 text-white/40 group-hover:text-blue transition-colors" />
                    <span>T: {phone}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-white/50">
                    <MapPin size={20} className="shrink-0 mt-0.5 text-white/40" />
                    <span style={{ whiteSpace: 'pre-line' }}>{address}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-sm">&copy; {new Date().getFullYear()} Elite PiC Ltd. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-5">
              <Link to="/resources" className="text-white/35 hover:text-white/70 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/35 hover:text-white/70 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}