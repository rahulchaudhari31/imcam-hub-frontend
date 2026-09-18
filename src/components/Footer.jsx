import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { fetchContactInfo, fetchSocialLinks, fetchFooterLinks } from '../services/cmsService';

const productLinks = [
  { name: 'Admin Dashboard', path: '/features/admin' },
  { name: 'Caseworker Portal', path: '/features/caseworker' },
  { name: 'Client Portal', path: '/features/candidate' },
  { name: 'Sponsor/Business Portal', path: '/features/client' },
];

const companyLinks = [
  { name: 'About Us', path: '/resources' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Pricing', path: '/pricing' },
];

const defaultSocialLinks = [];

const socialLabels = {
  twitter: 'X',
  linkedin: 'in',
  github: 'GH',
  facebook: 'fb',
  instagram: 'ig',
  youtube: 'yt',
  tiktok: 'tt',
};

export default function Footer() {
  const [contactInfo, setContactInfo] = useState(null);
  const [socialLinksData, setSocialLinksData] = useState(null);
  const [cmsFooterLinks, setCmsFooterLinks] = useState(null);

  useEffect(() => {
    const load = async () => {
      const [contact, socials, footerLinks] = await Promise.all([
        fetchContactInfo(),
        fetchSocialLinks(),
        fetchFooterLinks(),
      ]);
      if (footerLinks && footerLinks.length > 0) {
        const grouped = { product: [], company: [] };
        for (const link of footerLinks) {
          const group = grouped[link.group_key];
          if (group) {
            group.push({
              name: link.label,
              path: link.url || '/',
              order: link.display_order || 0,
            });
          }
        }
        grouped.product = grouped.product.sort(
          (a, b) => a.order - b.order
        );
        grouped.company = grouped.company.sort(
          (a, b) => a.order - b.order
        );
        if (grouped.product.length || grouped.company.length) {
          setCmsFooterLinks(grouped);
        }
      }
      if (contact) setContactInfo(contact);
      if (socials && socials.length > 0) {
        setSocialLinksData(socials.filter((s) => s.is_active !== false));
      }
    };
    load();
  }, []);

  const email = contactInfo?.email || 'hello@incamhub.com';
  const phone = contactInfo?.phone || '+44 20 7946 0958';

  const displaySocialLinks = socialLinksData
    ? socialLinksData
        .filter((s) => s.platform !== 'twitter' && s.platform !== 'github' && s.platform !== 'linkedin')
        .map((s) => ({
          name: s.platform,
          label: socialLabels[s.platform] || s.platform.slice(0, 2),
          href: s.url,
          platform: s.platform,
        }))
    : defaultSocialLinks;

  const displayProductLinks = cmsFooterLinks?.product?.length
    ? cmsFooterLinks.product
    : productLinks;

  const displayCompanyLinks = cmsFooterLinks?.company?.length
    ? cmsFooterLinks.company
    : companyLinks;

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
              {displaySocialLinks.length > 0 && (
                <div className="flex items-center gap-3">
                  {displaySocialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-blue/20 flex items-center justify-center transition-colors group"
                    >
                      <span className="text-white/50 group-hover:text-blue-light transition-colors text-xs font-bold">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Product</h4>
              <ul className="space-y-2.5">
                {displayProductLinks.map((link) => (
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
                {displayCompanyLinks.map((link) => (
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
                    <span>{phone}</span>
                  </a>
                </li>
                {/* Address hidden temporarily */}
                {/* <li>
                  <div className="flex items-start gap-3 text-sm text-white/50">
                    <MapPin size={20} className="shrink-0 mt-0.5 text-white/40" />
                    <span style={{ whiteSpace: 'pre-line' }}>{address}</span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-sm">&copy; {new Date().getFullYear()} ImCam Hub. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-5">
              <Link to="/resources" className="text-white/35 hover:text-white/70 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/resources" className="text-white/35 hover:text-white/70 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
