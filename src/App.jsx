import { useState } from 'react'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import RegisterPage from "./pages/RegisterPage";
import BasicDetailsPage from "./pages/BasicDetailsPage";
import InterestsPage from "./pages/InterestsPage";
import AllSetPage from "./pages/AllSetPage";
import RegisterOtpPage from "./pages/RegisterOtpPage";

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
      {currentPage === "home" && (
        <HomePage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
        />
      )}

      {currentPage === "contact" && (
        <ContactPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onOpenAuth={openAuthView}
        />
      )}

      {currentPage === "about" && (
        <AboutUsPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onOpenAuth={openAuthView}
        />
      )}

      {currentPage === "login" && (
        <LoginPage onNavigate={setCurrentPage} />
      )}

      {currentPage === "register" && (
        <RegisterPage onNavigate={setCurrentPage} />
      )}

      {currentPage === "basic" && (
        <BasicDetailsPage onNavigate={setCurrentPage} />
      )}

      {currentPage === "otp" && (
        <OtpPage onNavigate={setCurrentPage} />
      )}
      
{currentPage === "register-otp" && (
  <RegisterOtpPage onNavigate={setCurrentPage} />
)}
      {currentPage === "interests" && (
        <InterestsPage onNavigate={setCurrentPage} />
      )}

      {currentPage === "allset" && (
        <AllSetPage onNavigate={setCurrentPage} />
      )}
    </>
  );
}

export default App