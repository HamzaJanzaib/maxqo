import type { VercelRequest, VercelResponse } from '@vercel/node';
import {
  sendContactEnquiryEmails,
  type ContactEnquiryPayload,
} from '../server/email/mailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const body = (req.body || {}) as ContactEnquiryPayload;

    if (!body?.name?.trim() || !body?.email?.trim() || !body?.details?.trim()) {
      return res.status(400).json({
        ok: false,
        error: 'Name, email, and project details are required.',
      });
    }

    if (!Array.isArray(body.services) || body.services.length === 0) {
      return res.status(400).json({
        ok: false,
        error: 'Select at least one service.',
      });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
    if (!emailOk) {
      return res.status(400).json({ ok: false, error: 'Enter a valid email address.' });
    }

    const payload: ContactEnquiryPayload = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() || '',
      jobTitle: body.jobTitle?.trim() || '',
      phone: body.phone?.trim() || '',
      website: body.website?.trim() || '',
      services: body.services,
      projectType: body.projectType?.trim() || '',
      budget: body.budget?.trim() || '',
      timeline: body.timeline?.trim() || '',
      startPreference: body.startPreference?.trim() || '',
      teamSize: body.teamSize?.trim() || '',
      source: body.source?.trim() || '',
      goals: body.goals?.trim() || '',
      challenges: body.challenges?.trim() || '',
      inspiration: body.inspiration?.trim() || '',
      details: body.details.trim(),
      preferredContact: body.preferredContact?.trim() || 'Email',
      bestTime: body.bestTime?.trim() || '',
      newsletter: Boolean(body.newsletter),
      nda: Boolean(body.nda),
    };

    const result = await sendContactEnquiryEmails(payload);

    return res.status(200).json({
      ok: true,
      message: 'Enquiry sent successfully.',
      deliveredTo: result.adminEmail,
    });
  } catch (error) {
    console.error('[api/contact]', error);
    const message =
      error instanceof Error ? error.message : 'Failed to send enquiry email.';
    return res.status(500).json({ ok: false, error: message });
  }
}
