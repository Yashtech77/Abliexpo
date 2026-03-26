import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white">

      <div className="bg-gray-100 py-16 px-6 md:px-20">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-black">
            Exhibitions Powered by
          </h2>
          <p className="text-gray-500 mt-2">
            You can choose featured project in event detail
          </p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded"></div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"
              alt="expo"
              className="w-full h-52 object-cover"
            />
            <div
              onClick={() => alert("Expo Details Page Coming Soon 🚀")}
              className="absolute -bottom-6 left-1/2 -translate-x-[60%] bg-yellow-400 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer hover:scale-110 transition"
            >
              <span className="text-xl font-bold">→</span>
            </div>
          </div>

          <div className="pt-10 pb-6 text-center">
            <h3 className="text-lg font-semibold">Abli Expo India</h3>
            <p className="text-gray-500 text-sm mt-1">Abli Expo India</p>
          </div>

          <div className="bg-[#0f2747] text-white flex justify-around py-6 text-center">
            <div>
              <p className="text-sm">On Going Events</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="border-l border-gray-400"></div>
            <div>
              <p className="text-sm">Upcoming Events</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="border-l border-gray-400"></div>
            <div>
              <p className="text-sm">Past Events</p>
              <p className="text-2xl font-bold">4</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition cursor-pointer">
            <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"
              alt="Textile Expo"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              Textile Expo
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-md hover:scale-105 transition cursor-pointer">
            <img
           src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80"
              alt="Fashion Expo"
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              Fashion Expo
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HomePage;