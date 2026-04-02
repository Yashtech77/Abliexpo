import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  SendHorizontal,
  ChevronRight,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import PageShell from '../layout/PageShell'
import Footer from '../sections/Footer'

function ContactPage({ currentPage, onNavigate, onOpenAuth }) {
  const [formData, setFormData] = useState({
    subject: 'Partnership Inquiry',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <PageShell
      background="plain"
      currentPage={currentPage}
      onNavigate={onNavigate}
      onOpenAuth={onOpenAuth}
    >
      <section className="relative z-10 px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-18">
        <div className="mx-auto max-w-[1880px]">
          <nav className="flex items-center gap-2 text-[1.05rem] font-medium text-[#4f6ca8]">
            <button
              onClick={() => onNavigate('home')}
              className="transition hover:text-[#163f88]"
            >
              Home
            </button>
            <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
            <span className="font-semibold text-[#0955e6]">Contact Us</span>
          </nav>

          <div className="mt-10 grid gap-10 xl:grid-cols-[0.95fr_1.25fr] xl:gap-16">
            <div className="pt-4 lg:pt-6">
              <div className="flex items-start gap-6">
                <div className="mt-[0.6rem] flex flex-col items-center">
                  <span className="h-[5.4rem] w-[3px] rounded-full bg-[#165ed8]" />
                  <span className="mt-1 h-[4.8rem] w-[3px] rounded-full bg-[#f4b617]" />
                </div>
                <div>
                  <h1 className="text-[3.6rem] font-bold leading-[0.96] tracking-[-0.065em] text-[#173f88] sm:text-[4.5rem] lg:text-[5.35rem]">
                    Contact Us
                  </h1>
                  <p className="mt-7 max-w-[39rem] text-[1.45rem] leading-[1.5] text-[#4b69aa] sm:text-[1.62rem]">
                    We're here to help you expand your horizons. Reach
                    <br className="hidden lg:block" /> out to our team for any inquiries.
                  </p>
                </div>
              </div>

              <div className="mt-16 space-y-12">
                <div className="flex items-start gap-5">
                  <div className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-2xl bg-[#dfe5ff] text-[#0b5be8]">
                    <Phone className="h-7 w-7" strokeWidth={2.1} />
                  </div>
                  <div className="pt-1">
                    <p className="text-[1rem] font-bold uppercase tracking-[0.04em] text-[#4363a9]">
                      Phone
                    </p>
                    <p className="mt-2 text-[1.5rem] font-semibold tracking-[-0.03em] text-[#173f88] sm:text-[1.65rem]">
                      (+91) 9356002701
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-2xl bg-[#dfe5ff] text-[#0b5be8]">
                    <Mail className="h-7 w-7" strokeWidth={2.1} />
                  </div>
                  <div className="pt-1">
                    <p className="text-[1rem] font-bold uppercase tracking-[0.04em] text-[#4363a9]">
                      Email
                    </p>
                    <p className="mt-1 max-w-[18rem] text-[1.52rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#173f88] sm:text-[1.6rem]">
                      support@Ekspansexpo.
                      <br />
                      com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-[4.4rem] w-[4.4rem] shrink-0 items-center justify-center rounded-2xl bg-[#dfe5ff] text-[#0b5be8]">
                    <MapPin className="h-7 w-7" strokeWidth={2.1} />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-[1rem] font-bold uppercase tracking-[0.04em] text-[#4363a9]">
                      Office Locations
                    </p>
                    <div className="mt-3 grid gap-6 sm:grid-cols-2 sm:gap-10">
                      <div>
                        <p className="text-[1.02rem] font-semibold text-[#173f88]">
                          Head Office
                        </p>
                        <p className="mt-1 text-[0.98rem] leading-[1.35] text-[#4b69aa] sm:text-[1.1rem]">
                          Pune, India
                        </p>
                      </div>
                      <div>
                        <p className="text-[1.02rem] font-semibold text-[#173f88]">
                          Regional Offices
                        </p>
                        <p className="mt-1 max-w-[18rem] text-[0.98rem] leading-[1.45] text-[#4b69aa] sm:text-[1.1rem]">
                          USA, Singapore, Dubai,
                          <br />
                          Ghana, Kenya, Geneva
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 overflow-hidden rounded-[1.3rem] border border-[#e5ebff] bg-[linear-gradient(180deg,#eef4ff,#edf4ff)] shadow-[0_8px_24px_rgba(119,146,196,0.12)]">
                <div className="relative h-[20rem] overflow-hidden rounded-t-[1.2rem] bg-[linear-gradient(180deg,#edf4ff_0%,#dce8ff_100%)] sm:h-[22rem]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(170,220,205,0.82)_0%,rgba(170,220,205,0.42)_24%,rgba(186,212,255,0.18)_56%,transparent_76%)]" />
                  <svg
                    viewBox="0 0 1000 500"
                    className="absolute inset-0 h-full w-full"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M136 27c100 0 174 38 249 22 74-15 156-63 260-43 105 20 205 113 237 210 30 88 8 197-66 237-65 34-160 8-262 11-101 2-209 34-299-12-93-47-162-170-177-293-16-124 23-132 58-132Z"
                      fill="rgba(148,205,194,0.78)"
                    />
                    <g stroke="rgba(255,255,255,0.82)" strokeWidth="4" fill="none">
                      <path d="M98 338C239 296 375 214 514 126" />
                      <path d="M204 62C277 141 357 222 424 316" />
                      <path d="M264 392C332 320 399 238 465 153" />
                      <path d="M482 66C507 168 536 268 588 373" />
                      <path d="M622 72C564 132 508 212 442 390" />
                      <path d="M730 118C634 172 516 258 374 434" />
                      <path d="M170 189C319 193 468 224 633 299" />
                      <path d="M257 104C331 149 419 218 558 361" />
                      <path d="M355 49C411 102 479 201 645 255" />
                      <path d="M517 117C640 141 735 176 839 232" />
                    </g>
                    <g fill="rgba(255,255,255,0.56)">
                      <circle cx="362" cy="167" r="7" />
                      <circle cx="456" cy="201" r="7" />
                      <circle cx="558" cy="137" r="6" />
                      <circle cx="603" cy="237" r="6" />
                    </g>
                    <circle cx="500" cy="250" r="16" fill="#1a66e8" stroke="#ffffff" strokeWidth="6" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <p className="text-[1.15rem] font-semibold tracking-[-0.03em] text-[#173f88] sm:text-[1.28rem]">
                    Pune, MH, India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Pune,Maharashtra,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[1rem] font-semibold text-[#0e5de5] transition hover:text-[#0b49b4]"
                  >
                    View on Maps
                    <ExternalLink className="h-4 w-4" strokeWidth={2.2} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-[#e2eafe] bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-6 shadow-[0_10px_30px_rgba(130,158,207,0.12)] sm:p-8 lg:p-12 xl:px-12 xl:py-10">
              <h2 className="text-[2.55rem] font-bold tracking-[-0.055em] text-[#173f88] sm:text-[3.05rem]">
                Let&rsquo;s get in touch!
              </h2>
              <p className="mt-3 text-[1.18rem] leading-[1.5] text-[#4b69aa] sm:text-[1.28rem]">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                <div>
                  <label className="mb-2 block text-[0.98rem] font-semibold text-[#5b6273]">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="h-[4.8rem] w-full appearance-none rounded-[0.6rem] border border-[#d8e1ff] bg-[#dbe4ff] px-5 pr-12 text-[1.14rem] text-[#5d6982] outline-none transition focus:border-[#1b65e8]"
                    >
                      <option>Partnership Inquiry</option>
                      <option>General Inquiry</option>
                      <option>Support Request</option>
                      <option>Business Collaboration</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#111827]" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-center text-[0.98rem] font-semibold text-[#36589e] md:text-left">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="h-[4.6rem] w-full rounded-[0.6rem] border border-[#d8e1ff] bg-[#dbe4ff] px-5 text-[1.14rem] text-[#5d6982] placeholder:text-[#6f7788] outline-none transition focus:border-[#1b65e8]"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-center text-[0.98rem] font-semibold text-[#36589e] md:text-left">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="h-[4.6rem] w-full rounded-[0.6rem] border border-[#d8e1ff] bg-[#dbe4ff] px-5 text-[1.14rem] text-[#5d6982] placeholder:text-[#6f7788] outline-none transition focus:border-[#1b65e8]"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-center text-[0.98rem] font-semibold text-[#36589e] md:text-left">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 00000 00000"
                      className="h-[4.6rem] w-full rounded-[0.6rem] border border-[#d8e1ff] bg-[#dbe4ff] px-5 text-[1.14rem] text-[#5d6982] placeholder:text-[#6f7788] outline-none transition focus:border-[#1b65e8]"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-center text-[0.98rem] font-semibold text-[#36589e] md:text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="h-[4.6rem] w-full rounded-[0.6rem] border border-[#d8e1ff] bg-[#dbe4ff] px-5 text-[1.14rem] text-[#5d6982] placeholder:text-[#6f7788] outline-none transition focus:border-[#1b65e8]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[0.98rem] font-semibold text-[#36589e]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className="min-h-[12.8rem] w-full resize-none rounded-[0.6rem] border border-[#d8e1ff] bg-[#dbe4ff] px-5 py-5 text-[1.14rem] text-[#5d6982] placeholder:text-[#6f7788] outline-none transition focus:border-[#1b65e8]"
                    required
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    className="inline-flex h-[5.5rem] w-full items-center justify-center gap-3 rounded-[1rem] bg-[linear-gradient(180deg,#1062e8_0%,#0d57d9_100%)] px-8 text-[1.2rem] font-semibold text-white shadow-[0_10px_24px_rgba(16,98,232,0.26)] transition hover:brightness-[1.03]"
                  >
                    Send Message
                    <SendHorizontal className="h-6 w-6" strokeWidth={2.2} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer variant="contact" />
    </PageShell>
  )
}

export default ContactPage
