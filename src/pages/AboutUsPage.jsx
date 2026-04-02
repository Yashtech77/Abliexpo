import { motion } from 'framer-motion'
import { BrainCog } from 'lucide-react'
import PageShell from '../layout/PageShell'

function AboutUsPage({ currentPage, onNavigate, onOpenAuth }) {
  const fadeUp = {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <PageShell
      background="about"
      currentPage={currentPage}
      onNavigate={onNavigate}
      onOpenAuth={onOpenAuth}
    >
      <section className="relative z-10 pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-28 lg:pt-9">
        <div className="mx-auto max-w-[1792px] px-4 sm:px-6 lg:px-0">
          <div className="grid gap-8 lg:min-h-[52rem] lg:grid-cols-[0.8fr_1.2fr] lg:gap-0">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.8 }}
              className="px-4 pt-4 sm:px-8 lg:flex lg:flex-col lg:px-[7.1rem] lg:pt-[6.6rem]"
            >
              <h1 className="max-w-[22rem] text-[2.95rem] font-bold leading-[0.98] tracking-[-0.055em] text-[#1f252d] sm:max-w-[25rem] sm:text-[3.6rem] lg:max-w-[24rem] lg:text-[4.15rem]">
                About
                <span className="block mt-3 lg:mt-4">EkspansExpo</span>
              </h1>

              <div className="mt-10 max-w-[37rem] space-y-8 text-[1.1rem] font-semibold leading-[1.42] text-[#232a31] sm:text-[1.17rem] lg:mt-[4.45rem] lg:text-[1.2rem]">
                <p>
                  EkspansExpo is a revolutionary virtual exhibition platform
                  that brings the world&rsquo;s most exciting expos,
                  conferences, and networking events directly to your screen.
                  We believe in breaking geographical boundaries and making
                  global markets accessible to everyone.
                </p>

                <p>
                  Our mission is to connect innovators, entrepreneurs, and
                  professionals from around the globe through immersive virtual
                  experiences. Whether you&rsquo;re looking to showcase your
                  products, network with industry leaders, or discover the
                  latest innovations, EkspansExpo is your gateway to the world.
                </p>
              </div>

              <div className="mt-20 hidden max-w-[33.6rem] lg:mt-auto lg:block">
                <div className="h-[2px] w-full bg-[#dde4ec]" />
                <div className="-mt-[2px] h-[3px] w-[13.8rem] rounded-full bg-[#a85b0f]" />
              </div>
            </motion.div>

            <div className="px-0 sm:px-2 lg:flex lg:flex-col lg:justify-start lg:pr-[7.2rem] lg:pt-[5.2rem]">
              <div className="grid gap-6 lg:grid-cols-2">
                {[
                  {
                    value: '50k +',
                    title: 'Events Hosted',
                    description:
                      'Access a verified network of over 500+ trade partners across six continents, curated for quality and reliability.',
                  },
                  {
                    value: '120+',
                    title: 'Active Users',
                    description:
                      'Algorithmic matchmaking that connects you with industry leaders based on synergy, not just search queries.',
                  },
                ].map((card, index) => (
                  <motion.article
                    key={card.title}
                    variants={fadeUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.75, delay: 0.12 + index * 0.12 }}
                    className="rounded-[1.9rem] bg-white px-8 py-9 shadow-[0_10px_38px_rgba(82,126,162,0.08)] sm:px-10 sm:py-10 lg:min-h-[22.7rem] lg:px-[3.1rem] lg:py-[2.85rem]"
                  >
                    <p className="text-[2.45rem] font-bold tracking-[-0.05em] text-[#0a63d6] sm:text-[2.72rem]">
                      {card.value}
                    </p>
                    <h2 className="mt-[4rem] text-[1.92rem] font-semibold tracking-[-0.05em] text-[#20262d] sm:text-[2.2rem] lg:mt-[4.45rem] lg:text-[2.04rem]">
                      {card.title}
                    </h2>
                    <p className="mt-8 max-w-[19rem] text-[0.98rem] leading-[1.28] text-[#5b6374] sm:text-[1.05rem] lg:text-[1rem]">
                      {card.description}
                    </p>
                  </motion.article>
                ))}
              </div>

              <motion.article
                variants={fadeUp}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.85, delay: 0.34 }}
                className="mt-6 rounded-[1.5rem] bg-[#3476df] px-7 py-10 text-white shadow-[0_14px_40px_rgba(47,115,222,0.2)] sm:px-10 sm:py-12 lg:mt-[1.2rem] lg:min-h-[19rem] lg:px-[4rem] lg:py-[3.2rem]"
              >
                <div className="grid gap-8 lg:grid-cols-[8.5rem_1fr] lg:items-start">
                  <div className="flex items-start justify-start lg:pt-[4.3rem]">
                    <div className="flex h-[5.2rem] w-[5.2rem] items-center justify-center rounded-full bg-white/6">
                      <BrainCog className="h-[3rem] w-[3rem] text-white" strokeWidth={2.1} />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-[2.25rem] font-semibold tracking-[-0.05em] text-white sm:text-[2.6rem] lg:text-[2.45rem]">
                      AI Discovery
                    </h2>

                    <p className="mt-8 max-w-[48rem] text-[1.02rem] leading-[1.3] text-[#f5f9ff] sm:text-[1.1rem] lg:mt-[3rem] lg:max-w-[47rem]">
                      The future of trade is predictive. Our proprietary AI
                      engine analyzes market shifts in real-time to surface
                      opportunities before they go mainstream, giving our
                      members a distinct editorial edge.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>

          <div className="mt-12 px-4 sm:px-8 lg:hidden">
            <div className="h-[2px] w-full bg-[#dde4ec]" />
            <div className="-mt-[2px] h-[3px] w-[10rem] rounded-full bg-[#a85b0f] sm:w-[12rem]" />
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default AboutUsPage
