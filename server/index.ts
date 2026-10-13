import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import {
  sendContactEnquiryEmails,
  type ContactEnquiryPayload,
} from './email/mailer';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'maxqo-api' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const body = req.body as ContactEnquiryPayload;

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

    return res.json({
      ok: true,
      message: 'Enquiry sent successfully.',
      deliveredTo: result.adminEmail,
    });
  } catch (error) {
    console.error('[contact]', error);
    const message =
      error instanceof Error ? error.message : 'Failed to send enquiry email.';
    return res.status(500).json({ ok: false, error: message });
  }
});

app.listen(port, () => {
  console.log(`Maxqo API listening on http://localhost:${port}`);
});
