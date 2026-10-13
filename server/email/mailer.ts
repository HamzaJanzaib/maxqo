import nodemailer from 'nodemailer';
import {
  buildAdminEmail,
  buildClientConfirmationEmail,
  type ContactEnquiryPayload,
} from './templates';

export type { ContactEnquiryPayload };

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function createMailTransport() {
  const host = requiredEnv('SMTP_HOST');
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || 'false') === 'true';
  const user = requiredEnv('SMTP_USER');
  const pass = requiredEnv('SMTP_PASS');

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // Helps reliability on Vercel serverless
    connectionTimeout: 20_000,
    socketTimeout: 20_000,
  });
}

export async function sendContactEnquiryEmails(payload: ContactEnquiryPayload) {
  const transporter = createMailTransport();
  const adminEmail = process.env.ADMIN_EMAIL || 'hbahi024@gmail.com';
  const fromName = process.env.MAIL_FROM_NAME || 'Maxqo Website';
  const fromAddress = process.env.SMTP_USER as string;
  const from = `"${fromName}" <${fromAddress}>`;

  const admin = buildAdminEmail(payload);
  const client = buildClientConfirmationEmail(payload);

  await transporter.sendMail({
    from,
    to: adminEmail,
    replyTo: payload.email,
    subject: admin.subject,
    text: admin.text,
    html: admin.html,
  });

  await transporter.sendMail({
    from,
    to: payload.email,
    replyTo: adminEmail,
    subject: client.subject,
    text: client.text,
    html: client.html,
  });

  return { adminEmail };
}
