import { Chevron, DownArrow } from './Icons'
import PreviewCard from './PreviewCard'

function HeroContent() {
  return (
    <section className="relative z-10 flex min-h-[calc(100vh-89px)] items-center justify-center px-6 py-16 lg:px-16">
      <button
        type="button"
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 text-white/95 transition hover:text-[#f4d600] lg:block"
      >
        <Chevron direction="left" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-white/95 transition hover:text-[#f4d600] lg:block"
      >
        <Chevron direction="right" />
      </button>

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <h1 className="max-w-6xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-[6.2rem]">
          Your Gateway to the Global Market
        </h1>

        <p className="mt-12 max-w-4xl text-xl font-light text-white/90 sm:text-2xl lg:text-[2.15rem]">
          Virtual world of Exhibitions. Flash sale. Webinars.
        </p>

        <div className="mt-5 h-1 w-32 rounded-full bg-[#f4d600]" />

        <button
          type="button"
          className="mt-20 rounded-full bg-[#5b7fcf] px-16 py-5 text-xl font-semibold text-white shadow-[0_20px_40px_rgba(53,91,177,0.35)] transition hover:bg-[#6b8edf]"
        >
          Register
        </button>

        <button
          type="button"
          aria-label="Scroll down"
          className="mt-20 text-white transition hover:text-[#f4d600]"
        >
          <DownArrow />
        </button>
      </div>

      <PreviewCard />
    </section>
  )
}

export default HeroContent
