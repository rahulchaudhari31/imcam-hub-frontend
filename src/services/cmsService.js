const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

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

export async function fetchFaqItems() {
  return cmsFetch('/api/cms/faqs?active=true');
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
