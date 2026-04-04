import { useRef } from "react";
import { Clock , HelpCircle} from "lucide-react";
function RegisterOtpPage({ onNavigate, setIsLoggedIn }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    if (e.target.value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FB]">
      
      <div className="w-[480px] max-w-[480px] h-[520px] bg-white rounded-2xl shadow-sm px-[40px] py-[36px] flex flex-col items-center justify-center gap-[32px]">
        
        <div className="text-center">
          <h2 className="text-[24px] font-semibold text-[#1A1A1A]">
            Verify Identity
          </h2>
          <p className="text-[14px] text-gray-500 mt-2 leading-5">
            Enter the 6-digit code sent to your mobile +1 •••<br />
            ••• 42 or email.
          </p>
        </div>

        <div className="flex gap-[12px]">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              maxLength="1"
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-[48px] h-[56px] border border-[#E5E7EB] rounded-lg text-center text-lg focus:outline-none focus:border-[#0053DB]"
            />
          ))}
        </div>

        <button
          onClick={() => {
  setIsLoggedIn(true)
  onNavigate("home")
}}
          className="w-full h-[48px] rounded-lg text-white font-medium bg-[#0053DB]"
        >
          Login →
        </button>

        <div className="text-center">
          <p className="text-[13px] text-gray-500">
            Didn’t receive the code?{" "}
            <span className="text-[#0053DB] cursor-pointer font-medium">
              Resend Code
            </span>
          </p>
          <div className="mt-3 flex justify-center">
  <div className="w-[168px] h-[32px] bg-[#E1E9EE] rounded-full flex items-center justify-center px-[16px] py-[8px] gap-2">
    <Clock size={14} className="text-[#4B5563]" />
    <span className="text-[12px] text-[#4B5563]">
      Expires in 01:54
    </span>
  </div>
</div>
        </div>

      </div>
      <p className="mt-4 flex items-center justify-center gap-2 text-[12px] text-gray-400">
  <HelpCircle size={14} className="text-gray-400" />
  <span>
    Having trouble?{" "}Contact Support
   
  </span>
</p>

    </div>
  );
}

export default RegisterOtpPage;