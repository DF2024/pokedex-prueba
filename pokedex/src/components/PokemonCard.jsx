import { Link } from "react-router-dom";

const cards = Array.from({ length: 6 });

const PokemonCard = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-20 py-10 w-[1420px] mx-auto">
      {cards.map((_, index) => (
        <div
          key={index}
          className="bg-[#f2f2f2] border-4 border-gray-700 rounded-2xl p-4 shadow-lg"
        >
  
          <div className="flex justify-center gap-3 mb-3">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full" />
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full" />
          </div>

          <div className="bg-white border-4 border-gray-600 rounded-xl p-3">
            <img
              src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1160"
              alt=""
              className="h-48 w-full object-cover rounded-md"
            />

            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">#00001</p>
              <p className="font-bold text-gray-800">Pokémon</p>

              <div className="mt-3 flex justify-center gap-2">
                <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded">
                  Tipo
                </span>
                <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">
                  Poder
                </span>
              </div>
            </div>
          </div>


          <div className="flex items-center justify-between mt-4">

            <div className="w-10 h-10 bg-red-600 rounded-full border-2 border-gray-700" />

            <div className="flex gap-3">
                <Link to='/details'>
                    <button className="bg-gray-900 text-white p-2 px-4 rounded-2xl transition hover:scale-110 hover:shadow-xl">More</button>
                </Link>
                <button className="bg-gray-900 text-white p-2 px-2 rounded-full transition hover:scale-110 hover:shadow-xl">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path d="M6 12H18M12 6V18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                        </g>
                    </svg>
                </button>
            </div>


            <div className="flex flex-col gap-1">
              <span className="w-12 h-1 bg-gray-700 rounded" />
              <span className="w-12 h-1 bg-gray-700 rounded" />
              <span className="w-12 h-1 bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
