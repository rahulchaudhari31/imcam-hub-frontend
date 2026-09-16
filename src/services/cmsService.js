const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function resolveCmsAsset(url) {
  if (!url) return '';
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:')) return url;
  if (url.startsWith('/uploads')) return `${API_URL}${url}`;
  return url;
}

async function cmsFetch(url) {
  try {
    const res = await fetch(`${API_URL}${url}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch {
    return null;
  }
}

export async function fetchHomeSections() {
  return cmsFetch('/api/cms/home');
}

export async function fetchFaqItems(pageKey) {
  const query = pageKey
    ? `?active=true&page_key=${encodeURIComponent(pageKey)}`
    : '?active=true';
  return cmsFetch(`/api/cms/faqs${query}`);
}

export async function fetchTestimonials() {
  return cmsFetch('/api/cms/testimonials?active=true');
}

export async function fetchContactInfo() {
  return cmsFetch('/api/cms/contact');
}

export async function fetchSocialLinks() {
  return cmsFetch('/api/cms/social-links');
}

export async function fetchAboutContent() {
  return cmsFetch('/api/cms/about');
}

export async function fetchServices() {
  return cmsFetch('/api/cms/services?active=true');
}

export async function fetchSeoSettings(pageKey) {
  return cmsFetch(`/api/cms/seo/${pageKey}`);
}

export async function fetchFeaturePage(pageKey) {
  return cmsFetch(`/api/cms/features/page/${pageKey}`);
}

export async function fetchPricing() {
  return cmsFetch('/api/cms/pricing?active=true');
}

export async function fetchBookDemoConfig() {
  return cmsFetch('/api/cms/book-demo');
}

export async function fetchSolutions() {
  return cmsFetch('/api/cms/solutions?active=true');
}

export async function fetchNavigation() {
  return cmsFetch('/api/cms/navigation?active=true');
}

export async function fetchFooterLinks() {
  return cmsFetch('/api/cms/footer-links?active=true');
}
