import {
  Check,
  ArrowRight,
  Cpu,
  Code,
  Cloud,
  Shield,
  Info,
} from "lucide-react";

export default function AllSetPage({ onNavigate }) {
  return (
    <div className="min-h-screen bg-[#F7F9FB] font-inter flex flex-col items-center">

      <div className="w-full max-w-[1440px] px-6 md:px-10 pt-[120px] md:pt-[160px] lg:pt-[180px] pb-[40px] flex justify-center flex-1">
        
        <div className="w-full max-w-[896px] grid grid-cols-1 md:grid-cols-2 gap-[32px] md:gap-[48px]">
          
          <div className="flex flex-col gap-8 items-center md:items-start">
            
            <div className="relative w-full max-w-[320px] h-[320px]">
              <div className="absolute inset-0 bg-[#0053DB]/5 blur-[32px] rounded-full"></div>

              <div className="relative w-full h-full bg-white border border-[#A9B4B91A] shadow-[0px_20px_50px_rgba(0,0,0,0.05)] rounded-[24px] flex items-center justify-center">
                
                <img
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a"
                  className="w-[192px] h-[192px] object-contain"
                />

                <div className="absolute bottom-[25px] right-[25px] w-[48px] h-[48px] bg-[#0053DB] rounded-full flex items-center justify-center shadow-[0px_10px_15px_rgba(0,0,0,0.1)]">
                  <Check size={20} color="white" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-w-[424px] text-center md:text-left">
              <h1 className="text-[28px] md:text-[36px] font-bold text-[#2A3439] leading-[40px] md:leading-[45px] tracking-[-0.72px]">
                All set!
              </h1>

              <p className="text-[14px] text-[#505157] leading-[21px] max-w-[384px] mx-auto md:mx-0">
                Here is what we found for you based on your interests.
                Your personalized expo experience is ready to launch.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">            
            <div className="bg-white border border-[#A9B4B926] shadow-[0px_12px_40px_rgba(0,0,0,0.06)] rounded-[24px] p-6 md:p-8 flex flex-col gap-8">
              
              <div className="flex flex-col gap-[8px]">
                <p className="text-[12px] font-bold tracking-[0.6px] uppercase text-[#566166]">
                  Selected Domain
                </p>

                <div className="flex items-center gap-3 px-4 py-3 rounded-[16px] bg-[#0053DB0D] border border-[#0053DB1A]">
                  <Cpu size={20} color="#0053DB" />
                  <span className="text-[16px] md:text-[18px] font-semibold text-[#2A3439]">
                    Technology
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <p className="text-[12px] font-bold tracking-[0.6px] uppercase text-[#566166]">
                  Interests & Specializations
                </p>

                <div className="flex flex-wrap gap-[10px] md:gap-[12px]">
                  {[
                    { label: "AI / ML", icon: <Cpu size={14} /> },
                    { label: "Software", icon: <Code size={14} /> },
                    { label: "Cloud Infra", icon: <Cloud size={14} /> },
                    { label: "Cybersecurity", icon: <Shield size={14} /> },
                  ].map((item) => (
                    <span
                      key={item.label}
                      className="flex items-center gap-2 px-4 md:px-5 py-[8px] md:py-[10px] rounded-full bg-[#E1E9EE] text-[13px] md:text-[14px] text-[#566166] font-medium"
                    >
                      {item.icon}
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="flex items-start md:items-center gap-4 p-4 bg-[#F0F4F7] rounded-[16px]">
              <div className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] bg-[#D9E4EA] rounded-full flex items-center justify-center">
                <Info size={16} color="#566166" />
                
              </div>
              
              <p className="text-[12px] text-[#566166] leading-[18px]">
                You can always update these preferences in your profile settings later.
              </p>
            </div>

          </div>

        </div>
      </div>
     <div className="fixed bottom-0 left-0 w-full h-[72px] flex justify-end items-center px-6 py-4 text-[12px] text-[#667085] space-x-3">

          <button
            onClick={() => onNavigate("interests")}
            className="h-[44px] px-6 rounded-[10px] border border-[#D0D5DD] text-[#344054] text-[14px] font-medium bg-white hover:bg-gray-50"
          >
            Back
          </button>

          <button
            onClick={() => onNavigate("register")}
            className="h-[44px] px-6 rounded-[10px] bg-[#0053DB] text-white text-[14px] font-semibold flex items-center gap-2 hover:bg-[#0041b3]"
          >
          Continue
            <ArrowRight size={16} />
          </button>

        </div>
      </div>

  );
}
