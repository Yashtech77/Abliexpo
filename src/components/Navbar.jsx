import { LoginIcon } from './Icons'

const navigation = ['Home', 'About', 'Contact Us']

function Navbar() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-black/45">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-16">
        <div className="text-[2.25rem] font-semibold tracking-[-0.06em]">
          Abli<span className="font-light">EXpo</span>
        </div>

        <nav className="hidden items-center gap-12 text-[1.05rem] md:flex">
          {navigation.map((item, index) => (
            <a
              key={item}
              href="/"
              className={
                index === 0
                  ? 'font-semibold text-[#f4d600]'
                  : 'text-white transition hover:text-[#f4d600]'
              }
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-10 text-[1.05rem] md:flex">
          <a
            href="/"
            className="flex items-center gap-3 font-semibold text-[#f4d600]"
          >
            <LoginIcon />
            <span>Login</span>
          </a>
          <a href="/" className="text-white transition hover:text-[#f4d600]">
            Register
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
