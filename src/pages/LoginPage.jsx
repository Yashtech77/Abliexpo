import React from "react";

export default function Login({ onNavigate }) {
  return (
    <div className="flex h-screen w-full bg-[#F7F9FB] font-inter overflow-hidden">
      
      <div className="relative hidden w-[55%] items-center justify-center bg-[#D1E4FF] p-12 md:flex overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40 blur-[120px]"></div>
        
        <div className="relative z-10 max-w-xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-[2px] w-10 bg-[#0053DB]"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0053DB]">
              Next Gen Events
            </span>
          </div>

          <h1 className="mb-6 text-[64px] font-extrabold leading-[1.1] tracking-tight text-[#0053DB]">
            Welcome to <br /> EkspansExpo
          </h1>

          <p className="mb-10 max-w-md text-[18px] leading-relaxed text-[#566166]">
            Explore global exhibitions like never before. Connect with innovators in immersive virtual spaces.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200 shadow-sm">
                  <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="user" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#566166]">
              Join 50k+ curators worldwide
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-6 bg-[#F7F9FB]">
        
        <div className="flex h-[574px] w-[448px] flex-col gap-[32px] rounded-[12px] border border-[rgba(169,180,185,0.1)] bg-white p-[40px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] box-border">
          
          <div className="flex w-[366px] flex-col gap-[8px]">
            <h2 className="text-[30px] font-bold leading-[36px] tracking-[-0.75px] text-[#2A3439]">
              Login
            </h2>
            <p className="text-[14px] leading-[20px] text-[#566166]">
              Enter your details to receive a secure login code.
            </p>
          </div>
          <form className="flex w-[366px] flex-col gap-[24px]" onSubmit={(e) => e.preventDefault()}>
            
            <div className="relative h-[56px] w-full">
              <input
                type="text"
                placeholder="Email address or Phone number"
                className="h-full w-full rounded-[12px] bg-[#F0F4F7] px-[16px] text-[14px] text-[#2A3439] placeholder-[#566166] outline-none focus:ring-2 focus:ring-[#0053DB]/20"
              />
            </div>
            <button onClick={() => onNavigate("otp")}
            className="h-[56px] w-full rounded-[12px] bg-gradient-to-r from-[#0053DB] to-[#0048C1] text-[16px] font-bold text-[#F8F7FF] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform">
              Get OTP
            </button>

            <div className="flex h-[48px] items-center py-[16px]">
              <div className="h-[1px] flex-1 border-t border-[rgba(169,180,185,0.2)]"></div>
              <span className="px-[16px] text-[12px] font-bold uppercase tracking-[1.2px] text-[#566166]">
                OR
              </span>
              <div className="h-[1px] flex-1 border-t border-[rgba(169,180,185,0.2)]"></div>
            </div>

            <div className="flex flex-col gap-[12px]">
            
              <button className="flex h-[50px] items-center justify-center gap-[12px] rounded-[12px] border border-[rgba(169,180,185,0.3)] bg-white hover:bg-gray-50 transition-colors">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" />
                <span className="text-[14px] font-medium text-[#2A3439]">Continue with Google</span>
              </button>

              <div className="flex gap-[12px]">
              
                <button className="flex h-[50px] flex-1 items-center justify-center gap-[8px] rounded-[12px] border border-[rgba(169,180,185,0.3)] bg-white hover:bg-gray-50 transition-colors">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="h-5 w-5" />
                  <span className="text-[14px] font-medium text-[#2A3439]">Facebook</span>
                </button>
                <button className="flex h-[50px] flex-1 items-center justify-center gap-[8px] rounded-[12px] border border-[rgba(169,180,185,0.3)] bg-white hover:bg-gray-50 transition-colors">
                 <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" className="h-5 w-5" />
                  <span className="text-[14px] font-medium text-[#2A3439]">LinkedIn</span>
                </button>
              </div>
            </div>
          </form>

          <p className="text-center text-[14px] text-[#566166]">
            Don’t have an account? <button className="font-bold text-[#0053DB] hover:underline">Register Now</button>
          </p>

        </div>
      </div>
    </div>
  );
}
