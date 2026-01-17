const InfoPokemon = ({pokemon}) => {
    return(
        <div className="flex flex-col items-center mx-auto gap-10 mb-2 mt-1">
            <div>
                <h1 className="text-7xl font-black text-gray-800 uppercase italic tracking-tighter">{pokemon.name}</h1>
            </div>
            
            <div className="flex gap-30">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        <p>Type</p>
                        <div className="flex items-center gap-4">
                        {pokemon.types.map((t) => (
                                <span
                                key={t}
                                className={`p-2 rounded-2xl text-white ${
                                    t === "dragon"
                                    ? "bg-emerald-800"
                                    : t === "flying"
                                    ? "bg-purple-900"
                                    : "bg-gray-600"
                                }`}
                                >
                                {t.charAt(0).toUpperCase() + t.slice(1)}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p >Height</p>
                        <span className="text-2xl">{pokemon.height} m</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p>Weight</p>
                        <span className="text-2xl">{pokemon.weight} kg</span>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div flex flex-col gap-1>
                        <p>Species</p>
                        <h3 className="text-2xl">{pokemon.species.name}</h3>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>Abilities</p>
                        {pokemon.abilities.map((a) => (
                        <h3 key={a.ability.name} className="text-2xl">
                            {a.ability.name.charAt(0).toUpperCase() + a.ability.name.slice(1)}
                            {a.is_hidden ? " (Hidden)" : ""}
                        </h3>
                        ))}
                    </div>
            </div>
        </div>
        </div>
    )
}

export default InfoPokemon