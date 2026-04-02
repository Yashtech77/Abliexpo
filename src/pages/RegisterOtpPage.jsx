import { useRef } from "react";

function RegisterOtpPage({ onNavigate }) {
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
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FB]">
      <div className="w-[480px] max-w-[480px] h-[560.5px] flex flex-col items-center justify-center gap-[40px] p-[40px] bg-white rounded-2xl shadow-sm">
        
        <div className="text-center">
          <h2 className="text-[24px] font-semibold text-[#1A1A1A]">
            Verify Identity
          </h2>
          <p className="text-[14px] text-gray-500 mt-2 leading-5">
            Enter the 6-digit code sent to your mobile +1 •••<br />
            ••• 42 or email.
          </p>
        </div>

        <div className="flex gap-3">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              maxLength="1"
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-[48px] h-[56px] border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:border-[#0053DB]"
            />
          ))}
        </div>

        <button
          onClick={() => onNavigate("home")}
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
          <p className="mt-3 text-[12px] text-gray-400">
            Expires in 01:54
          </p>
        </div>

        <p className="text-[12px] text-gray-400 text-center">
          Having trouble? Contact Support
        </p>

      </div>
    </div>
  );
}

export default RegisterOtpPage;