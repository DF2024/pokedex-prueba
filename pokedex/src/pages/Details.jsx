const PokemonDetails = () => {
    return (
        <div className="p-27">
            <div className="
                flex 
                bg-[#e0e0e0] 
                w-[1220px]
                rounded-[30px]
                border-r-[12px] border-b-[8px] border-[#d4d4d4]
                mx-auto
                ">
                <div className="flex flex-col gap-5 p-7">

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
                        #00001
                        </span>
                    </div>

                    <h1 className="text-7xl font-black text-gray-800 uppercase italic tracking-tighter">Pokemón</h1>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet id cum explicabo vel! Accusantium quae voluptatum aperiam consequatur! Molestiae suscipit a ducimus repellat esse modi laudantium reprehenderit ipsa ab.
                    </p>

                    <div className="flex gap-3">
                        <span className="bg-blue-700 text-amber-50 p-1 rounded-sm">Height</span>
                        <span className="bg-red-700 text-amber-50 p-1 rounded-sm">Weight</span>
                    </div>

                    <h2>Stats</h2>
                    <div className="flex gap-3">
                        <span className="bg-blue-700 text-amber-50 p-1 rounded-sm">Height</span>
                        <span className="bg-red-700 text-amber-50 p-1 rounded-sm">Weight</span>
                    </div>
                    
                    <h2>Abilities</h2>
                    <div>
                        <span className="bg-red-700 text-amber-50 p-1 rounded-sm">Overgrow</span>
                    </div>
                </div>
                    <div className="p-4">
                        <div className="
                            bg-[#c3cfc9]
                            rounded-xl
                            p-3
                            mb-5
                            shadow-[inset_4px_4px_8px_#a4afa9,inset_-4px_-4px_8px_#e2efeb]
                            relative
                            overflow-hidden
                        ">
                            {/* Grid retro */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none
                            bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)]
                            bg-[length:100%_2px]" />

                                <div className=" bg-white/40 rounded-lg p-2 backdrop-blur-sm border border-white/20">
                                    <img
                                        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1160"
                                        alt=""
                                        className="w-[1500px]object-contain drop-shadow-md "
                                    />
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PokemonDetails