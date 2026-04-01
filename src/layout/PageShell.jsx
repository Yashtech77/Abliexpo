import AuroraBackground from '../components/AuroraBackground'
import Navbar from '../components/Navbar'

function ContactBackground({ children }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071522] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,77,124,0.35),transparent_36%),linear-gradient(135deg,rgba(4,10,18,0.98),rgba(7,21,34,0.92)_52%,rgba(90,64,34,0.42))]" />
      <div className="absolute inset-y-0 right-[-18%] top-[4%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,_rgba(244,214,0,0.16)_0%,_rgba(244,214,0,0.02)_42%,_transparent_70%)] blur-3xl sm:right-[-10%] sm:top-[8%] sm:h-[36rem] sm:w-[36rem] lg:h-[44rem] lg:w-[44rem]" />
      <div className="absolute left-[-10%] top-[22%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(95,137,207,0.24)_0%,_transparent_68%)] blur-3xl sm:left-[-6%] sm:h-[28rem] sm:w-[28rem] lg:h-[34rem] lg:w-[34rem]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-position:center] [background-size:90px_90px] sm:[background-size:110px_110px] lg:opacity-[0.14] lg:[background-size:120px_120px]" />
      <div className="relative z-10">{children}</div>
    </main>
  )
}

function PageShell({
  background = 'aurora',
  currentPage,
  onNavigate,
  onOpenAuth,
  children,
}) {
  const content = (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenAuth={onOpenAuth}
        variant={background === 'contact' ? 'dark' : 'light'}
      />
      {children}
    </>
  )

  if (background === 'contact') {
    return <ContactBackground>{content}</ContactBackground>
  }

  return <AuroraBackground>{content}</AuroraBackground>
}

export default PageShell
