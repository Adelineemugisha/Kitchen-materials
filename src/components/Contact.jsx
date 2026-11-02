import SectionHeading from "./SectionHeading";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Aurelia Kitchen, I have a question about your products."
)}`;

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Talk to a person, not a form."
              intro="We answer on WhatsApp within business hours, and we're happy to advise on sizes, finishes and delivery before you order."
            />

            <dl className="mt-8 space-y-5 text-sm">
              <div className="flex flex-col gap-1 border-b border-ink/10 pb-4 sm:flex-row sm:justify-between">
                <dt className="text-[10px] tracking-[0.24em] text-moss uppercase">WhatsApp</dt>
                <dd className="text-ink">0780 000 000</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-ink/10 pb-4 sm:flex-row sm:justify-between">
                <dt className="text-[10px] tracking-[0.24em] text-moss uppercase">Email</dt>
                <dd className="text-ink">hello@aureliakitchen.com</dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-ink/10 pb-4 sm:flex-row sm:justify-between">
                <dt className="text-[10px] tracking-[0.24em] text-moss uppercase">Believe House</dt>
                <dd className="text-ink">Kigali, Rwanda</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                <dt className="text-[10px] tracking-[0.24em] text-moss uppercase">Hours</dt>
                <dd className="text-ink">Mon–Sat, 8:00 – 20:00</dd>
              </div>
            </dl>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[10px] font-medium tracking-[0.2em] text-cream uppercase transition-colors hover:bg-gold"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.27 4.86L2 22l5.3-1.32a9.9 9.9 0 0 0 4.74 1.2c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.35-.54.05-1.03.24-3.48-.72-2.95-1.16-4.8-4.2-4.95-4.4-.15-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.65.5.24.58.8 1.98.87 2.12.07.15.12.32.02.51-.1.2-.34.5-.53.72-.19.22-.27.29-.13.53.14.24.63 1.04 1.35 1.68.93.83 1.6 1.09 1.84 1.21.24.12.38.1.52-.06.15-.17.63-.73.8-.98.17-.24.34-.2.57-.12.24.09 1.5.71 1.76.84.26.13.43.19.5.3.06.1.06.63-.18 1.31Z" />
              </svg>
              Message us on WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white/60 p-6 sm:p-8">
            <h3 className="font-display text-xl text-ink">Send a note</h3>
            <p className="mt-2 text-sm text-moss">
              Fill this in and we'll reply by email within one working day.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(
                  `Website enquiry — ${data.get("name")}`
                );
                const body = encodeURIComponent(
                  `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`
                );
                window.location.href = `mailto:hello@aureliakitchen.com?subject=${subject}&body=${body}`;
              }}
            >
              {[
                { name: "name", label: "Your name", type: "text" },
                { name: "email", label: "Email address", type: "email" },
              ].map((field) => (
                <label key={field.name} className="block">
                  <span className="text-[10px] tracking-[0.22em] text-moss uppercase">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="mt-2 w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-[10px] tracking-[0.22em] text-moss uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-ink py-3.5 text-[10px] font-medium tracking-[0.2em] text-cream uppercase transition-colors hover:bg-gold"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
