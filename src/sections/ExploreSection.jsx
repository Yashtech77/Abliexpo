import React from "react";

const ExploreSection = () => {
  return (
    <div className="bg-[#0f2747] text-white py-16 px-6 md:px-20">
    
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Visit our global expo 365
        </h2>
        <p className="text-gray-300 cursor-pointer hover:underline">
          Explore more
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
    
        <div className="w-full">
          <iframe
            className="w-full h-[250px] md:h-[350px] rounded-xl"
            src="https://www.youtube.com/embed/qPGtos7vPp0"
            title="Main Video"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 bg-[#1b3558] p-4 rounded-xl">
            <div className="w-32">
              <iframe
                className="w-full h-20 rounded-md"
                src="https://www.youtube.com/embed/sk2W7rVZQTU"
                title="Video 1"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <p className="text-sm text-gray-300">06:12</p>
              <p className="text-sm md:text-base">
                Why renowned industrialists are using Ablifree? | Testimonial
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#1b3558] p-4 rounded-xl">
            <div className="w-32">
              <iframe
                className="w-full h-20 rounded-md"
                src="https://www.youtube.com/embed/sk2W7rVZQTU"
                title="Video 2"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <p className="text-sm text-gray-300">04:05</p>
              <p className="text-sm md:text-base">
                Industrialist's Experience with Ablifree Business Network |
                Testimonial
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;