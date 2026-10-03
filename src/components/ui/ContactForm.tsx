import { useRef, useState, type FormEvent } from 'react';
import { useLang } from '../../hooks/useLang';

const ENDPOINT = 'https://formsubmit.co/ajax/maxim.kostenkoo@yandex.ru';
const fieldClass = 'mt-2 w-full rounded-xl border border-white/10 bg-[#08080f] px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:border-[#06ffa5] focus:outline-none focus:ring-1 focus:ring-[#06ffa5] transition-colors';

export default function ContactForm() {
  const { t } = useLang();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('_honey')) return;
    sending.current = true;
    setStatus('sending');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? '').trim(),
          email: String(data.get('email') ?? '').trim(),
          message: String(data.get('message') ?? '').trim(),
          _subject: 'Новое предложение с сайта Максима Костенко',
          _template: 'table',
          _honey: '',
        }),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('Submission failed');
      }
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      window.clearTimeout(timeout);
      sending.current = false;
    }
  }

  return (
    <form onSubmit={submit} className="mb-10 rounded-2xl border border-white/10 bg-[#0f0f1e]/80 p-6 sm:p-8 text-left" aria-busy={status === 'sending'}>
      <h3 className="text-xl font-semibold text-slate-100">{t('contact.formTitle')}</h3>
      <fieldset disabled={status === 'sending'} className="mt-6 space-y-5 disabled:opacity-60">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-slate-300" htmlFor="contact-name">
            {t('contact.name')}
            <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} pattern=".*\S.*" className={fieldClass} />
          </label>
          <label className="block text-sm text-slate-300" htmlFor="contact-email">
            {t('contact.email')}
            <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} />
          </label>
        </div>
        <label className="block text-sm text-slate-300" htmlFor="contact-message">
          {t('contact.message')}
          <textarea id="contact-message" name="message" rows={5} required minLength={10} maxLength={5000} placeholder={t('contact.messagePlaceholder')} className={`${fieldClass} resize-y`} />
        </label>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="_honey" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <p className="text-xs leading-relaxed text-slate-500">{t('contact.formNote')}</p>
        <button type="submit" className="w-full sm:w-auto rounded-lg px-7 py-3 text-sm font-semibold text-[#08080f] bg-gradient-to-br from-[#06ffa5] to-[#f72585] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06ffa5] disabled:cursor-wait">
          {t(status === 'sending' ? 'contact.sending' : 'contact.send')}
        </button>
      </fieldset>
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && <p className="mt-4 text-sm text-[#06ffa5]" role="status">{t('contact.success')}</p>}
        {status === 'error' && <p className="mt-4 text-sm text-rose-300" role="alert">{t('contact.error')} <a href="mailto:maxim.kostenkoo@yandex.ru" className="underline">maxim.kostenkoo@yandex.ru</a></p>}
      </div>
    </form>
  );
}
