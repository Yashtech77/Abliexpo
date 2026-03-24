import { LoginIcon } from './Icons'
import { authActions, navigationItems } from './landingPageData'

function Navbar({ currentPage, onNavigate, onOpenAuth }) {
  return (
    <header className="relative z-10 border-b border-white/10 bg-black/45">
      <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 sm:py-5 lg:px-16 lg:py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('home')
            }}
            className="text-[1.8rem] font-semibold tracking-[-0.06em] sm:text-[2.1rem] lg:text-[2.25rem]"
            aria-label="AbliEXpo home"
          >
            Abli<span className="font-light">EXpo</span>
          </a>

          <div className="hidden items-center gap-10 text-[1.05rem] md:flex">
            {authActions.map(({ label, isPrimary }) => (
              <button
                key={label}
                type="button"
                onClick={() => onOpenAuth(label.toLowerCase())}
                className={
                  isPrimary
                    ? 'flex items-center gap-3 font-semibold text-[#f4d600]'
                    : 'text-white transition hover:text-[#f4d600]'
                }
              >
                {isPrimary ? <LoginIcon /> : null}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.98rem] sm:text-[1.05rem]">
            {navigationItems.map(({ label, page }) => (
              <button
                key={label}
                type="button"
                onClick={() => onNavigate(page)}
                className={
                  currentPage === page
                    ? 'font-semibold text-[#f4d600]'
                    : 'text-white transition hover:text-[#f4d600]'
                }
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base md:hidden">
            {authActions.map(({ label, isPrimary }) => (
              <button
                key={label}
                type="button"
                onClick={() => onOpenAuth(label.toLowerCase())}
                className={
                  isPrimary
                    ? 'rounded-full bg-[#f4d600] px-5 py-2.5 font-semibold text-[#071522] transition hover:bg-[#ffe75a]'
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
