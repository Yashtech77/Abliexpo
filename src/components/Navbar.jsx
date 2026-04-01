import { authActions, navigationItems } from '../data/siteContent'

function Navbar({ currentPage, onNavigate, onOpenAuth, variant = 'light' }) {
  const isLight = variant === 'light'

  return (
    <header
      className={`relative z-20 border-b ${
        isLight
          ? 'border-b border-white/80 bg-white/80 text-slate-900 backdrop-blur-[24px] shadow-[1px_0_7px_rgba(0,0,0,0.2)]'
          : 'border-white/10 bg-black/45 text-white'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[44px] flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('home')
            }}
            className="text-[1.65rem] font-semibold tracking-[-0.05em] sm:text-[1.85rem]"
            aria-label="EkspansExpo home"
          >
            Ekspans
            <span className={isLight ? 'font-medium text-sky-600' : 'font-light'}>
              Expo
            </span>
          </a>

          <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.98rem] md:order-2 md:w-auto md:text-[1rem]">
            {navigationItems.map(({ label, page }) => (
              <button
                key={label}
                type="button"
                onClick={() => onNavigate(page)}
                className={`relative pb-2 font-medium transition ${
                  currentPage === page
                    ? isLight
                      ? 'text-sky-700'
                      : 'text-[#f4d600]'
                    : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-white hover:text-[#f4d600]'
                }`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {label}
                {currentPage === page ? (
                  <span
                    className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full ${
                      isLight ? 'bg-sky-600' : 'bg-[#f4d600]'
                    }`}
                  />
                ) : null}
              </button>
            ))}
          </nav>

          <div className="order-2 hidden items-center gap-3 md:order-3 md:flex">
            {authActions.map(({ label, action, isPrimary }) => (
              <button
                key={label}
                type="button"
                onClick={() => onOpenAuth(action)}
                className={
                  isPrimary
                    ? isLight
                      ? 'rounded-full border border-slate-900 bg-slate-950 px-6 py-2 text-[0.98rem] font-semibold text-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:bg-slate-800'
                      : 'rounded-full bg-[#f4d600] px-5 py-2.5 font-semibold text-[#071522] transition hover:bg-[#ffe75a]'
                    : isLight
                      ? 'text-slate-700 transition hover:text-slate-950'
                      : 'text-white transition hover:text-[#f4d600]'
                }
              >
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base">
            {authActions.map(({ label, action, isPrimary }) => (
              <button
                key={label}
                type="button"
                onClick={() => onOpenAuth(action)}
                className={
                  isPrimary
                    ? isLight
                      ? 'rounded-full border border-slate-900 bg-slate-950 px-6 py-2 text-[0.98rem] font-semibold text-white shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition hover:bg-slate-800'
                      : 'rounded-full bg-[#f4d600] px-5 py-2.5 font-semibold text-[#071522] transition hover:bg-[#ffe75a]'
                    : isLight
                      ? 'rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 font-semibold text-slate-700 transition hover:border-slate-950 hover:text-slate-950'
                      : 'rounded-full border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:border-[#f4d600] hover:text-[#f4d600]'
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
