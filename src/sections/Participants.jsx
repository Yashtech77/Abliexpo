import React from "react";

const Participants = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-black">Participants</h2>
        <p className="text-gray-500 mt-2">
          You can choose featured project in event detail
        </p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 justify-center">

        <div className="bg-white shadow-md rounded overflow-hidden w-full max-w-sm mx-auto">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=1200"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="font-semibold">Oilmax Systems Pvt Ltd</h3>
            <p className="text-sm text-gray-500 mt-1">Tags</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3">
            View Details →
          </button>
        </div>

        <div className="bg-white shadow-md rounded overflow-hidden w-full max-w-sm mx-auto">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h3 className="font-semibold">Ecorain System India Pvt Ltd</h3>
            <p className="text-sm text-gray-500 mt-1">Tags</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-3">
            View Details →
          </button>
        </div>

      </div>

    </div>
  );
};

export default Participants;