import { useState } from "react";
import { CheckSquare } from "lucide-react";
export default function RegisterPage({ onNavigate }) {
  const [form, setForm] = useState({
    name: "",
    country: "India",
    mobile: "",
    email: "",
    company: "",
    agree: false,
  });

  return (
    <div className="min-h-screen bg-[#F7F9FB] font-inter flex flex-col justify-between items-center px-6">

      <div className="flex-1 w-full flex items-center justify-center py-24">
        <div className="w-full max-w-[420px] bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#E5E7EB] p-8 flex flex-col gap-5">

          <div>
            <h1 className="text-[24px] font-bold text-[#2A3439]">Register</h1>
            <p className="text-[12px] text-[#667085]">(100% free)</p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-[#667085] font-semibold uppercase">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="h-[40px] px-3 rounded-[10px] bg-[#F2F4F7] outline-none text-[14px] text-[#2A3439] placeholder-[#6B7280]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-[#667085] font-semibold uppercase">
              Country
            </label>
            <select className="h-[40px] px-3 rounded-[10px] bg-[#F2F4F7] outline-none text-[14px] text-[#2A3439]">
              <option>India</option>
              <option>USA</option>
            </select>
          </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  
  <div className="flex flex-col">
    <label className="text-[11px] text-[#667085] font-semibold uppercase">
      MOBILE
    </label>
    <input
      type="text"
      placeholder="+91 98765 43210"
      className="h-[40px] px-3 rounded-[10px] bg-[#F2F4F7] outline-none text-[14px] text-[#2A3439] placeholder-[#6B7280]"
    />
  </div>
  <div className="flex flex-col">
    <label className="text-[11px] text-[#667085] font-semibold uppercase">
      EMAIL
    </label>
    <input
      type="email"
      placeholder="john@example.com"
      className="h-[40px] px-3 rounded-[10px] bg-[#F2F4F7] outline-none text-[14px] text-[#2A3439] placeholder-[#6B7280]"
    />
  </div>
</div>

<div className="flex flex-col mt-3">
  <label className="text-[11px] text-[#667085] font-semibold uppercase">
    COMPANY NAME
  </label>
  <input
    type="text"
    placeholder="Company Name"
    className="h-[40px] w-full px-3 rounded-[10px] bg-[#F2F4F7] outline-none text-[14px] text-[#2A3439] placeholder-[#6B7280]"
  />
</div>

          <div className="flex items-start gap-2 text-[12px] text-[#667085]">
            <input type="checkbox" className="mt-1" />
            <p>
              I accept <span className="text-[#0053DB]">Terms and Conditions</span> and the Privacy Policy
            </p>
          </div>

          <div className="h-[52px] border rounded-[10px] flex items-center px-3 justify-between text-[13px] text-[#667085]">
             <input type="checkbox" className="mt-1" /><span>I'm not a robot</span>
            <div className="text-[10px]">RECAPTCHA</div>
          </div>
          <button
            onClick={() => onNavigate("register-otp")}
            className="h-[44px] rounded-[10px] bg-gradient-to-r from-[#0053DB] to-[#0048C1] text-white text-[14px] font-semibold shadow-[0_8px_15px_rgba(0,83,219,0.2)]"
          >
            Get OTP
          </button>
        </div>
      </div>
<div className="fixed bottom-0 left-0 w-full max-w-[1458px] h-[72px] flex justify-end items-center px-6 py-4 text-[12px] text-[#667085] space-x-3">
 
  <button
    onClick={() => onNavigate("home")}
className="text-[#667085] px-4 py-2 border border-[#667085] rounded-[8px]"
  >
Back
  </button>
</div>
    </div>
  );
}

