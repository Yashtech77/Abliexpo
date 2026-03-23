import HeroContent from './HeroContent'
import Navbar from './Navbar'

function HeroPage({ onOpenAuth }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071522] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,57,95,0.3),transparent_34%),linear-gradient(90deg,rgba(2,10,16,0.96),rgba(8,17,25,0.8)_72%,rgba(64,49,34,0.35))]" />
      <div className="absolute inset-y-0 left-1/2 w-248 -translate-x-[58%] rounded-full bg-[radial-gradient(circle,_rgba(25,84,143,0.3)_0%,_rgba(4,13,22,0.94)_45%,_rgba(3,9,15,0)_68%)] blur-sm" />
      <div className="absolute left-1/2 top-[8%] h-[72rem] w-[72rem] -translate-x-1/2 rounded-full border border-white/10 opacity-25" />
      <div className="absolute left-[13%] top-[10%] h-[55rem] w-[55rem] rounded-full bg-[radial-gradient(circle,_rgba(119,186,255,0.12)_0%,_rgba(16,33,54,0.08)_34%,_transparent_65%)] blur-3xl" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-position:center] [background-size:130px_130px]" />
      <div className="absolute inset-y-0 right-0 w-[22%] bg-[linear-gradient(90deg,rgba(7,21,34,0)_0%,rgba(114,86,58,0.22)_100%)]" />

      <Navbar onOpenAuth={onOpenAuth} />
      <HeroContent onOpenAuth={onOpenAuth} />
    </main>
  )
}

export default HeroPage
