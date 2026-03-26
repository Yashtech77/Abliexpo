import { useState, useEffect, useRef } from "react";
import { LoginIcon } from "./Icons";
import { authActions, navigationItems } from "./landingPageData";

function Navbar({ currentPage, onNavigate, onOpenAuth, isLoggedIn }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const publicNavItems = [
    { label: "Home", page: "home" },
    { label: "Contact Us", page: "contact" },
  ];

  const privateNavItems = [
    { label: "Home", page: "home" },
    { label: "Exhibitions", page: "exhibitions" },
    { label: "Webinars", page: "webinars" },
    { label: "About Us", page: "about" },
    { label: "Contact Us", page: "contact" },
  ];
  return (
    <header className="relative z-10 border-b border-white/10 bg-black/45">
      <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 sm:py-5 lg:px-16 lg:py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("home");
            }}
            className="text-[1.8rem] font-semibold tracking-[-0.06em]"
          >
            Abli<span className="font-light">EXpo</span>
          </a>

          {isLoggedIn && (
            <nav className="hidden md:flex items-center gap-8 text-white">
              {privateNavItems.map(({ label, page }) => (
                <button
                  key={label}
                  onClick={() => onNavigate(page)}
                  className="hover:text-[#f4d600]"
                >
                  {label}
                </button>
              ))}
            </nav>
          )}

          <div className="hidden items-center gap-10 text-[1.05rem] md:flex">
            {!isLoggedIn ? (
              authActions.map(({ label, isPrimary }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => onOpenAuth(label.toLowerCase())}
                  className={
                    isPrimary
                      ? "flex items-center gap-3 font-semibold text-[#f4d600]"
                      : "text-white transition hover:text-[#f4d600]"
                  }
                >
                  {isPrimary ? <LoginIcon /> : null}
                  <span>{label}</span>
                </button>
              ))
            ) : (
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="text-white font-semibold"
                >
                  👤 Aditi Kalwaghe
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <button className="block w-full px-4 py-2 hover:bg-gray-100">
                      My Dashboard
                    </button>
                    <button className="block w-full px-4 py-2 hover:bg-gray-100">
                      Change Password
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="block w-full px-4 py-2 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {!isLoggedIn && (
          <div className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.98rem] sm:text-[1.05rem]">
              {publicNavItems.map(({ label, page }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => onNavigate(page)}
                  className={
                    currentPage === page
                      ? "font-semibold text-[#f4d600]"
                      : "text-white transition hover:text-[#f4d600]"
                  }
                  aria-current={currentPage === page ? "page" : undefined}
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base md:hidden">
              {authActions.map(({ label, isPrimary }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => onOpenAuth(label.toLowerCase())}
                  className={
                    isPrimary
                      ? "rounded-full bg-[#f4d600] px-5 py-2.5 font-semibold text-[#071522] transition hover:bg-[#ffe75a]"
                      : "rounded-full border border-white/15 px-5 py-2.5 font-semibold text-white transition hover:border-[#f4d600] hover:text-[#f4d600]"
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
