import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');
  function onSubmit(e){
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());
    // Simulate success UX
    setTimeout(()=>{
      setStatus('Thanks, your message has been sent. I will get back to you soon.');
      e.currentTarget.reset();
    }, 600);
    console.log('Contact form:', data);
  }
  return (
    <div className="py-12">
      <header className="max-w-3xl mt-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Contact</h1>
        <p className="mt-3 text-slate-700">Let’s talk about your project. I usually reply within 24 hours.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="md:col-span-2 bg-white rounded-xl p-6 border">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-600">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
              <label className="text-sm text-slate-600">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-slate-600">Subject</label>
              <input name="subject" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-slate-600">Message</label>
              <textarea name="message" rows="6" required className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">Send message</button>
              <div className="text-sm text-green-600">{status}</div>
            </div>
          </form>
        </div>
        <aside className="bg-white rounded-xl p-6 border">
          <div className="font-medium">Contact details</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Email: hello@awais.dev</li>
            <li>LinkedIn: /in/awais</li>
            <li>WhatsApp: +1 234 567 890</li>
            <li>Location: Pakistan</li>
          </ul>
          <div className="mt-6">
            <div className="font-medium">Availability</div>
            <p className="text-sm text-slate-700 mt-1">Booking new projects for next month. Rush options available.</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
