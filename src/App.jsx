import { useState } from 'react'
import AuthModal from './components/AuthModal'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {
  const [authView, setAuthView] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

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
        />
      ) : (
        <HomePage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onOpenAuth={openAuthView}
        />
      )}
      <AuthModal
        authView={authView}
        onClose={closeAuthView}
        onToggleView={toggleAuthView}
      />
    </>
  )
}

export default App