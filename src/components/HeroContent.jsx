import { Chevron, DownArrow } from './Icons'
import { heroContent, sliderControls } from './landingPageData'
import PreviewCard from './PreviewCard'

function HeroContent({ onNavigate }) {
  return (
    <section className="relative z-10 flex min-h-[calc(100vh-89px)] items-center justify-center px-4 py-12 sm:px-6 sm:py-14 lg:px-16 lg:py-16">
      {sliderControls.map(({ direction, label, position }) => (
        <button
          key={direction}
          type="button"
          aria-label={label}
          className={`absolute top-1/2 hidden -translate-y-1/2 text-white/95 transition hover:text-[#f4d600] lg:block ${position}`}
        >
          <Chevron direction={direction} />
        </button>
      ))}

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <h1 className="max-w-6xl text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[6.2rem]">
          {heroContent.title}
        </h1>

        <p className="mt-6 max-w-4xl text-lg font-light text-white/90 sm:mt-10 sm:text-2xl lg:mt-12 lg:text-[2.15rem]">
          {heroContent.subtitle}
        </p>

        <div className="mt-4 h-1 w-24 rounded-full bg-[#f4d600] sm:mt-5 sm:w-32" />

        <button
          type="button"
         onClick={() => onNavigate("register")}
          className="mt-10 rounded-full bg-[#5b7fcf] px-10 py-4 text-base font-semibold text-white shadow-[0_20px_40px_rgba(53,91,177,0.35)] transition hover:bg-[#6b8edf] sm:mt-16 sm:px-16 sm:py-5 sm:text-xl lg:mt-20"
        >
          {heroContent.ctaLabel}
        </button>

        <button
          type="button"
          aria-label="Scroll down"
          className="mt-10 text-white transition hover:text-[#f4d600] sm:mt-16 lg:mt-20"
        >
          <DownArrow />
        </button>
      </div>

      <PreviewCard />
    </section>
  )
}

export default HeroContent
