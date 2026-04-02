import { useState } from "react";
import { Search, Check } from "lucide-react";

export default function InterestsPage({ onNavigate }) {
  const [selected, setSelected] = useState(["AI/ML", "Cybersecurity"]);

  const tags = ["AI/ML", "Cybersecurity", "Software", "Hardware", "Cloud"];

  const toggleTag = (tag) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((t) => t !== tag));
    } else {
      setSelected([...selected, tag]);
    }
  };
  return (
    <div className="min-h-screen bg-[#F7F9FB] flex justify-center px-4 py-16">
      <div className="w-full max-w-[768px]">

        <div className="mb-8">
          <h1 className="text-[36px] font-extrabold text-[#2A3439] tracking-[-0.9px]">
            Select your interests
          </h1>
          <p className="mt-4 text-[16px] leading-[26px] text-[#505157] max-w-[448px]">
            Choose specific topics that interest you under Technology.
          </p>
        </div>
        <div className="relative mb-10">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#717C82]"
          />
          <input
            type="text"
            placeholder="Search subcategories..."
            className="w-full h-[55px] pl-12 pr-4 rounded-[12px] bg-[#e2e9f1] text-[16px] outline-none"
          />
        </div>
        <div className="mb-12">
          <h3 className="text-[16px] font-bold tracking-[1.6px] text-[#566166] uppercase mb-4">
            Technology Focus
          </h3>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => {
              const isActive = selected.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-medium transition
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#0053DB] to-[#0048C1] text-white"
                        : "bg-[#D9E4EA] text-[#566166]"
                    }`}
                >
                  {tag}
                  {isActive && <Check size={12} />}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          <div className="bg-[#F0F4F7] rounded-[16px] p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-[18px] font-bold text-[#2A3439]">
                Emerging Tech
              </h3>
              <p className="mt-2 text-[14px] text-[#505157]">
                Explore the latest in Quantum, Web3, and Biotech.
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              <span className="px-4 py-1 text-[12px] font-semibold bg-white rounded-full text-[#566166]">
                Quantum
              </span>
              <span className="px-4 py-1 text-[12px] font-semibold bg-white rounded-full text-[#566166]">
                Web3
              </span>
            </div>
          </div>
          <div className="relative h-[236px] rounded-[16px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-[18px] font-bold text-white">
                Curated Tracks
              </h3>
              <p className="text-[14px] text-white/70">
                Join pre-made paths for developers
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-[72px] flex justify-end items-center px-6 py-4 text-[12px] text-[#667085] space-x-3">
  
  <button
    onClick={() => onNavigate("basic")}
    className="h-11 px-5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
  >
    Back
  </button>

  <button
   onClick={() => onNavigate("allset")}
    className="h-11 px-6 rounded-lg bg-[#0053DB] text-white font-semibold hover:bg-[#0048C1] transition"
  >
    Next
  </button>

</div>
      </div>
    </div>
  );
}