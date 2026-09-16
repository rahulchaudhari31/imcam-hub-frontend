import { useEffect } from 'react';
import { fetchSeoSettings } from '../services/cmsService';

function readMeta() {
  let meta = document.querySelector('meta[name="description"]');
  const prevContent = meta?.getAttribute('content') || '';
  return { meta, prevContent };
}

function applyMeta(title, description) {
  document.title = title ? `${title} | ImCam Hub` : 'ImCam Hub';
  let meta = document.querySelector('meta[name="description"]');
  if (description) {
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }
}

function restoreMeta(state) {
  document.title = state.title;
  if (state.description && state.meta) {
    state.meta.setAttribute('content', state.prevContent);
  }
}

export default function usePageMeta(title, description, pageKey) {
  useEffect(() => {
    const prev = {
      title: document.title,
      meta: null,
      prevContent: '',
      description: !!description,
    };
    const saved = readMeta();
    prev.meta = saved.meta;
    prev.prevContent = saved.prevContent;

    applyMeta(title, description);

    if (!pageKey) {
      return;
    }

    let cancelled = false;

    const applyCms = async () => {
      const settings = await fetchSeoSettings(pageKey);
      if (!cancelled && settings?.page_title) {
        applyMeta(
          settings.page_title || title,
          settings.meta_description || description
        );
      }
    };

    applyCms();

    return () => {
      cancelled = true;
      restoreMeta(prev);
    };
  }, [title, description, pageKey]);
}