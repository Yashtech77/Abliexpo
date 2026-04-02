import { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

function NewHeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black/90">
          {/* This would be replaced with actual video background */}
          <div className="w-full h-full bg-[url('/src/assets/hero.png')] bg-cover bg-center opacity-60"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Bringing The World Market
            <br />
            To Your Screen
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience global exhibitions from anywhere. Connect with exhibitors, explore products, and discover opportunities worldwide.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200">
            Explore Exhibitions
          </button>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 flex items-center gap-4">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
        >
          <Volume2 className={`w-5 h-5 text-white ${isMuted ? 'opacity-50' : ''}`} />
        </button>
        <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
          <Play className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}

export default NewHeroSection;
