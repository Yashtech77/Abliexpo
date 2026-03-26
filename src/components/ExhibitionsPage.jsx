import { useEffect, useState } from "react";
import ExhibitionCard from "./ExhibitionCard";
import Navbar from "./Navbar";

function ExhibitionsPage({ currentPage, onNavigate, onOpenAuth, isLoggedIn }) {
  const [events, setEvents] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(events.length / itemsPerPage);
  const startIndex = (currentPageNo - 1) * itemsPerPage;
  const selectedEvents = events.slice(
    startIndex,
    Math.min(startIndex + itemsPerPage, events.length),
  );
  useEffect(() => {
    if (currentPageNo > totalPages) {
      setCurrentPageNo(totalPages || 1);
    }
  }, [events, totalPages]);
  useEffect(() => {
    setEvents([
      {
        id: 1,
        title: "INBIZ Expo!",
        date: "01 Mar 2022 onwards",
        stalls: 10,
        image: "https://via.placeholder.com/300",
        description: "INBIZ Expo!",
      },
      {
        id: 2,
        title: "Project Handmade",
        date: "21 Dec 2022 onwards",
        stalls: 21,
        image: "https://via.placeholder.com/300",
        description: "Virtual Exhibition for weavers...",
      },
      {
        id: 3,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 4,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 5,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 6,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 7,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 8,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 9,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 10,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 11,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 12,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 13,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 14,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 15,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 16,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 17,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
      {
        id: 18,
        title: "Ayush Expo",
        date: "03 Jul 2025 onwards",
        stalls: 8,
        image: "https://via.placeholder.com/300",
        description: "Wellness Goes Digital...",
      },
    ]);
  }, []);

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenAuth={onOpenAuth}
        isLoggedIn={isLoggedIn}
      />

      <div className="relative min-h-screen bg-[#071522] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,57,95,0.3),transparent_34%),linear-gradient(90deg,rgba(2,10,16,0.96),rgba(8,17,25,0.8)_72%,rgba(64,49,34,0.35))]" />
        <div className="relative z-10 px-4 md:px-10 py-6">
          <p className="text-gray-500 text-sm mb-4">Home &gt; Exhibitions</p>

          <h1 className="text-3xl font-bold mb-6 border-l-4 border-yellow-400 pl-3">
            Exhibitions
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">All Events</h2>

                <select className="border px-3 py-2 rounded">
                  <option>Category</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedEvents.map((item) => (
                  <ExhibitionCard key={item.id} data={item} />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[300px] space-y-6">
              <div className="bg-white text-black p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
                <p className="font-semibold mb-4 text-gray-500">
                  Want to take your business up to millions of viewers?
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl center w-full">
                  Create a Stall
                </button>
              </div>

              <div className="bg-white text-black p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md  ">
                <h3 className="font-semibold mb-2 text-gray-700 border-b border-gray-400">
                  Categories
                </h3>
                <input
                  className="w-full border border-gray-400 rounded px-3 py-2 mb-3"
                  placeholder="Search"
                />
                <button className="bg-green-500 text-white px-4 py-2 rounded-4xl w-full">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-12">
            <div className="flex items-center gap-3 flex-wrap justify-center">
             
              <button
                onClick={() =>
                  setCurrentPageNo((prev) => Math.max(prev - 1, 1))
                }
                className="px-4 py-2 border rounded-lg text-white hover:bg-white/10"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPageNo(num)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPageNo === num
                        ? "bg-yellow-400 text-black"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}
              <button
                onClick={() =>
                  setCurrentPageNo((prev) =>
                    prev < totalPages ? prev + 1 : prev,
                  )
                }
                className="px-4 py-2 border rounded-lg text-white hover:bg-white/10"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="mt-16 bg-gray-200 p-8 rounded">
            <h2 className="text-2xl font-bold border-l-4 border-yellow-400 pl-3 mb-4 text-gray-800">
              Upcoming Events
            </h2>
            <p className="text-gray-600">Not displaying any Expo currently.</p>
          </div>
          <div className="text-center mt-16 ">
            <h2 className="text-xl font-bold mb-8">
              Be a part of the future of virtual exhibiting
            </h2>
            <button className="bg-orange-500 text-white  px-8 py-3 rounded-4xl ">
              Create a Stall
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExhibitionsPage;
