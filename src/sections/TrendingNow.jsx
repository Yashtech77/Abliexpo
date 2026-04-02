import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewExhibitionCard from '../components/NewExhibitionCard';

function TrendingNow() {
  // Sample exhibition data
  const exhibitions = [
    {
      id: 1,
      title: "International Technology Expo 2024",
      date: "March 15-17, 2024",
      location: "Virtual Exhibition Hall",
      category: "Technology",
      status: "LIVE",
      image: "/src/assets/hero.png"
    },
    {
      id: 2,
      title: "Global Fashion Week Digital",
      date: "March 20-22, 2024",
      location: "Paris Virtual Venue",
      category: "Fashion",
      status: "UPCOMING",
      image: "/src/assets/hero.png"
    },
    {
      id: 3,
      title: "Automotive Innovation Summit",
      date: "March 10-12, 2024",
      location: "Detroit Virtual Center",
      category: "Automotive",
      status: "OFFLINE",
      image: "/src/assets/hero.png"
    },
    {
      id: 4,
      title: "Healthcare & Medical Devices Expo",
      date: "March 25-27, 2024",
      location: "Virtual Medical Center",
      category: "Healthcare",
      status: "UPCOMING",
      image: "/src/assets/hero.png"
    },
    {
      id: 5,
      title: "Real Estate & Property Showcase",
      date: "April 1-3, 2024",
      location: "Dubai Virtual Estate",
      category: "Real Estate",
      status: "LIVE",
      image: "/src/assets/hero.png"
    },
    {
      id: 6,
      title: "Food & Beverage International",
      date: "April 5-7, 2024",
      location: "Virtual Food Hall",
      category: "Food & Beverage",
      status: "UPCOMING",
      image: "/src/assets/hero.png"
    }
  ];

  const scrollLeft = () => {
    const container = document.getElementById('trending-container');
    if (container) {
      container.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('trending-container');
    if (container) {
      container.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Trending Now
            </h2>
            <p className="text-gray-600">
              Discover the most popular exhibitions happening right now
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollRight}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Exhibition Cards Container */}
        <div
          id="trending-container"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {exhibitions.map((exhibition) => (
            <div key={exhibition.id} className="flex-none w-80">
              <NewExhibitionCard exhibition={exhibition} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
            View All Exhibitions
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default TrendingNow;
