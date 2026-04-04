import React, { useState } from "react";
import PageShell from "../layout/PageShell";
import {
  Cpu,
  Bot,
  Rocket,
  Users,
  Share2,
  Calendar,
  Store,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const EventDetailsPage = ({ event, onNavigate, isLoggedIn }) => {
  const dummyCards = Array(8).fill({
    title: "Global Tech Summit",
    date: "October 12-14, 2024",
    category: "Tech - Innovation",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const totalPages = Math.ceil(dummyCards.length / eventsPerPage);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = dummyCards.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <PageShell onNavigate={onNavigate} isLoggedIn={isLoggedIn}>
      <div className="max-w-[1464px] mx-auto px-4 lg:px-8 py-6 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative bg-white rounded-2xl border border-[#D2D2D2] shadow-[1px_2px_2px_#CBCBCB] overflow-hidden w-full h-[435px] flex flex-col">
            <div className="relative w-full h-[320px] shrink-0">
              <img
                src={event?.image}
                alt="Event"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                TECHNOLOGY
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar size={14} className="text-blue-600" />
                  <span>{event?.date || "October 12-14, 2024"}</span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {event?.title || "Global AI & Robotics Summit 2024"}
                </h2>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <Store size={16} className="text-gray-400" />
                  <span className="text-sm font-medium">
                    {event?.stalls || 124} Stalls
                  </span>
                </div>

                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                  <Share2 size={18} className="cursor-pointer text-blue-800" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start p-10 gap-6 bg-white border border-black/10 shadow-[0px_3px_2.8px_#AAAAAA] rounded-2xl w-full h-[435px] isolate">
            <div className="flex flex-col items-start p-0 w-full shrink-0">
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                About This Expo
              </h3>
            </div>

            <div className="flex flex-col items-start p-0 w-full shrink-0">
              <p className="text-[15px] leading-relaxed text-gray-600">
                This expo brings together global leaders in AI, robotics, and
                emerging technologies. Explore innovations, connect with
                companies, and discover future-ready solutions designed to
                redefine the industrial landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 bg-[#F0F4F7] p-4 rounded-xl min-w-0">
                <div className="flex-shrink-0 flex items-center justify-center bg-[#0053DB]/10 w-9 h-9 rounded-lg">
                  <Cpu size={18} className="text-[#0053DB]" />
                </div>
                <span className="text-[12px] font-bold text-gray-700 whitespace-nowrap overflow-hidden">
                  AI Innovation
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#F0F4F7] p-4 rounded-xl min-w-0">
                <div className="flex-shrink-0 flex items-center justify-center bg-[#0053DB]/10 w-9 h-9 rounded-lg">
                  <Bot size={18} className="text-[#0053DB]" />
                </div>
                <span className="text-[12px] font-bold text-gray-700 whitespace-nowrap overflow-hidden">
                  Robotics Showcase
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#F0F4F7] p-4 rounded-xl min-w-0">
                <div className="flex-shrink-0 flex items-center justify-center bg-[#0053DB]/10 w-9 h-9 rounded-lg">
                  <Rocket size={18} className="text-[#0053DB]" />
                </div>
                <span className="text-[12px] font-bold text-gray-700 whitespace-nowrap overflow-hidden">
                  Startup Exhibitions
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#F0F4F7] p-4 rounded-xl min-w-0">
                <div className="flex-shrink-0 flex items-center justify-center bg-[#0053DB]/10 w-9 h-9 rounded-lg">
                  <Users size={18} className="text-[#0053DB]" />
                </div>
                <span className="text-[12px] font-bold text-gray-700 whitespace-nowrap overflow-hidden">
                  Networking Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="w-6 h-[2px] bg-orange-500"></span>
          Exhibitions &gt; Events &gt; Stalls
        </div>

        <div className="grid lg:grid-cols-4 gap-6 w-full h-[1053]">
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pb-8">
              {currentEvents.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col w-full max-w-[320px] h-[276px] mx-auto"
                >
                  <div className="relative h-[192px] w-full shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="font-bold text-sm text-gray-800 truncate">
                      {card.title}
                    </h3>

                    <div className="flex items-center gap-2 text-[11px] ">
                      <Calendar size={14} className="text-blue-600 shrink-0" />
                      <span className="truncate ">{card.date}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <p className="text-[10px] font-medium  uppercase tracking-tighter">
                        {card.category}
                      </p>
                      <button className="hover:scale-110 transition-transform">
                        <Share2 size={16} className="text-blue-800" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-[32px] shadow-[0px_20px_50px_rgba(0,0,0,0.04)] border border-[#F1F5F9] p-8 flex flex-col gap-6 w-[320px] h-[459.43px]">
              <div className="flex items-center justify-center w-14 h-14 bg-[#0053DB]/10 rounded-2xl flex-shrink-0">
                <Store className="text-[#0053DB]" size={28} />
              </div>

              <div className="flex flex-col gap-[10.8px] flex-grow">
                <h3 className="text-[20px] font-bold text-gray-900 leading-tight">
                  Looking to exhibit?
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Elevate your brand with premium stall placements and targeted
                  visitor engagement strategies.
                </p>

                <ul className="space-y-3 mt-2">
                  {[
                    "Global Audience Access",
                    "Smart Analytics Suite",
                    "24/7 Logistics Support",
                  ].map((text) => (
                    <li
                      key={text}
                      className="flex items-center gap-2 text-[13px] font-semibold text-gray-700"
                    >
                      <CheckCircle2 size={18} className="text-[#0053DB]" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full h-[57.63px] bg-[#0053DB] shadow-[0px_10px_20px_rgba(0,83,219,0.2)] hover:bg-[#0042b3] text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                Create a Stall
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex flex-col items-start p-8 gap-6 bg-white border border-[#F1F5F9] rounded-[32px] w-[320px] h-[218px]">
              <div className="flex flex-col items-start p-0 w-full h-4 shrink-0">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                  Filter Categories
                </h4>
              </div>

              <div className="flex flex-wrap items-start content-start gap-x-2 gap-y-3 w-full h-[112px]">
                <span className="px-4 py-2 bg-[#0053DB] text-white rounded-full text-xs font-semibold cursor-pointer shadow-[0px_4px_10px_rgba(0,83,219,0.2)] transition-all">
                  All Events
                </span>

                {[
                  "Technology",
                  "Healthcare",
                  "Real Estate",
                  "Education",
                  "E-Commerce",
                ].map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-[#F8FAFC] text-gray-500 border border-[#F1F5F9] rounded-full text-xs font-medium cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 w-full py-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg disabled:opacity-20 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={18} strokeWidth={3} className="text-[#2A3439]" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded-lg text-base font-bold transition-all ${
                currentPage === index + 1
                  ? "bg-[#0053DB] text-white shadow-[0px_4px_10px_rgba(0,83,219,0.3)]"
                  : "bg-white border border-[#E2E8F0] text-gray-700 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 bg-white border border-[#E2E8F0] rounded-lg disabled:opacity-20 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight
              size={18}
              strokeWidth={3}
              className="text-[#2A3439]"
            />
          </button>
        </div>
      </div>
    </PageShell>
  );
};

export default EventDetailsPage;
