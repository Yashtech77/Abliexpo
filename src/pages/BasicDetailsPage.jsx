import { useState } from "react";
import {
  Check,
  Cpu,
  Activity,
  Briefcase,
  BookOpen,
  Feather,
  Car,
} from "lucide-react";

const data = [
  { title: "Technology", desc: "AI, Hardware, & Software" },
  { title: "Healthcare", desc: "Biotech & Medical Tech" },
  { title: "Business", desc: "Fintech & Entrepreneurship" },
  { title: "Education", desc: "EdTech & Digital Learning" },
  { title: "Fashion", desc: "Sustainable & Tech Wear" },
  { title: "Automotive", desc: "EVs & Smart Mobility" },
];

const iconMap = {
  Technology: Cpu,
  Healthcare: Activity,
  Business: Briefcase,
  Education: BookOpen,
  Fashion: Feather,
  Automotive: Car,
};
export default function BasicDetailsPage({ onNavigate }) {
  const [active, setActive] = useState("Technology");

  return (
    <div className="bg-white min-h-screen flex justify-center">

      <div className="w-full max-w-[900px] px-4 pt-12 pb-20 flex flex-col">

        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-Inter font-extrabold text-[#2A3439] leading-tight">
            What type of Expo are you interested in?
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#505157] max-w-[650px]">
            Select one to help us personalize your experience. Your choice will help us curate the most relevant exhibits and networking opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {data.map((item) => {
            const isActive = active === item.title;
            const Icon = iconMap[item.title];

            return (
              <div
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`relative h-[180px] p-6 rounded-xl cursor-pointer transition-all
                  ${
                    isActive
                      ? "bg-[#DBE1FF] border-2 border-[#0053DB]"
                      : "bg-white shadow-md hover:shadow-lg"
                  }`}
              >
                {isActive && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-[#0053DB] rounded-full flex items-center justify-center">
                    <Check size={14} color="white" strokeWidth={3} />
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4
                    ${isActive ? "bg-[#0053DB]" : "bg-[#D9E4EA]"}`}
                >
                  <Icon size={22} color={isActive ? "white" : "#566166"} />
                </div>

                <div>
                  <h3
                    className={`text-lg font-bold ${
                      isActive ? "text-[#0048BF]" : "text-[#2A3439]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      isActive ? "text-[#0048BF]/80" : "text-[#566166]"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 w-full flex flex-col sm:flex-row gap-4 p-6 bg-[#F0F4F7] rounded-xl">
          <div className="w-6 h-6 bg-[#0053DB] rounded-full mt-1" />
          <div>
            <h4 className="text-lg font-bold text-[#2A3439]">
              Can I change this later?
            </h4>
            <p className="mt-2 text-sm sm:text-base text-[#505157]">
              Yes, you can always explore other categories once you enter the virtual expo floor. This selection simply helps us set up your initial dashboard.
            </p>
          </div>
        </div>

        

        <div className="mt-10 text-center text-sm text-[#566166]">
          Already have an account?{" "}
          <span 
          onClick={() => onNavigate("login")}
           className="text-[#0053DB] cursor-pointer font-medium">
            Login
          </span>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-[72px] flex justify-end items-center px-6 py-4 text-[12px] text-[#667085] space-x-3">
          <button
  onClick={() => onNavigate("home")}
  className="h-11 px-5 rounded-lg border border-[#D0D5DD] text-[#344054]"
>
  Back
</button>

          <button
  onClick={() => onNavigate("interests")}
  className="h-11 px-5 rounded-lg bg-[#0053DB] text-white font-semibold">
  Next
</button>
        </div>
      </div>
    </div>
  );
}
