import { useState } from "react";
import ContactPage from "./components/ContactPage";
import HeroPage from "./components/HeroPage";
import ExhibitionsPage from "./sections/ExhibitionsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {currentPage === "login" && (
        <LoginPage
         onNavigate={setCurrentPage} 
          onLoginSuccess={() => {
            setIsLoggedIn(true);
            setCurrentPage("home");
          }}
        />
      )}
      {currentPage === "otp" && <OtpPage />}
      {currentPage === "home" && (
        <HomePage
          currentPage={currentPage}
          onNavigate={setCurrentPage} // 👈 important
          isLoggedIn={isLoggedIn}
        />
      )}

      {currentPage === "contact" && (
        <ContactPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isLoggedIn={isLoggedIn}
        />
      )}

      
      {currentPage === "exhibitions" && (
        <ExhibitionsPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isLoggedIn={isLoggedIn}
        />
      )}

    
      {currentPage === "hero" && (
        <HeroPage
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
}

export default App;