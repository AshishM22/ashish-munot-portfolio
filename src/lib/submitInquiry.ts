import type { ContactFormState } from '../types';

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

export async function submitInquiry(form: ContactFormState, honeypot: string) {
  if (honeypot.trim()) {
    return;
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error('Contact form is not configured. Add VITE_WEB3FORMS_ACCESS_KEY.');
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: form.name,
      email: form.email,
      company: form.subject,
      message: form.message,
      subject: `Portfolio inquiry from ${form.name}`,
      from_name: 'Ashish Munot portfolio',
    }),
  });

  const data = (await response.json()) as Web3FormsResponse;

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Could not send the inquiry. Please try again.');
  }
}
