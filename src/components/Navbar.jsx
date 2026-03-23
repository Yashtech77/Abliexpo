import { LoginIcon } from './Icons'
import { authActions, navigationItems } from './landingPageData'

function Navbar({ onOpenAuth }) {
  return (
    <header className="relative z-10 border-b border-white/10 bg-black/45">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-16">
        <a
          href="#home"
          className="text-[2.25rem] font-semibold tracking-[-0.06em]"
          aria-label="AbliEXpo home"
        >
          Abli<span className="font-light">EXpo</span>
        </a>

        <nav className="hidden items-center gap-12 text-[1.05rem] md:flex">
          {navigationItems.map(({ label, isActive }) => (
            <button
              key={label}
              type="button"
              className={
                isActive
                  ? 'font-semibold text-[#f4d600]'
                  : 'text-white transition hover:text-[#f4d600]'
              }
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

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
    </header>
  )
}

export default Navbar
