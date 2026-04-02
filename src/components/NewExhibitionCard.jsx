import { Share2, Calendar, MapPin } from 'lucide-react';

function NewExhibitionCard({ exhibition }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'LIVE':
        return 'bg-green-500';
      case 'OFFLINE':
        return 'bg-gray-500';
      case 'UPCOMING':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={exhibition.image || '/src/assets/hero.png'}
          alt={exhibition.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`${getStatusColor(exhibition.status)} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {exhibition.status}
          </span>
        </div>

        {/* Share Button */}
        <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
          <Share2 className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
          {exhibition.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Calendar className="w-4 h-4" />
          <span>{exhibition.date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{exhibition.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {exhibition.category}
          </span>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewExhibitionCard;
