import { useState } from 'react'
import AuthModal from './components/AuthModal'
import ContactPage from './components/ContactPage'
import HeroPage from './components/HeroPage'
import ExhibitionsPage from "./components/ExhibitionsPage"

function App() {
  const [authView, setAuthView] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const openAuthView = (view) => {
    setAuthView(view)
  }

  const closeAuthView = () => {
    setAuthView(null)
  }

  const toggleAuthView = () => {
    setAuthView((currentView) =>
      currentView === 'login' ? 'register' : 'login',
    )
  }

  return (
    <>
      {currentPage === 'contact' ? (
        <ContactPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onOpenAuth={openAuthView}
          isLoggedIn={isLoggedIn}
        />
      ) : currentPage === 'exhibitions' ? (  
      <ExhibitionsPage
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenAuth={openAuthView}
        isLoggedIn={isLoggedIn}
      />
    ) 
      
      
      : (
        <HeroPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onOpenAuth={openAuthView}
          isLoggedIn={isLoggedIn}
        />
      )}
      <AuthModal
        authView={authView}
        onClose={closeAuthView}
        onToggleView={toggleAuthView}
         onLoginSuccess={() => {
    setIsLoggedIn(true)
    setAuthView(null)
    setCurrentPage('home')
  }}
        
      />
    </>
  )
}

export default App
