import PageShell from '../layout/PageShell'
import HomeHeroSection from '../sections/HomeHeroSection'

function HomePage({ currentPage, onNavigate,isLoggedIn  }) {
  return (
    <PageShell
      background="about"
      currentPage={currentPage}
      onNavigate={onNavigate}
      isLoggedIn={isLoggedIn}
      
    >
      <HomeHeroSection  />
    </PageShell>
  )
}

export default HomePage
