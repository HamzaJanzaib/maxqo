export interface ContactEnquiryPayload {
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  website?: string;
  services: string[];
  projectType?: string;
  budget?: string;
  timeline?: string;
  startPreference?: string;
  teamSize?: string;
  source?: string;
  goals?: string;
  challenges?: string;
  inspiration?: string;
  details: string;
  preferredContact?: string;
  bestTime?: string;
  newsletter?: boolean;
  nda?: boolean;
}

const SERVICE_META: Record<
  string,
  { label: string; color: string; focus: string; checklist: string[] }
> = {
  web: {
    label: 'Web Development',
    color: '#00C2A8',
    focus: 'Website / web platform enquiry',
    checklist: [
      'Review sitemap & conversion goals',
      'Check CMS / hosting preferences',
      'Confirm redesign vs new build',
    ],
  },
  software: {
    label: 'Custom Software',
    color: '#1F6FEB',
    focus: 'Custom software / product enquiry',
    checklist: [
      'Map workflows & integrations',
      'Clarify MVP vs full product scope',
      'Identify users & access roles',
    ],
  },
  marketing: {
    label: 'Digital Marketing',
    color: '#E85D04',
    focus: 'Marketing / growth enquiry',
    checklist: [
      'Review channels & tracking setup',
      'Align campaign goals & budget',
      'Check existing brand assets',
    ],
  },
  design: {
    label: 'Brand & UI Design',
    color: '#7C3AED',
    focus: 'Brand / UI design enquiry',
    checklist: [
      'Gather brand references',
      'Clarify deliverables (logo, UI, system)',
      'Confirm product surfaces to design',
    ],
  },
  other: {
    label: 'Other / Not sure',
    color: '#6B7280',
    focus: 'General project enquiry',
    checklist: [
      'Clarify primary goal on discovery call',
      'Recommend best-fit service mix',
      'Outline a sensible first phase',
    ],
  },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function row(label: string, value?: string | boolean | string[]) {
  if (value === undefined || value === null || value === '') return '';
  const display = Array.isArray(value)
    ? value.join(', ')
    : typeof value === 'boolean'
      ? value
        ? 'Yes'
        : 'No'
      : value;
  if (!display) return '';
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #EBE7DF;color:#6B7280;font-size:13px;width:34%;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #EBE7DF;color:#0B0F14;font-size:14px;vertical-align:top;">${escapeHtml(String(display))}</td>
    </tr>
  `;
}

function resolveServices(services: string[]) {
  const keys = services.length ? services : ['other'];
  return keys.map((key) => SERVICE_META[key] ?? { ...SERVICE_META.other, label: key });
}

export function buildAdminEmail(payload: ContactEnquiryPayload) {
  const services = resolveServices(payload.services || []);
  const primary = services[0];
  const serviceLabels = services.map((s) => s.label).join(' · ');
  const accent = primary.color;
  const checklist = Array.from(new Set(services.flatMap((s) => s.checklist)));

  const subject = `[Maxqo] ${primary.focus} — ${payload.name}${payload.company ? ` (${payload.company})` : ''}`;

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
<body style="margin:0;padding:0;background:#F7F5F0;font-family:Manrope,Segoe UI,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F5F0;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:640px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #D6D1C7;">
          <tr>
            <td style="background:#0B0F14;padding:24px 28px;">
              <p style="margin:0 0 6px;color:#00C2A8;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">New website enquiry</p>
              <h1 style="margin:0;color:#ffffff;font-size:22px;line-height:1.3;">${escapeHtml(primary.focus)}</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Services: ${escapeHtml(serviceLabels)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:22px 28px 8px;">
              <p style="margin:0 0 14px;padding:12px 14px;border-left:3px solid ${accent};background:#F7F5F0;color:#0B0F14;font-size:14px;line-height:1.5;">
                <strong>${escapeHtml(payload.name)}</strong> submitted a project enquiry via <a href="https://www.maxqo.co.uk" style="color:#009E8A;">www.maxqo.co.uk</a>.
              </p>
              <h2 style="margin:0 0 10px;font-size:15px;color:#0B0F14;">Contact details</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #EBE7DF;border-radius:12px;overflow:hidden;margin-bottom:18px;">
                ${row('Name', payload.name)}
                ${row('Email', payload.email)}
                ${row('Phone', payload.phone)}
                ${row('Company', payload.company)}
                ${row('Job title', payload.jobTitle)}
                ${row('Website', payload.website)}
                ${row('Preferred contact', payload.preferredContact)}
                ${row('Best time', payload.bestTime)}
              </table>

              <h2 style="margin:0 0 10px;font-size:15px;color:#0B0F14;">Project scope</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #EBE7DF;border-radius:12px;overflow:hidden;margin-bottom:18px;">
                ${row('Services', serviceLabels)}
                ${row('Project type', payload.projectType)}
                ${row('Budget', payload.budget)}
                ${row('Timeline', payload.timeline)}
                ${row('Preferred start', payload.startPreference)}
                ${row('Team size', payload.teamSize)}
                ${row('How they found us', payload.source)}
                ${row('NDA requested', payload.nda)}
                ${row('Newsletter opt-in', payload.newsletter)}
              </table>

              <h2 style="margin:0 0 10px;font-size:15px;color:#0B0F14;">Brief</h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border:1px solid #EBE7DF;border-radius:12px;overflow:hidden;margin-bottom:18px;">
                ${row('Goals', payload.goals)}
                ${row('Challenges', payload.challenges)}
                ${row('Inspiration', payload.inspiration)}
                ${row('Full brief', payload.details)}
              </table>

              <h2 style="margin:0 0 10px;font-size:15px;color:#0B0F14;">Suggested next steps</h2>
              <ul style="margin:0 0 8px;padding-left:18px;color:#374151;font-size:14px;line-height:1.6;">
                ${checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
              </ul>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 24px;">
              <a href="mailto:${escapeHtml(payload.email)}?subject=${encodeURIComponent(`Re: Your Maxqo enquiry`)}"
                 style="display:inline-block;background:#00C2A8;color:#0B0F14;text-decoration:none;font-weight:700;font-size:14px;padding:12px 18px;border-radius:10px;">
                Reply to ${escapeHtml(payload.name.split(' ')[0] || 'client')}
              </a>
            </td>
          </tr>
          <tr>
            <td style="background:#F7F5F0;padding:14px 28px;color:#6B7280;font-size:12px;border-top:1px solid #EBE7DF;">
              Maxqo Private Limited · Bridgend, UK · Sent from the website contact form
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = [
    `New Maxqo enquiry: ${primary.focus}`,
    `Services: ${serviceLabels}`,
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : '',
    payload.company ? `Company: ${payload.company}` : '',
    payload.projectType ? `Project type: ${payload.projectType}` : '',
    payload.budget ? `Budget: ${payload.budget}` : '',
    payload.timeline ? `Timeline: ${payload.timeline}` : '',
    '',
    `Goals: ${payload.goals || '-'}`,
    `Details: ${payload.details}`,
  ]
    .filter(Boolean)
    .join('\n');

  return { subject, html, text };
}

export function buildClientConfirmationEmail(payload: ContactEnquiryPayload) {
  const services = resolveServices(payload.services || []);
  const serviceLabels = services.map((s) => s.label).join(', ');
  const firstName = payload.name.split(' ')[0] || payload.name;

  const subject = `We received your enquiry — Maxqo`;

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#F7F5F0;font-family:Manrope,Segoe UI,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F7F5F0;padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #D6D1C7;">
          <tr>
            <td style="background:#0B0F14;padding:24px 28px;">
              <p style="margin:0;color:#00C2A8;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Maxqo</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;">Thanks, ${escapeHtml(firstName)}.</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;color:#374151;font-size:15px;line-height:1.6;">
              <p style="margin:0 0 14px;">We’ve received your project enquiry${serviceLabels ? ` about <strong>${escapeHtml(serviceLabels)}</strong>` : ''}.</p>
              <p style="margin:0 0 14px;">Our team will review your brief and reply within <strong>one business day</strong>.</p>
              <p style="margin:0;padding:14px;background:#F7F5F0;border-radius:12px;border:1px solid #EBE7DF;">
                If anything is urgent, reply to this email or call <a href="tel:+447378480254" style="color:#009E8A;">+44 7378 480254</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#F7F5F0;padding:14px 28px;color:#6B7280;font-size:12px;border-top:1px solid #EBE7DF;">
              Maxqo Private Limited · C10 30 Marigold Court, Bridgend, CF31 2NB
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  const text = `Thanks ${firstName},\n\nWe've received your Maxqo enquiry${serviceLabels ? ` about ${serviceLabels}` : ''}. We'll reply within one business day.\n\nMaxqo Private Limited`;

  return { subject, html, text };
}
