import { getPokemons } from "../../api/PokeInfo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons()
      .then((data) => {
        setPokemon(Array.isArray(data) ? data : []);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
    <div className="min-h-screen flex justify-center items-center">
      <svg class="size-8 animate-spin text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>

        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
);
  }

  return (
    <div 
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-8
          px-4
          sm:px-8
          lg:px-12
          py-10
          max-w-[1800px]
          mx-auto
      "
    >
      {pokemon.map((item) => (
        <div
          key={item.id}
          className="
            w-full
            max-w-[320px]
            mx-auto
            bg-[#e0e0e0]
            rounded-[30px]
            p-5
            border-r-[12px] border-b-[8px] border-[#d4d4d4]
            transition-all duration-300
            hover:-translate-y-2
            hover:shadow-[0_30px_60px_rgba(0,0,0,0.45)]
            relative
            group
          "
        >
          {/* Bisagra lateral */}
          <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-[#d1d1d1] rounded-r-full shadow-inner" />

          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex gap-2">
              {/* Lente principal */}
              <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-[#e0e0e0]
                shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                <div className="w-2 h-2 bg-white/40 rounded-full blur-[1px]" />
              </div>

              {/* Luces pequeñas */}
              <div className="flex gap-1 mt-1">
                <div className="w-2 h-2 rounded-full bg-red-600 shadow-inner" />
                <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-inner" />
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-inner" />
              </div>
            </div>

            <span className="text-[10px] font-mono font-bold text-gray-500 bg-gray-200 px-2 rounded shadow-inner">
              #{item.id}
            </span>
          </div>

          {/* Pantalla */}
          <div className="
            bg-[#c3cfc9]
            rounded-xl
            p-3
            mb-5
            shadow-[inset_4px_4px_8px_#a4afa9,inset_-4px_-4px_8px_#e2efeb]
            relative
            overflow-hidden
          ">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none
              bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)]
              bg-[length:100%_2px]" />

            <div className="bg-white/40 rounded-lg p-2 backdrop-blur-sm border border-white/20">
              <img
                src={item.image}
                alt={item.name}
                className="h-28 sm:h-32 w-full object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Info */}
          <div className="mb-6 space-y-1">
            <h3 className="text-lg font-black text-gray-800 uppercase italic tracking-tighter">
              {item.name}
            </h3>

            <div className="flex gap-2 flex-wrap">
              {item.types?.map((type) => (
                <span
                  key={type}
                  className="bg-blue-700 text-white text-xs px-2 py-1 rounded shadow-inner"
                >
                  {type}
                </span>
              ))}

              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded shadow-inner">
                EXP {item.power}
              </span>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-between pt-2">
            {/* D-Pad */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute w-10 h-3 bg-gray-800 rounded-sm shadow-md" />
              <div className="absolute w-3 h-10 bg-gray-800 rounded-sm shadow-md" />
            </div>

            {/* Botones */}
            <div className="flex gap-3">
              <Link to={`/details/${item.id}`}>
                <button className="
                  w-10 h-10
                  bg-[#e0e0e0]
                  rounded-full
                  shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                  active:shadow-[inset_2px_2px_4px_#bebebe]
                  text-gray-700
                  font-bold
                ">
                  i
                </button>
              </Link>

              <button className="
                w-10 h-10
                bg-[#e0e0e0]
                rounded-full
                shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                active:shadow-[inset_2px_2px_4px_#bebebe]
                text-xl
              ">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 mx-auto">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#e60000"></path> 
                    </g>
                  </svg>

                  
              </button>
            </div>

            {/* Slot */}
            <div className="w-8 h-4 bg-gray-400 rounded-full shadow-inner border-t border-white/30" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonCard;
