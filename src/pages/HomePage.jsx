import PageShell from '../layout/PageShell'
import HomeHeroSection from '../sections/HomeHeroSection'

function HomePage({ currentPage, onNavigate, }) {
  return (
    <PageShell
      currentPage={currentPage}
      onNavigate={onNavigate}
      
    >
      <HomeHeroSection  />
    </PageShell>
  )
}

export default HomePage