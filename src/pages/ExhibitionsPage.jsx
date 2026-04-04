import React, { useEffect, useState } from "react";
import { Calendar, Share2 } from "lucide-react";
import PageShell from "../layout/PageShell";
import { Store } from "lucide-react";

const ExhibitionsPage = ({
  currentPage,
  onNavigate,
  onOpenAuth,
  isLoggedIn,
}) => {
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
        image:
          "https://cdn.phototourl.com/free/2026-04-03-b95e73fa-0e0d-4001-bc6c-1cb438170187.png",
      },
      {
        id: 2,
        category: "HEALTHCARE",
        title: "MedTech Innovation Expo",
        date: "NOV 04 - 06, 2024",
        stalls: 86,
        image:
          "https://cdn.phototourl.com/free/2026-04-03-570bf0e3-0431-407c-b1e0-b65cd6a134cd.png",
      },
      {
        id: 3,
        category: "ENERGY",
        title: "Green Power Summit",
        date: "DEC 02 - 04, 2024",
        stalls: 210,
        image:
          "https://cdn.phototourl.com/free/2026-04-03-0f5a4863-a754-4bea-9e22-bee1da4dbc2e.png",
      },
      {
        id: 4,
        category: "DESIGN",
        title: "Urban Future Design Forum",
        date: "JAN 15 - 18, 2025",
        stalls: 45,
        image:
          "https://cdn.phototourl.com/free/2026-04-03-79d79842-d3b2-44d4-85f9-7ea4fb41e96a.png",
      },
      {
        id: 5,
        category: "DESIGN",
        title: "Urban Future Design Forum",
        date: "JAN 15 - 18, 2025",
        stalls: 45,
        image:
          "https://cdn.phototourl.com/free/2026-04-03-79d79842-d3b2-44d4-85f9-7ea4fb41e96a.png",
      },
      {
        id: 6,
        category: "DESIGN",
        title: "Urban Future Design Forum",
        date: "JAN 15 - 18, 2025",
        stalls: 45,
        image:
          "https://cdn.phototourl.com/free/2026-04-03-79d79842-d3b2-44d4-85f9-7ea4fb41e96a.png",
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
        <div className="max-w-[1440px] mx-auto px-[32px] flex flex-col relative">
          <div className="pt-[32px] ">
            <div className="flex items-center gap-[8px] mb-2">
              <span className="text-sm text-gray-500">Exhibitions</span>
              <span className="text-[12px] text-gray-400">&gt;</span>
              <span className="text-sm text-gray-700">Events</span>
            </div>

            <div className="flex justify-between items-end w-full">
              <p className="text-[16px] text-[#566166]">
                Discover world-class events across global venues.
              </p>

              <div className="flex items-center gap-[16px]">
                <span className="text-[12px] font-bold tracking-[1.2px] text-[#566166]">
                  SORT BY
                </span>
                <select className="text-sm  rounded-md px-4 py-2 bg-gray-100">
                  <option>Newest First</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="max-w-[1396px] mx-auto mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
              {events
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .slice(0, 2)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[16px] shadow-[0_4px_20px_0px_#00000008] overflow-hidden lg:w-[682px] h-[377px]"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[224px] object-cover"
                      />

                      <span className="absolute top-[16px] left-[16px] bg-blue-600 text-white text-[10px] px-[12px] py-[4px] rounded-full font-bold tracking-[1px]">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-[24px] flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[8px] w-[634px] h-[16px] text-xs text-gray-500">
                        <Calendar size={14} className="text-blue-600" />
                        {item.date}
                      </div>

                      <h3 className="font-semibold text-gray-800 w-[634px] h-[36px] pb-[8px] leading-[18px]">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between w-[634px] h-[37px] pt-[16px] border-t border-[#F1F5F9] text-sm">
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

              {events
                .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                .slice(2, 4)
                .map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-[16px] shadow-[0_4px_20px_0px_#00000008] overflow-hidden lg:w-[682px] h-[377px]"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[224px] object-cover"
                      />

                      <span className="absolute top-[16px] left-[16px] bg-blue-600 text-white text-[10px] px-[12px] py-[4px] rounded-full font-bold tracking-[1px]">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-[24px] flex flex-col gap-[12px]">
                      <div className="flex items-center gap-[8px] w-[634px] h-[16px] text-xs text-gray-500">
                        <Calendar size={14} className="text-blue-600" />
                        {item.date}
                      </div>

                      <h3 className="font-semibold text-gray-800 w-[634px] h-[36px] pb-[8px] leading-[18px]">
                        {item.title}
                      </h3>

                      <div className="flex items-center justify-between w-[634px] h-[37px] pt-[16px] border-t border-[#F1F5F9] text-sm">
                        <div className="flex items-center gap-4 text-gray-500">
                          <div className="flex items-center gap-1">
                            <Store size={14} />
                            <span>{item.stalls} Stalls</span>
                          </div>
                          <Share2 size={15} className="h-[16.6px] w-[15px]" />
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

          <div className="mt-10 max-w-[1049px] mx-auto w-full px-[32px] pt-[16px] pb-[48px]">
            <div className="flex items-center justify-center gap-[8px]">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white text-[#64748B]"
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`w-[40px] h-[40px] flex items-center justify-center rounded-[8px] border text-[16px] ${
                      page === num
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-[#64748B] border-[#E2E8F0]"
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] border border-[#E2E8F0] bg-white text-[#64748B]"
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
