import { contactPageContent } from '../data/siteContent'
import PageShell from '../layout/PageShell'

function ContactPage({ currentPage, onNavigate, onOpenAuth }) {
  return (
    <PageShell
      background="contact"
      currentPage={currentPage}
      onNavigate={onNavigate}
      onOpenAuth={onOpenAuth}
    >
      <section className="relative z-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-md sm:rounded-[2rem] sm:p-8 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d600] sm:text-sm sm:tracking-[0.35em]">
              {contactPageContent.eyebrow}
            </p>
            <h1 className="mt-4 max-w-xl text-[2.3rem] font-semibold leading-tight tracking-[-0.05em] sm:mt-6 sm:text-5xl lg:text-6xl">
              {contactPageContent.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:mt-6 sm:text-xl sm:leading-8">
              {contactPageContent.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {contactPageContent.details.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-[1.35rem] border border-white/10 bg-[#081726]/80 p-4 sm:rounded-[1.5rem] sm:p-5"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45 sm:text-sm sm:tracking-[0.28em]">
                    {label}
                  </p>
                  <p className="mt-2 text-base font-medium text-white sm:mt-3 sm:text-lg">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#f4d600]/20 bg-[#0b1d30]/80 p-5 sm:mt-12 sm:rounded-[1.75rem] sm:p-8">
              <p className="text-lg font-semibold text-white sm:text-xl">
                Need quick access?
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/72 sm:text-base">
                Create an account to explore events, register for webinars, and
                manage exhibitor opportunities in one place.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-4">
                <button
                  type="button"
                  onClick={() => onOpenAuth('register')}
                  className="rounded-full bg-[#f4d600] px-6 py-3 text-sm font-semibold text-[#071522] transition hover:bg-[#ffe75a] sm:px-7"
                >
                  Register Now
                </button>
                <button
                  type="button"
                  onClick={() => onOpenAuth('login')}
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4d600] hover:text-[#f4d600] sm:px-7"
                >
                  Login
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
              Send us a message
            </h2>
            <p className="mt-3 text-sm text-white/68 sm:text-base">
              We usually reply within one business day.
            </p>

            <form
              className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
              onSubmit={(event) => event.preventDefault()}
            >
              {contactPageContent.formFields.map(
                ({ id, label, type, placeholder }) => (
                  <label key={id} className="block">
                    <span className="text-sm font-medium text-white/78">
                      {label}
                    </span>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#071522]/80 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#f4d600] focus:ring-2 focus:ring-[#f4d600]/25 sm:rounded-2xl sm:px-5 sm:py-4"
                    />
                  </label>
                ),
              )}

              <label className="block">
                <span className="text-sm font-medium text-white/78">
                  {contactPageContent.messageField.label}
                </span>
                <textarea
                  id={contactPageContent.messageField.id}
                  rows={6}
                  placeholder={contactPageContent.messageField.placeholder}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#071522]/80 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-[#f4d600] focus:ring-2 focus:ring-[#f4d600]/25 sm:rounded-2xl sm:px-5 sm:py-4"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-[#5b7fcf] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(53,91,177,0.28)] transition hover:bg-[#6d8fe0] sm:py-4 sm:text-base"
              >
                {contactPageContent.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default ContactPage
