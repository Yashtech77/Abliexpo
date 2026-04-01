function AuroraBackground({ children, className = '' }) {
  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-[#eef7ff] text-slate-950 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef8ff_0%,#d5ebfb_30%,#b5d6f0_100%)]" />
      <div className="wave-ribbon wave-ribbon-1 absolute right-[-18%] top-[-14%] h-[34rem] w-[90rem]" />
      <div className="wave-ribbon wave-ribbon-2 absolute right-[-22%] top-[-1%] h-[36rem] w-[96rem]" />
      <div className="wave-ribbon wave-ribbon-3 absolute right-[-18%] top-[11%] h-[34rem] w-[92rem]" />
      <div className="wave-ribbon wave-ribbon-4 absolute right-[-23%] top-[23%] h-[36rem] w-[98rem]" />
      <div className="wave-ribbon wave-ribbon-5 absolute right-[-18%] top-[36%] h-[30rem] w-[92rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(2,132,199,0.5),transparent_18%),radial-gradient(circle_at_80%_45%,rgba(3,105,161,0.32),transparent_20%),radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.3),transparent_14%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,transparent_76%,rgba(8,47,73,0.1))]" />

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AuroraBackground
