import { useState } from 'react'
import AuthModal from './components/AuthModal'
import HeroPage from './components/HeroPage'

function App() {
  const [authView, setAuthView] = useState(null)

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
      <HeroPage onOpenAuth={openAuthView} />
      <AuthModal
        authView={authView}
        onClose={closeAuthView}
        onToggleView={toggleAuthView}
      />
    </>
  )
}

export default App
