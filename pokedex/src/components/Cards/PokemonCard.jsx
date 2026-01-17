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
    return <p className="text-center py-20">Cargando Pokémon...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-12 px-20 py-14 w-[1420px] mx-auto">
      {pokemon.map((item) => (
        <div
          key={item.id}
          className="
            w-[320px]
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
                className="h-32 w-full object-contain drop-shadow-md"
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
                text-red-600
                text-xl
              ">
                +
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
