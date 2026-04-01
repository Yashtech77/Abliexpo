import React, { useRef, useEffect } from "react";

const countriesData = [
  { name: "Singapore", flag: "https://flagcdn.com/w80/sg.png" },
  { name: "Ghana", flag: "https://flagcdn.com/w80/gh.png" },
  { name: "Kenya", flag: "https://flagcdn.com/w80/ke.png" },
  { name: "UK", flag: "https://flagcdn.com/w80/gb.png" },
  { name: "India", flag: "https://flagcdn.com/w80/in.png" },
  { name: "Germany", flag: "https://flagcdn.com/w80/de.png" },
];

const GlobalPresence = () => {
  const scrollRef = useRef();

  const countries = [...countriesData, ...countriesData];

  const scroll = (dir) => {
    const container = scrollRef.current;
    container.scrollBy({
      left: dir === "left" ? -220 : 220,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    const autoScroll = setInterval(() => {
      container.scrollBy({ left: 1, behavior: "auto" });

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div>

      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-black">
            List of Countries
          </h2>
          <p className="text-gray-500 mt-2">
            You can choose featured project in event detail
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="relative flex items-center">

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10  border shadow w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden px-12"
          >
            {countries.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow min-w-[180px] flex-shrink-0"
              >
                <img
                  src={c.flag}
                  alt={c.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium text-black whitespace-nowrap">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10  border shadow w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
          >
            ›
          </button>

        </div>
      </div>

      <div
        className="relative text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center w-full px-6">

            <div><p>Total Exhibitions</p><h2 className="text-4xl font-bold">84</h2></div>
            <div><p>Subdomain / Client</p><h2 className="text-4xl font-bold">1</h2></div>
            <div><p>Ongoing Exhibitions</p><h2 className="text-4xl font-bold">29</h2></div>
            <div><p>Industries</p><h2 className="text-4xl font-bold">435</h2></div>

          </div>
        </div>
      </div>

      <div className="py-16 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-12 text-center items-center">

          <div>
            <h2 className="text-2xl font-semibold text-black">
              Our Partners
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>

            <div className="flex justify-center items-center gap-12">
              <img src="https://ablifreefiles.blob.core.windows.net/expo-image/9af60fda-864f-4be3-923a-39adbdd708a6.png" className="h-12" />
              <img src="https://ablifreefiles.blob.core.windows.net/expo-image/ac25bd63-e71f-4c91-aca2-eaf88a90859e.png" className="h-12" />
              <img src="https://ablifreefiles.blob.core.windows.net/expo-image/1b44eeb2-c984-4e33-818f-55c581849d8b.png" className="h-12" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black">
              Associate Organizers
            </h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-3 mb-8"></div>

            <div className="flex justify-center">
              <img src="https://ablifreefiles.blob.core.windows.net/expo-image/ef88c510-9fb6-4dc5-836d-ddcb86855602.png" className="h-12" />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GlobalPresence;