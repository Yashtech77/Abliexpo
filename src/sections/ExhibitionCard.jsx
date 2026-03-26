function ExhibitionCard({ data }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{data.title}</h3>

        <p className="text-sm text-gray-600 mt-2">{data.date}</p>

        <p className="text-sm text-gray-600">{data.stalls} Stalls</p>

        <p className="text-sm text-gray-500 mt-3 line-clamp-2">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default ExhibitionCard;
