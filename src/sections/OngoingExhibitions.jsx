import { useEffect, useState } from "react";

const exhibitions = [
  {
    title: "Power & Electrical Equipments E - Expo",
    category: "Energy",
    date: "20 Feb",
    year: "2022",
    img: "https://images.unsplash.com/photo-1581090700227-1e8b9b2e1c2b",
    desc: "Explore latest innovations in electrical and power equipment industry.",
    
  },
  {
    title: "INBIZ Expo !",
    category: "All",
    date: "01 Mar",
    year: "2022",
    img: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
    desc: "A global platform for business networking and opportunities.",
  },
  {
    title: "Project Handmade India",
    category: "Apparel",
    date: "21 Dec",
    year: "2022",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    desc: "Celebrating handmade crafts and local artisans across India.",
  },
  {
    title: "Tech Future Expo",
    category: "Technology",
    date: "10 Jan",
    year: "2023",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
     desc: "Experience cutting-edge technology and future innovations.",
  },
  {
    title: "Food Carnival",
    category: "Food",
    date: "15 Apr",
    year: "2023",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
   desc: "Taste global cuisines and enjoy unique food experiences.",
  },
  {
    title: "Startup Summit",
    category: "Business",
    date: "12 May",
    year: "2023",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    desc: "Connect with investors, founders, and emerging startups.",
  },
  {
    title: "AI Expo",
    category: "AI",
    date: "05 Jun",
    year: "2023",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
     desc: "Explore artificial intelligence trends and real-world use cases.",
  },
  {
    title: "Medical Expo",
    category: "Health",
    date: "18 Jul",
    year: "2023",
    img: "https://images.unsplash.com/photo-1588776814546-ec7e5b7b5b23",
     desc: "Showcasing healthcare innovations and medical advancements.",
  },
  {
    title: "Auto Expo",
    category: "Automobile",
    date: "02 Aug",
    year: "2023",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
     desc: "Discover the latest trends in automotive design and mobility.",
  },
  {
    title: "Fashion Week",
    category: "Fashion",
    date: "25 Sep",
    year: "2023",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
    desc: "Experience top fashion trends, designers, and runway shows.",
  },
];

function OngoingExhibitions() {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

  const extended = [...exhibitions, ...exhibitions.slice(0, visibleCards)];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === exhibitions.length) {
      setTimeout(() => {
        setIndex(0);
      }, 700);
    }
  }, [index]);

  return (
    <section className="bg-white py-24 text-center overflow-hidden">

      <h2 className="text-3xl font-bold text-black">
        On-going Exhibitions
      </h2>
      <p className="text-gray-500 mt-2">
        You can choose featured project in event detail
      </p>

      <div className="mt-14 overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {extended.map((item, i) => (
            <div
              key={i}
               className="min-w-[calc((100%-3rem)/3)] bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              
  <div className="relative overflow-hidden">
    <img
      src={item.img}
      className="h-56 w-full object-cover transition duration-500 hover:scale-110"
      alt=""
    />

    <span className="absolute top-4 left-4 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
      {item.category}
    </span>
  </div>
             <div className="relative z-20 flex justify-center -mt-12">
                <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center text-sm font-semibold shadow-lg">
                  <span>{item.date}</span>
                  <span className="text-xs">{item.year}</span>
                </div>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
    {item.desc}
  </p>

                <button className="mt-5 border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-2 flex-wrap max-w-[220px] mx-auto">
        {exhibitions.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              index % exhibitions.length === i
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default OngoingExhibitions;