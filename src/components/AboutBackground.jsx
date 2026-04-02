import { motion } from 'framer-motion'

const ribbonLayers = [
  {
    path: 'M-120 250C154 132 430 126 724 176C1004 224 1292 232 1572 128C1740 66 1880 -26 1990 -122',
    width: 180,
    opacity: 0.2,
    duration: 20,
    delay: -8,
  },
  {
    path: 'M-84 248C174 154 444 150 728 190C1005 230 1284 228 1568 138C1738 84 1878 6 1994 -84',
    width: 132,
    opacity: 0.38,
    duration: 16,
    delay: -4,
  },
  {
    path: 'M-42 250C192 176 454 174 734 204C1011 235 1291 228 1576 152C1748 106 1892 34 2010 -48',
    width: 84,
    opacity: 0.62,
    duration: 14,
    delay: -10,
  },
  {
    path: 'M-18 254C208 196 460 196 738 218C1016 240 1299 232 1588 168C1762 130 1906 68 2022 -2',
    width: 22,
    opacity: 0.9,
    duration: 12,
    delay: -2,
  },
  {
    path: 'M-90 558C170 444 432 418 716 418C998 418 1288 444 1588 392C1768 360 1914 296 2034 220',
    width: 168,
    opacity: 0.18,
    duration: 22,
    delay: -12,
  },
  {
    path: 'M-56 560C190 470 448 446 724 442C998 438 1286 454 1586 410C1768 384 1918 328 2040 262',
    width: 118,
    opacity: 0.3,
    duration: 18,
    delay: -6,
  },
  {
    path: 'M-18 566C206 496 456 476 728 468C1001 460 1290 466 1594 432C1778 412 1930 364 2054 304',
    width: 74,
    opacity: 0.48,
    duration: 15,
    delay: -9,
  },
  {
    path: 'M6 572C220 522 464 506 734 494C1007 482 1298 482 1606 456C1792 440 1948 400 2070 350',
    width: 18,
    opacity: 0.82,
    duration: 13,
    delay: -1,
  },
]

function RibbonLayer({ layer, index }) {
  return (
    <motion.svg
      viewBox="0 0 2048 768"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
      animate={{
        x: ['0%', '1.2%', '-1%', '0%'],
        y: ['0%', '-1.4%', '1.2%', '0%'],
      }}
      transition={{
        duration: layer.duration,
        delay: layer.delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <defs>
        <linearGradient id={`ribbon-${index}`} x1="0%" y1="55%" x2="100%" y2="8%">
          <stop offset="0%" stopColor="rgba(186,227,251,0.06)" />
          <stop offset="28%" stopColor="rgba(149,212,247,0.58)" />
          <stop offset="56%" stopColor="rgba(122,200,244,0.64)" />
          <stop offset="100%" stopColor="rgba(148,218,251,0.24)" />
        </linearGradient>
      </defs>
      <path
        d={layer.path}
        fill="none"
        stroke={`url(#ribbon-${index})`}
        strokeWidth={layer.width}
        strokeLinecap="round"
        opacity={layer.opacity}
        filter="blur(0.8px)"
      />
      <path
        d={layer.path}
        fill="none"
        stroke="rgba(255,255,255,0.42)"
        strokeWidth={Math.max(3, layer.width * 0.1)}
        strokeLinecap="round"
        opacity={Math.min(0.7, layer.opacity + 0.18)}
      />
      <path
        d={layer.path}
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={Math.max(8, layer.width * 0.32)}
        strokeLinecap="round"
        opacity={layer.opacity * 0.55}
        transform="translate(0 8)"
      />
    </motion.svg>
  )
}

function AboutBackground({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_22%,#f0f8ff_66%,#eef8ff_100%)]" />
      <div className="absolute right-[-10%] top-[-4%] h-[66%] w-[44%] bg-[radial-gradient(circle_at_52%_22%,rgba(156,222,252,0.42)_0%,rgba(156,222,252,0.2)_24%,rgba(156,222,252,0.06)_46%,transparent_74%)] blur-3xl" />
      <div className="absolute left-[-14%] top-[20%] h-[48%] w-[42%] bg-[radial-gradient(circle_at_34%_48%,rgba(183,225,249,0.24)_0%,rgba(183,225,249,0.08)_34%,transparent_72%)] blur-3xl" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {ribbonLayers.map((layer, index) => (
          <RibbonLayer key={index} layer={layer} index={index} />
        ))}

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_81%_14%,rgba(255,255,255,0.74),transparent_11%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(255,255,255,0.03)_32%,transparent_62%)]"
          animate={{ opacity: [0.42, 0.58, 0.46, 0.42] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </main>
  )
}

export default AboutBackground
