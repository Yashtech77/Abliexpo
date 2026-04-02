import React, { useEffect, useState } from "react";
import { Calendar, Share2 } from "lucide-react";
import PageShell from "../layout/PageShell";
import { Store } from "lucide-react";

const ExhibitionsPage = ({ currentPage, onNavigate, onOpenAuth, isLoggedIn  }) => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        category: "TECHNOLOGY",
        title: "Global AI & Robotics Summit 2024",
        date: "OCT 12 - 15, 2024",
        stalls: 124,
        image: "https://media.licdn.com/dms/image/v2/C4E12AQH_AlY4IxPkvQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1536700583866?e=2147483647&v=beta&t=-wSVjQ1r6e90C1Xa3K8R0-5guBveeRjjCltPaqdRXEU",
      },
      {
        id: 2,
        category: "HEALTHCARE",
        title: "MedTech Innovation Expo",
        date: "NOV 04 - 06, 2024",
        stalls: 86,
        image: "https://cdn.renderhub.com/unrealdeveloper/exhibition-booth-stand-3d-model-trade-show-3d-model-11/exhibition-booth-stand-3d-model-trade-show-3d-model-11-06.jpg",
      },
      {
        id: 3,
        category: "ENERGY",
        title: "Green Power Summit",
        date: "DEC 02 - 04, 2024",
        stalls: 210,
        image: "https://static.vecteezy.com/system/resources/thumbnails/027/078/378/small/solar-energy-revolution-embracing-sustainability-through-solar-panels-for-clean-renewable-power-generative-ai-photo.jpg",
      },
      {
        id: 4,
        category: "DESIGN",
        title: "Urban Future Design Forum",
        date: "JAN 15 - 18, 2025",
        stalls: 45,
        image: "https://archello.s3.eu-central-1.amazonaws.com/images/2023/05/12/3333-FP855954-indesign.1683872581.0684.jpg",
      },
       {
        id: 5,
        category: "DESIGN",
        title: "Urban Future Design Forum",
        date: "JAN 15 - 18, 2025",
        stalls: 45,
        image: "https://archello.s3.eu-central-1.amazonaws.com/images/2023/05/12/3333-FP855954-indesign.1683872581.0684.jpg",
      },
       {
        id: 6,
        category: "DESIGN",
        title: "Urban Future Design Forum",
        date: "JAN 15 - 18, 2025",
        stalls: 45,
        image: "https://archello.s3.eu-central-1.amazonaws.com/images/2023/05/12/3333-FP855954-indesign.1683872581.0684.jpg",
      },
    ];

    setEvents(mockData);
  }, []);

  return (
    <PageShell
      background="about" 
      currentPage={page}
      onNavigate={onNavigate}
      onOpenAuth={onOpenAuth}
      isLoggedIn={isLoggedIn}
    >
      <div className="relative z-10 w-full min-h-screen">
      
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-6 pb-12">
         
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
              Exhibitions &gt; Events
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-600 text-sm">
                Discover world-class events across global venues.
              </p>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">SORT BY</span>
                <select className="text-sm  rounded-md px-4 py-2 bg-gray-100">
                  <option>Newest First</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>


          <div className="max-w-[1396px] mx-auto mt-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[48px]">
              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                {events
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .slice(0, 2)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[220px] object-cover"
                        />

                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Calendar size={14} className="text-blue-600" />
                          {item.date}
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <div className="w-full h-[1px] bg-gray-200 my-3"></div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4 text-gray-500">
                            <div className="flex items-center gap-1">
                              <Store size={14} />
                              <span>{item.stalls} Stalls</span>
                            </div>
                            <Share2
                              size={16}
                              className="cursor-pointer text-blue-800"
                            />
                          </div>

                          <button className="text-blue-600 font-medium text-sm">
                            View Expo →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex flex-col gap-6 w-full lg:w-1/2">
                {events
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .slice(2, 4)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[220px] object-cover"
                        />

                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <Calendar size={14} className="text-blue-600" />
                          {item.date}
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-3">
                          {item.title}
                        </h3>
                        <div className="w-full h-[1px] bg-gray-200 my-3"></div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-4 text-gray-500">
                            <div className="flex items-center gap-1">
                              <Store size={14} />
                              <span>{item.stalls} Stalls</span>
                            </div>
                            <Share2
                              size={16}
                              className="cursor-pointer text-blue-800"
                            />
                          </div>

                          <button className="text-blue-600 font-medium text-sm">
                            View Expo →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-[1280px] mx-auto px-4 md:px-8 py-4">
            <div className="flex items-center justify-center gap-3 text-sm">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="px-3 py-1 text-gray-500 hover:text-black bg-white rounded-md"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => page <= Math.ceil(events.length / 4)) 
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setPage(page)}
                    className={`px-3 py-1 rounded-md transition bg-white  ${
                      page === currentPage
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              <button
                onClick={() =>
                  setPage((p) => Math.min(p + 1, Math.ceil(events.length / 4)))
                }
                className="px-3 py-1 text-gray-500 hover:text-black bg-white rounded-md"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default ExhibitionsPage;
