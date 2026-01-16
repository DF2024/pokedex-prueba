const PokemonCard = ({ pokemon }) => (
  <div className="w-[320px] bg-[#e0e0e0] rounded-[30px] p-5 shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] border-r-[12px] border-b-[8px] border-[#d4d4d4] relative group">
    {/* Bisagra Lateral Estilo Pokédex */}
    <div className="absolute left-0 top-1/4 bottom-1/4 w-2 bg-[#d1d1d1] rounded-r-full shadow-inner" />

    {/* Header: Luces y Sensores */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex gap-2">
        <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-[#e0e0e0] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] flex items-center justify-center">
          <div className="w-2 h-2 bg-white/40 rounded-full blur-[1px]" />
        </div>
        <div className="flex gap-1 mt-1">
          <div className="w-2 h-2 rounded-full bg-red-600 shadow-inner" />
          <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-inner" />
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-inner" />
        </div>
      </div>
      <span className="text-[10px] font-mono font-bold text-gray-500 tracking-widest bg-gray-200 px-2 rounded shadow-inner">
        #{pokemon.id}
      </span>
    </div>

    {/* Pantalla Principal */}
    <div className="bg-[#c3cfc9] rounded-xl p-3 shadow-[inset_4px_4px_8px_#a4afa9,inset_-4px_-4px_8px_#e2efeb] mb-4 relative overflow-hidden">
      {/* Efecto de Rejilla de Pantalla Retro */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      <div className="bg-white/40 rounded-lg p-2 backdrop-blur-sm border border-white/20">
        <img
          src={pokemon.img}
          alt={pokemon.name}
          className="h-32 w-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>

    {/* Información del Pokémon */}
    <div className="mb-6 space-y-1">
      <h3 className="text-lg font-black text-gray-800 uppercase italic tracking-tighter leading-none">
        {pokemon.name}
      </h3>
      <div className="flex items-center gap-2">
        <div className={h-1.5 flex-1 bg-gray-300 rounded-full overflow-hidden shadow-inner}>
          <div 
            className={${pokemon.color} h-full rounded-full} 
            style={{ width: ${(pokemon.hp / 120) * 100}% }}
          />
        </div>
        <span className="text-[10px] font-bold text-gray-500">HP {pokemon.hp}</span>
      </div>
    </div>

    {/* Controles Inferiores */}
    <div className="flex items-center justify-between pt-2">
      {/* D-Pad Simplificado */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute w-10 h-3 bg-gray-800 rounded-sm shadow-md" />
        <div className="absolute w-3 h-10 bg-gray-800 rounded-sm shadow-md" />
      </div>

      {/* Botones de Acción */}
      <div className="flex gap-3">
        <button className="w-10 h-10 bg-[#e0e0e0] rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe] flex items-center justify-center text-gray-600 transition-all">
          <Info size={18} />
        </button>
        <button className="w-10 h-10 bg-[#e0e0e0] rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_2px_2px_4px_#bebebe] flex items-center justify-center text-red-500 transition-all">
          <Plus size={20} strokeWidth={3} />
        </button>
      </div>

      {/* Botón de Entrada */}
      <div className="w-8 h-4 bg-gray-400 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] border-t border-white/20" />
    </div>
  </div>
);