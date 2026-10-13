import type { ContactFormData } from '../types';

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') || '';

export async function submitContactEnquiry(form: ContactFormData) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });

  const data = (await response.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
    message?: string;
  };

  if (!response.ok || !data.ok) {
    throw new Error(data.error || 'Failed to send your enquiry. Please try again.');
  }

  return data;
}
