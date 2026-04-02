import { motion } from "framer-motion";

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      
      {/* Wave 1 */}
      <motion.div
        className="absolute w-[200%] h-[200%] bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600 opacity-20 blur-3xl rounded-[40%]"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Wave 2 */}
      <motion.div
        className="absolute w-[200%] h-[200%] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 opacity-15 blur-3xl rounded-[45%]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Wave 3 */}
      <motion.div
        className="absolute w-[200%] h-[200%] bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 opacity-10 blur-3xl rounded-[50%]"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          rotate: [0, 360, 720],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default WaveBackground;
