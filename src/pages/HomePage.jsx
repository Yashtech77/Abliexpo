import PageShell from '../layout/PageShell'
import HomeHeroSection from '../sections/HomeHeroSection'

function HomePage({ currentPage, onNavigate, onOpenAuth }) {
  return (
    <PageShell
      currentPage={currentPage}
      onNavigate={onNavigate}
      onOpenAuth={onOpenAuth}
    >
      <HomeHeroSection onOpenAuth={onOpenAuth} />
    </PageShell>
  )
}

export default HomePage
