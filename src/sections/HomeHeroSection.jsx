import { useEffect, useRef, useState } from 'react'
import heroImage from '../assets/hero.png'
import HeroMediaPlayer from '../components/HeroMediaPlayer'
import { CalendarIcon, ShareIcon } from '../components/Icons'
import { homeHeroContent, homeShowcaseCards } from '../data/siteContent'

function HomeHeroSection({ onOpenAuth }) {
  const measureCardRef = useRef(null)
  const itemRefs = useRef([])
  const offsetRef = useRef(0)
  const cardSpanRef = useRef(0)
  const setWidthRef = useRef(0)
  const lastTimeRef = useRef(0)
  const pausedRef = useRef(false)
  const [isPaused, setIsPaused] = useState(false)
  const gap = 20
  const repeatedCards = [
    ...homeShowcaseCards,
    ...homeShowcaseCards,
    ...homeShowcaseCards,
  ]

  useEffect(() => {
    const measuredCard = measureCardRef.current

    if (!measuredCard) {
      return undefined
    }

    let frameId = 0

    const layoutItems = () => {
      const cardWidth = measuredCard.offsetWidth
      cardSpanRef.current = cardWidth + gap
      setWidthRef.current = cardSpanRef.current * homeShowcaseCards.length
      offsetRef.current = 0

      itemRefs.current.forEach((node, index) => {
        if (!node) return
        const x = index * cardSpanRef.current
        node.style.transform = `translate3d(${x}px,0,0)`
      })
    }

    layoutItems()

    const step = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time
      }
      
      const delta = (time - lastTimeRef.current) / 1000
      lastTimeRef.current = time
      
      const speed = 52
      const wrapWidth = setWidthRef.current

      if (!pausedRef.current && wrapWidth > 0) {
        offsetRef.current -= speed * delta

        if (offsetRef.current <= -wrapWidth) {
          offsetRef.current += wrapWidth
        }

        itemRefs.current.forEach((node, index) => {
          if (!node) return
          const x = index * cardSpanRef.current + offsetRef.current
          node.style.transform = `translate3d(${x}px,0,0)`
        })
      }
      
      frameId = window.requestAnimationFrame(step)
    }

    frameId = window.requestAnimationFrame(step)

    const handleResize = () => {
      lastTimeRef.current = 0
      layoutItems()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    pausedRef.current = isPaused
  }, [isPaused])

  const renderCards = () =>
    repeatedCards.map(({ title, date, category, status, artClassName }, index) => (
      <article
        key={`${title}-${category}-${index}`}
        ref={(node) => {
          itemRefs.current[index] = node
          if (index === 0) {
            measureCardRef.current = node
          }
        }}
        className="absolute left-0 top-0 w-[18.25rem] shrink-0 overflow-hidden rounded-[1.6rem] border border-sky-100 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.1)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_22px_40px_rgba(15,23,42,0.16)] sm:w-[19.75rem] xl:w-[21.5rem]"
      >
        <div className={`relative h-[15.25rem] sm:h-[15.75rem] ${artClassName}`}>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.18))]" />
          <span
            className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white ${
              status === 'Live'
                ? 'bg-lime-500'
                : status === 'Offline'
                  ? 'bg-orange-500'
                  : 'bg-blue-600'
            }`}
          >
            {status}
          </span>
        </div>

        <div className="space-y-3 px-5 py-4">
          <h2 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.04em] text-slate-900">
            {title}
          </h2>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <CalendarIcon />
            <span>{date}</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-500">
              {category}
            </p>
            <button
              type="button"
              aria-label={`Share ${title}`}
              className="text-sky-600 transition hover:text-sky-700"
            >
              <ShareIcon />
            </button>
          </div>
        </div>
      </article>
    ))

  return (
    <section className="relative z-10 px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 lg:pb-28 lg:pt-9">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid items-center gap-8 lg:grid-cols-[749px_minmax(0,1fr)] lg:gap-10">
          <HeroMediaPlayer
            poster={heroImage}
            badgeLabel={homeHeroContent.visualBadge}
          />

          <div className="px-2 text-center lg:px-2">
            <h1 className="font-manrope-display mx-auto max-w-[820px] text-[2.8rem] font-extrabold leading-[1.16] tracking-[-0.045em] text-slate-950 sm:text-[3.5rem] lg:text-[5rem]">
              <span className="block whitespace-nowrap">Bringing The World</span>
              <span className="mt-2 block whitespace-nowrap">Market To Your</span>
              <span className="mt-2 block">Screen</span>
            </h1>

            <p className="mx-auto mt-10 max-w-[34rem] text-lg leading-[1.3] text-slate-600 sm:text-[1.35rem] lg:text-[1.32rem]">
              {homeHeroContent.subtitle}
            </p>

            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => onOpenAuth('register')}
                className="rounded-full bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
              >
                {homeHeroContent.ctaLabel}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-4 text-slate-700">
          <div className="h-px w-10 bg-orange-500" />
          <p className="text-sm font-medium tracking-[0.06em]">
            {homeHeroContent.eyebrow}
          </p>
        </div>

        <div
          className="mt-5 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[24.6rem] sm:h-[25.2rem]">
            {renderCards()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
