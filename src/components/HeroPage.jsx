import HeroContent from './HeroContent'
import Navbar from './Navbar'

function HeroPage({ currentPage, onNavigate, onOpenAuth, isLoggedIn }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071522] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,57,95,0.3),transparent_34%),linear-gradient(90deg,rgba(2,10,16,0.96),rgba(8,17,25,0.8)_72%,rgba(64,49,34,0.35))]" />
      <div className="absolute inset-y-0 left-1/2 w-[40rem] -translate-x-[58%] rounded-full bg-[radial-gradient(circle,rgba(25,84,143,0.3)_0%,rgba(4,13,22,0.94)_45%,rgba(3,9,15,0)_68%)] blur-sm sm:w-[52rem] lg:w-248" />
      <div className="absolute left-1/2 top-[10%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-white/10 opacity-25 sm:h-[56rem] sm:w-[56rem] lg:top-[8%] lg:h-288 lg:w-6xl" />
      <div className="absolute left-[8%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(119,186,255,0.12)_0%,rgba(16,33,54,0.08)_34%,transparent_65%)] blur-3xl sm:h-[40rem] sm:w-[40rem] lg:left-[13%] lg:top-[10%] lg:h-220 lg:w-220" />
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-center bg-size-[90px_90px] sm:bg-size-[110px_110px] lg:opacity-[0.14] lg:bg-size-[130px_130px]" />
      <div className="absolute inset-y-0 right-0 w-[30%] bg-[linear-gradient(90deg,rgba(7,21,34,0)_0%,rgba(114,86,58,0.22)_100%)] sm:w-[24%] lg:w-[22%]" />

      <Navbar
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenAuth={onOpenAuth}
        isLoggedIn={isLoggedIn}
      />
      <HeroContent onOpenAuth={onOpenAuth} />
    </main>
  )
}

export default HeroPage
