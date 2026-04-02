import React from "react";

export default function OtpPage() {
  return (
    <div className="flex h-screen w-full bg-[#F7F9FB] font-inter">

      <div className="relative hidden w-1/2 md:flex">

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,83,219,0.9)_0%,rgba(0,72,193,0.8)_50%,rgba(0,72,193,0)_100%)]"></div>

        <div className="relative z-10 flex flex-col justify-center px-[96px] text-white">
          
          <h1 className="text-[60px] leading-[60px] font-extrabold tracking-[-3px]">
            Welcome to <br /> EkspansExpo
          </h1>

          <p className="mt-6 max-w-[512px] text-[24px] leading-[32px] text-white/80">
            Explore global exhibitions like never before.
          </p>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center px-[48px]">

        <div className="w-[480px]">

          <div className="relative flex flex-col gap-[40px] rounded-[12px] border border-[rgba(169,180,185,0.1)] bg-white px-[48px] pt-[48px] pb-[64px] shadow-[0px_12px_40px_-12px_rgba(42,52,57,0.06)]">

            <div className="flex flex-col gap-[12px]">
              <h2 className="text-[30px] font-light tracking-[-0.75px] text-[#2A3439]">
                Verify your identity
              </h2>
              <p className="text-[16px] leading-[26px] text-[#505157]">
                We’ve sent a 6-digit code to your mobile number and email.
              </p>
            </div>

            <div className="flex justify-between">
              {[...Array(6)].map((_, i) => (
                <input
                  key={i}
                  maxLength={1}
                  className="h-[64px] w-[56px] rounded-[8px] bg-[#F0F4F7] text-center text-[20px] font-bold text-[#6B7280] outline-none"
                />
              ))}
            </div>
            <button className="flex h-[58px] w-full items-center justify-center rounded-full bg-[#0053DB] text-[16px] font-bold text-white">
              Verify & Login →
            </button>
            <div className="flex flex-col items-center gap-[8px] text-center">
              <p className="text-[14px] text-[#566166]">
                Didn’t receive the code?
              </p>
              <p className="text-[14px] font-bold text-[#0053DB]">
                Resend in 00:59
              </p>
            </div>

            <div className="border-t pt-[16px] text-center text-[14px] text-[#566166]">
              ✏️ Change email or phone number
            </div>

          </div>
          <div className="mt-[24px] flex justify-center gap-[24px] text-[12px] text-[#566166]/60">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Help Center</span>
          </div>

        </div>
      </div>
    </div>
  );
} 
